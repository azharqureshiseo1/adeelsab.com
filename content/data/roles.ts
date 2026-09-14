/**
 * Open roles for /careers. Leave empty when nothing is open — the page then shows
 * "We're always looking — send your CV" instead of an empty list.
 */
import type { L } from "@/lib/i18n";

export type Role = {
  slug: string;
  title: L;
  team: L;
  location: L;
  type: L;
  summary: L;
};

export const roles: Role[] = [
  // Example shape — add confirmed openings only:
  // {
  //   slug: "seller-onboarding-associate",
  //   title: { en: "Seller Onboarding Associate", ur: "سیلر آن بورڈنگ ایسوسی ایٹ" },
  //   team: { en: "Merchant Success", ur: "مرچنٹ سکسیس" },
  //   location: { en: "Lahore (on-site)", ur: "لاہور (دفتر میں)" },
  //   type: { en: "Full-time", ur: "کل وقتی" },
  //   summary: { en: "…", ur: "…" },
  // },
];

export const careersEmail: string | null = null; // TODO: careers inbox (CONTENT-TODO #11)
