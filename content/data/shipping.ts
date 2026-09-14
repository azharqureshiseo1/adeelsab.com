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
    note: { en: "AdeelSab Couriers (own fleet)", ur: "AdeelSab Couriers (اپنا فلیٹ)" },
  },
  {
    key: "majorCities",
    label: { en: "Major cities", ur: "بڑے شہر" },
    note: { en: "TCS · Leopards · PostEx · M&P", ur: "TCS · Leopards · PostEx · M&P" },
  },
  {
    key: "restOfPakistan",
    label: { en: "Rest of Pakistan", ur: "باقی پاکستان" },
    note: { en: "TCS · Leopards · PostEx · M&P", ur: "TCS · Leopards · PostEx · M&P" },
  },
];

/** Delivery time per zone. Strings like "4–8 hours" or "2–3 working days" once confirmed. */
export const timelines: Record<Zone["key"], string | null> = {
  intraCity: null,
  majorCities: null,
  restOfPakistan: null,
};

export type WeightBand = { label: string; rates: Record<Zone["key"], number | null> };

/**
 * Delivery charge in PKR per parcel. AdeelSab charges one flat rate (Rs 350) for every
 * parcel, in every zone. Add rows here if weight bands are ever introduced.
 */
export const rateCard: WeightBand[] = [
  { label: "Every parcel", rates: { intraCity: 350, majorCities: 350, restOfPakistan: 350 } },
];

/** Return-to-origin charge, PKR per parcel, by zone. */
export const rtoCharges: Record<Zone["key"], number | null> = {
  intraCity: null,
  majorCities: null,
  restOfPakistan: null,
};

/** In-house same-city delivery fleet. */
export const ownCourier = {
  name: "AdeelSab Couriers",
  logo: { src: "/brand/adeelsab-couriers-dark.png", width: 411, height: 160 },
  logoOnDark: { src: "/brand/adeelsab-couriers-orange.png", width: 425, height: 160 },
  line: {
    en: "Our own riders for same-city pickup, delivery and cash collection.",
    ur: "اسی شہر میں پک اپ، ڈیلیوری اور کیش وصولی کے لیے ہمارے اپنے رائیڈرز۔",
  },
} as const;

/** National courier partners. Logos are generated into /public/logos by `npm run brand:assets`. */
export const partners = [
  {
    slug: "tcs",
    name: "TCS",
    logo: { src: "/logos/tcs.webp", width: 245, height: 96 },
    line: {
      en: "Nationwide courier network reaching major cities and smaller towns.",
      ur: "ملک گیر کوریئر نیٹ ورک جو بڑے شہروں اور چھوٹے قصبوں تک پہنچتا ہے۔",
    },
  },
  {
    slug: "leopards",
    name: "Leopards Courier",
    logo: { src: "/logos/leopards.webp", width: 239, height: 96 },
    line: {
      en: "Courier network with cash-on-delivery service across Pakistan.",
      ur: "پورے پاکستان میں کیش آن ڈیلیوری سروس کے ساتھ کوریئر نیٹ ورک۔",
    },
  },
  {
    slug: "postex",
    name: "PostEx",
    logo: { src: "/logos/postex.webp", width: 431, height: 96 },
    line: {
      en: "E-commerce logistics with cash-on-delivery collection.",
      ur: "کیش آن ڈیلیوری کلیکشن کے ساتھ ای کامرس لاجسٹکس۔",
    },
  },
  {
    slug: "mp",
    name: "M&P (Muller & Phipps)",
    logo: { src: "/logos/mp.webp", width: 188, height: 96 },
    line: {
      en: "Courier and logistics network serving cities across Pakistan.",
      ur: "پاکستان بھر کے شہروں میں کوریئر اور لاجسٹکس نیٹ ورک۔",
    },
  },
] as const;

/** Payment methods shown in the footer. */
export const paymentLogos = [
  { name: "JazzCash", src: "/logos/jazzcash.webp", width: 122, height: 96 },
  { name: "Easypaisa", src: "/logos/easypaisa.webp", width: 344, height: 96 },
  { name: "Stripe", src: "/logos/stripe.webp", width: 230, height: 96 },
] as const;

/** Regulators the company is registered with. */
export const regulatorLogos = [
  { name: "SECP", src: "/logos/secp.webp", width: 86, height: 96 },
  { name: "FBR", src: "/logos/fbr.webp", width: 259, height: 96 },
] as const;
