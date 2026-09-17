/** Joins truthy class names. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const pkr = new Intl.NumberFormat("en-PK", { maximumFractionDigits: 0 });

/** Formats a number as Pakistani rupees, e.g. "Rs 12,500". */
export function formatPKR(value: number): string {
  if (!Number.isFinite(value)) return "Rs 0";
  return `Rs ${pkr.format(Math.round(value))}`;
}

/** URL-safe slug from heading text (works for Latin; keeps Urdu letters). */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function siteUrl(path = "/"): string {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://adeelsab.com").replace(/\/$/, "");
  return `${base}${path === "/" ? "" : path}`;
}

export function whatsappLink(message?: string): string {
  const number = (process.env.NEXT_PUBLIC_WHATSAPP || "923250040009").replace(/\D/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${text}`;
}
