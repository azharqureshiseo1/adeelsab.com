/**
 * Delivery rate card, timelines and fees. Every `null` renders a visible TODO.
 * Fill with confirmed figures before launch. (CONTENT-TODO #5, #6, #7)
 */
import type { L } from "@/lib/i18n";

export type Zone = { key: "intraCity" | "majorCities" | "restOfPakistan"; label: L; note: L };

export const zones: Zone[] = [
  {
    key: "intraCity",
    label: { en: "Within the same city", ur: "اسی شہر کے اندر" },
    note: { en: "Own fleet (where available)", ur: "اپنا فلیٹ (جہاں دستیاب ہو)" },
  },
  {
    key: "majorCities",
    label: { en: "Major cities", ur: "بڑے شہر" },
    note: { en: "TCS · Leopards · PostEx", ur: "TCS · Leopards · PostEx" },
  },
  {
    key: "restOfPakistan",
    label: { en: "Rest of Pakistan", ur: "باقی پاکستان" },
    note: { en: "TCS · Leopards · PostEx", ur: "TCS · Leopards · PostEx" },
  },
];

/** Delivery time per zone. Strings like "4–8 hours" or "2–3 working days" once confirmed. */
export const timelines: Record<Zone["key"], string | null> = {
  intraCity: null,
  majorCities: null,
  restOfPakistan: null,
};

export type WeightBand = { label: string; rates: Record<Zone["key"], number | null> };

/** Rates in PKR per parcel, by weight band and destination zone. */
export const rateCard: WeightBand[] = [
  { label: "Up to 0.5 kg", rates: { intraCity: null, majorCities: null, restOfPakistan: null } },
  { label: "0.5 – 1 kg", rates: { intraCity: null, majorCities: null, restOfPakistan: null } },
  { label: "1 – 2 kg", rates: { intraCity: null, majorCities: null, restOfPakistan: null } },
  { label: "2 – 5 kg", rates: { intraCity: null, majorCities: null, restOfPakistan: null } },
  { label: "Each additional kg", rates: { intraCity: null, majorCities: null, restOfPakistan: null } },
];

/** Return-to-origin charge, PKR per parcel, by zone. */
export const rtoCharges: Record<Zone["key"], number | null> = {
  intraCity: null,
  majorCities: null,
  restOfPakistan: null,
};

export const partners = [
  {
    slug: "tcs",
    name: "TCS",
    logo: "/partners/tcs.svg",
    line: {
      en: "Nationwide courier network reaching major cities and smaller towns.",
      ur: "ملک گیر کوریئر نیٹ ورک جو بڑے شہروں اور چھوٹے قصبوں تک پہنچتا ہے۔",
    },
  },
  {
    slug: "leopards",
    name: "Leopards Courier",
    logo: "/partners/leopards.svg",
    line: {
      en: "Courier network with cash-on-delivery service across Pakistan.",
      ur: "پورے پاکستان میں کیش آن ڈیلیوری سروس کے ساتھ کوریئر نیٹ ورک۔",
    },
  },
  {
    slug: "postex",
    name: "PostEx",
    logo: "/partners/postex.svg",
    line: {
      en: "E-commerce logistics with cash-on-delivery collection.",
      ur: "کیش آن ڈیلیوری کلیکشن کے ساتھ ای کامرس لاجسٹکس۔",
    },
  },
] as const;
