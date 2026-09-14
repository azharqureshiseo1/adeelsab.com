import { createHash } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { sendLeadNotification } from "@/lib/mailer";
import { validateWaitlist } from "@/lib/validate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 10_000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

/**
 * In-memory rate limiter keyed by a SHA-256 hash of the IP (raw IPs are never kept).
 * Per-process only — it resets on restart/redeploy, which is acceptable for a waitlist.
 */
const hits = new Map<string, number[]>();

function hashIp(ip: string): string {
  return createHash("sha256")
    .update(`${process.env.IP_HASH_SALT ?? "adeelsab-waitlist"}:${ip}`)
    .digest("hex");
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd?.split(",")[0] || req.headers.get("x-real-ip") || "unknown").trim();
}

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  // Keep memory bounded on a shared host.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}

const json = (body: { ok: boolean; error?: string; fields?: unknown }, status = 200) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: NextRequest) {
  let body: Record<string, unknown> | null = null;
  try {
    const length = Number(req.headers.get("content-length") ?? 0);
    if (length > MAX_BODY_BYTES) return json({ ok: false, error: "payload_too_large" }, 413);

    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) return json({ ok: false, error: "payload_too_large" }, 413);
    try {
      const parsed: unknown = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
      body = parsed as Record<string, unknown>;
    } catch {
      return json({ ok: false, error: "invalid_json" }, 400);
    }

    const ipHash = hashIp(clientIp(req));
    if (rateLimited(ipHash)) return json({ ok: false, error: "rate_limited" }, 429);

    // Honeypot: bots fill every field. Pretend success and discard.
    if (typeof body.company_website === "string" && body.company_website.trim() !== "") {
      return json({ ok: true });
    }

    const result = validateWaitlist(body);
    if (!result.ok) return json({ ok: false, error: "validation", fields: result.errors }, 422);
    const lead = result.data;

    const { error } = await getSupabase()
      .from("waitlist_leads")
      .insert({ ...lead, ip_hash: ipHash });
    if (error) throw new Error(`Supabase insert failed: ${error.message}`);

    try {
      await sendLeadNotification(lead);
    } catch (mailErr) {
      // Lead is already stored — an email failure must never fail the request.
      console.error("[waitlist] notification email failed:", (mailErr as Error).message);
    }

    return json({ ok: true });
  } catch (err) {
    // Log the full payload so the lead can be recovered from the hPanel deployment logs.
    console.error("[waitlist] UNEXPECTED ERROR — lead not stored:", (err as Error).message, {
      payload: body ? { ...body, company_website: undefined } : null,
      at: new Date().toISOString(),
    });
    return json({ ok: false, error: "server" }, 500);
  }
}

const methodNotAllowed = () =>
  NextResponse.json({ ok: false, error: "method_not_allowed" }, { status: 405, headers: { Allow: "POST" } });

export { methodNotAllowed as GET, methodNotAllowed as PUT, methodNotAllowed as PATCH, methodNotAllowed as DELETE };
