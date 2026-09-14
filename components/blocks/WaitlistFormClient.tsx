"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { CheckCircle2, RotateCcw, TriangleAlert } from "lucide-react";
import { T } from "@/components/T";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { useLang } from "@/components/layout/LangProvider";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";
import { track } from "@/lib/analytics";
import type { L } from "@/lib/i18n";
import { cn, whatsappLink } from "@/lib/utils";
import { BUSINESS_TYPES, VOLUMES, validateWaitlist, type FieldErrors } from "@/lib/validate";
import type { waitlistForm } from "@/content/site";

type Option = { value: string; label: L };

export type WaitlistFormProps = {
  audience: "local_seller" | "reseller" | "dropshipper";
  source: string;
  compact?: boolean;
  copy: typeof waitlistForm;
  cityOptions: Option[];
  categoryOptions: Option[];
};

type Status = "idle" | "pending" | "success" | "failure";

const FIELD_ORDER = [
  "full_name",
  "whatsapp",
  "city",
  "business_type",
  "category",
  "monthly_volume",
  "message",
] as const;

export function WaitlistFormClient({
  audience,
  source,
  compact,
  copy,
  cityOptions,
  categoryOptions,
}: WaitlistFormProps) {
  const { lang, t } = useLang();
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [values, setValues] = useState<Record<string, string>>({ business_type: audience });

  const f = copy.fields;
  const fid = (name: string) => `${id}-${name}`;

  function errorText(field: keyof FieldErrors): L | null {
    const code = errors[field];
    if (!code) return null;
    return copy.errors[code as keyof typeof copy.errors] ?? copy.errors.required;
  }

  function summary(): string {
    const city = cityOptions.find((c) => c.value === values.city);
    const type = values.business_type as keyof typeof copy.businessTypes;
    return [
      "Assalam o Alaikum AdeelSab, please add me to the waitlist.",
      `Name: ${values.full_name ?? ""}`,
      `WhatsApp: ${values.whatsapp ?? ""}`,
      `City: ${city ? city.label.en : ""}`,
      `Joining as: ${copy.businessTypes[type]?.en ?? ""}`,
      values.message ? `Note: ${values.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "pending") return;

    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const payload = { ...data, locale: lang, source_path: source };

    const check = validateWaitlist(payload);
    if (!check.ok) {
      setErrors(check.errors);
      const first = FIELD_ORDER.find((k) => check.errors[k]);
      if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setServerError(null);
    setStatus("pending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({ ok: false, error: "server" }))) as {
        ok: boolean;
        error?: string;
        fields?: FieldErrors;
      };
      if (json.ok) {
        setStatus("success");
        track("waitlist_submit", { business_type: check.data.business_type, city: check.data.city, locale: lang });
        return;
      }
      if (json.error === "validation" && json.fields) {
        setErrors(json.fields);
        setStatus("idle");
        return;
      }
      setServerError(json.error ?? "server");
      setStatus("failure");
    } catch {
      // Network failure — never silently lose the lead.
      setServerError("network");
      setStatus("failure");
    }
  }

  const shell = cn("relative rounded-card bg-white text-ink-800 shadow-lift", compact ? "p-5 md:p-6" : "p-6 md:p-8");

  if (status === "success") {
    return (
      <div className={shell} role="status" aria-live="polite">
        <CheckCircle2 size={44} strokeWidth={1.75} className="text-success" aria-hidden />
        <h3 className="h3 mt-4">
          <T v={copy.success.title} />
        </h3>
        <p className="mt-3 text-ink-500">
          <T v={copy.success.body} />
        </p>
        <Button
          href={whatsappLink(
            `Assalam o Alaikum AdeelSab, I just joined the waitlist. My name is ${values.full_name ?? ""}.`,
          )}
          variant="whatsapp"
          size="lg"
          className="mt-6"
        >
          <WhatsAppGlyph className="size-5" />
          <T v={copy.success.cta} />
        </Button>
      </div>
    );
  }

  if (status === "failure") {
    return (
      <div className={shell} role="alert">
        <TriangleAlert size={40} strokeWidth={1.75} className="text-warning" aria-hidden />
        <h3 className="h3 mt-4">
          <T v={copy.failure.title} />
        </h3>
        <p className="mt-3 text-ink-500">
          <T v={serverError === "rate_limited" ? copy.errors.rate_limited : copy.failure.body} />
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={whatsappLink(summary())} variant="whatsapp" size="lg">
            <WhatsAppGlyph className="size-5" />
            <T v={copy.failure.cta} />
          </Button>
          <Button variant="secondary" size="lg" onClick={() => setStatus("idle")}>
            <RotateCcw size={16} aria-hidden />
            <T v={copy.failure.retry} />
          </Button>
        </div>
      </div>
    );
  }

  const set = (name: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof FieldErrors]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className={shell} aria-describedby={`${id}-intro`}>
      <h3 className="h4">
        <T v={copy.title} />
      </h3>
      <p id={`${id}-intro`} className="text-small mt-1 text-ink-500">
        <T v={copy.intro} />
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Input
          id={fid("full_name")}
          name="full_name"
          label={<T v={f.fullName} />}
          placeholder={t(f.fullNamePh)}
          autoComplete="name"
          maxLength={80}
          required
          error={errorText("full_name")}
          onChange={set("full_name")}
        />
        <Input
          id={fid("whatsapp")}
          name="whatsapp"
          type="tel"
          inputMode="tel"
          label={<T v={f.whatsapp} />}
          placeholder={t(f.whatsappPh)}
          autoComplete="tel"
          maxLength={20}
          dir="ltr"
          required
          error={errorText("whatsapp")}
          onChange={set("whatsapp")}
        />
        <Select
          id={fid("city")}
          name="city"
          label={<T v={f.city} />}
          required
          defaultValue=""
          error={errorText("city")}
          onChange={set("city")}
        >
          <option value="" disabled>
            {t(f.cityPh)}
          </option>
          {cityOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {t(o.label)}
            </option>
          ))}
        </Select>
        <Select
          id={fid("business_type")}
          name="business_type"
          label={<T v={f.businessType} />}
          required
          defaultValue={audience}
          error={errorText("business_type")}
          onChange={set("business_type")}
        >
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>
              {t(copy.businessTypes[type])}
            </option>
          ))}
        </Select>
        {!compact && (
          <>
            <Select
              id={fid("category")}
              name="category"
              label={<T v={f.category} />}
              optionalLabel={<T v={f.optional} />}
              defaultValue=""
              onChange={set("category")}
            >
              <option value="">{t(f.categoryPh)}</option>
              {categoryOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {t(o.label)}
                </option>
              ))}
            </Select>
            <Select
              id={fid("monthly_volume")}
              name="monthly_volume"
              label={<T v={f.volume} />}
              optionalLabel={<T v={f.optional} />}
              defaultValue=""
              onChange={set("monthly_volume")}
            >
              <option value="">{t(f.volumePh)}</option>
              {VOLUMES.map((v) => (
                <option key={v} value={v}>
                  {t(copy.volumes[v])}
                </option>
              ))}
            </Select>
            <Textarea
              id={fid("message")}
              name="message"
              label={<T v={f.message} />}
              optionalLabel={<T v={f.optional} />}
              placeholder={t(f.messagePh)}
              rows={3}
              maxLength={1000}
              className="sm:col-span-2"
              error={errorText("message")}
              onChange={set("message")}
            />
          </>
        )}
      </div>

      {/* Honeypot — hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -start-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={fid("company_website")}>Company website</label>
        <input id={fid("company_website")} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        disabled={status === "pending"}
        aria-busy={status === "pending"}
      >
        {status === "pending" ? <T v={copy.submitting} /> : <T v={copy.submit} />}
      </Button>

      <p className="mt-4 text-[13px] leading-relaxed text-ink-500">
        <T v={copy.consent} />{" "}
        <Link href="/legal/privacy" className="font-medium text-brand-700 underline underline-offset-2">
          <T v={copy.privacy} />
        </Link>
        .
      </p>
    </form>
  );
}
