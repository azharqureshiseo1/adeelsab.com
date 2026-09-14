import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { REQUIRED_DB_ENV, requireEnv } from "./env";

let client: SupabaseClient | null = null;

/**
 * Server-side Supabase client using the SERVICE ROLE key.
 * Never import this from a client component — `server-only` enforces that at build time.
 */
export function getSupabase(): SupabaseClient {
  if (client) return client;
  requireEnv(REQUIRED_DB_ENV, "storing waitlist leads (Supabase)");
  client = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
  return client;
}
