/**
 * Waitlist validation — shared by the API route and the client form.
 * Deliberately dependency-free (no Zod) to keep the bundle and install small.
 */
import { allowedCitySlugs } from "@/content/data/cities";
import { allowedCategorySlugs } from "@/content/data/categories";

export const BUSINESS_TYPES = ["local_seller", "reseller", "dropshipper", "other"] as const;
export const VOLUMES = ["starting", "1-50", "51-200", "201-1000", "1000+"] as const;

export type BusinessType = (typeof BUSINESS_TYPES)[number];

export type WaitlistInput = {
  full_name: string;
  whatsapp: string;
  city: string;
  business_type: BusinessType;
  category: string | null;
  monthly_volume: string | null;
  message: string | null;
  locale: "en" | "ur";
  source_path: string | null;
};

export type FieldError = "required" | "name" | "whatsapp" | "city" | "businessType" | "message";
export type FieldErrors = Partial<Record<keyof WaitlistInput, FieldError>>;

/**
 * Normalises a Pakistani mobile number to +92XXXXXXXXXX.
 * Accepts 03xxxxxxxxx, +923xxxxxxxxx, 923xxxxxxxxx and 00923xxxxxxxxx, with spaces/dashes.
 */
export function normalizePkWhatsapp(raw: string): string | null {
  const s = raw.replace(/[\s\-().]/g, "");
  let national: string | null = null;
  if (/^03\d{9}$/.test(s)) national = s.slice(1);
  else if (/^\+923\d{9}$/.test(s)) national = s.slice(3);
  else if (/^923\d{9}$/.test(s)) national = s.slice(2);
  else if (/^00923\d{9}$/.test(s)) national = s.slice(4);
  return national ? `+92${national}` : null;
}

const str = (v: unknown): string => (typeof v === "string" ? v.trim() : "");
const optional = (v: unknown, max: number): string | null => {
  const s = str(v);
  return s ? s.slice(0, max) : null;
};

export function validateWaitlist(
  body: Record<string, unknown>,
): { ok: true; data: WaitlistInput } | { ok: false; errors: FieldErrors } {
  const errors: FieldErrors = {};

  const full_name = str(body.full_name).replace(/\s+/g, " ");
  if (!full_name) errors.full_name = "required";
  else if (full_name.length < 2 || full_name.length > 80 || /[\r\n<>]/.test(full_name)) errors.full_name = "name";

  const rawWhatsapp = str(body.whatsapp);
  const whatsapp = normalizePkWhatsapp(rawWhatsapp);
  if (!rawWhatsapp) errors.whatsapp = "required";
  else if (!whatsapp) errors.whatsapp = "whatsapp";

  const city = str(body.city);
  if (!city) errors.city = "required";
  else if (!allowedCitySlugs.includes(city)) errors.city = "city";

  const business_type = str(body.business_type) as BusinessType;
  if (!business_type) errors.business_type = "required";
  else if (!BUSINESS_TYPES.includes(business_type)) errors.business_type = "businessType";

  const message = str(body.message);
  if (message.length > 1000) errors.message = "message";

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const category = str(body.category);
  const volume = str(body.monthly_volume);

  return {
    ok: true,
    data: {
      full_name,
      whatsapp: whatsapp!,
      city,
      business_type,
      category: allowedCategorySlugs.includes(category) ? category : null,
      monthly_volume: (VOLUMES as readonly string[]).includes(volume) ? volume : null,
      message: message || null,
      locale: body.locale === "ur" ? "ur" : "en",
      source_path: optional(body.source_path, 200),
    },
  };
}
