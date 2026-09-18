/**
 * Product categories and commission rates.
 *
 * `commission` is a percentage of the item sale price. `null` renders a visible
 * TODO marker — never publish a guessed rate. (CONTENT-TODO #3)
 *
 * Confirmed by the owner: a single launch rate of 7% for every category, Founding
 * Sellers included — the programme carries no commission discount.
 */
export type Category = {
  slug: string;
  en: string;
  ur: string;
  commission: number | null;
  /** Shown on the reseller category preview. */
  resellerPreview?: boolean;
};

export const categories: Category[] = [
  { slug: "fashion", en: "Fashion & clothing", ur: "فیشن اور کپڑے", commission: 7, resellerPreview: true },
  { slug: "footwear", en: "Footwear", ur: "جوتے", commission: 7, resellerPreview: true },
  { slug: "beauty", en: "Beauty & personal care", ur: "بیوٹی اور پرسنل کیئر", commission: 7, resellerPreview: true },
  { slug: "home-kitchen", en: "Home & kitchen", ur: "گھر اور کچن", commission: 7, resellerPreview: true },
  {
    slug: "mobile-accessories",
    en: "Mobile accessories",
    ur: "موبائل ایکسیسریز",
    commission: 7,
    resellerPreview: true,
  },
  { slug: "electronics", en: "Electronics & appliances", ur: "الیکٹرانکس اور آلات", commission: 7 },
  { slug: "jewellery", en: "Jewellery & watches", ur: "زیورات اور گھڑیاں", commission: 7, resellerPreview: true },
  {
    slug: "kids-toys",
    en: "Kids, baby & toys",
    ur: "بچوں کا سامان اور کھلونے",
    commission: 7,
    resellerPreview: true,
  },
  { slug: "health", en: "Health & wellness", ur: "صحت اور تندرستی", commission: 7 },
  { slug: "sports", en: "Sports & fitness", ur: "کھیل اور فٹنس", commission: 7 },
  { slug: "stationery", en: "Books & stationery", ur: "کتابیں اور اسٹیشنری", commission: 7 },
  { slug: "auto", en: "Auto parts & accessories", ur: "آٹو پارٹس اور ایکسیسریز", commission: 7 },
  {
    slug: "handicrafts",
    en: "Handicrafts & local crafts",
    ur: "دستکاری اور مقامی ہنر",
    commission: 7,
    resellerPreview: true,
  },
  { slug: "grocery", en: "Grocery & packaged food", ur: "گروسری اور پیک شدہ خوراک", commission: 7 },
];

export const allowedCategorySlugs = [...categories.map((c) => c.slug), "other"];
