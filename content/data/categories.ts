/**
 * Product categories and commission rates.
 *
 * `commission` is a percentage of the item sale price. `null` renders a visible
 * TODO marker — never publish a guessed rate. (CONTENT-TODO #3)
 *
 * Confirmed by the owner: a single launch rate of 8% for every category.
 * Founding Sellers pay 0% (facts.foundingCommissionRate).
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
  { slug: "fashion", en: "Fashion & clothing", ur: "فیشن اور کپڑے", commission: 8, resellerPreview: true },
  { slug: "footwear", en: "Footwear", ur: "جوتے", commission: 8, resellerPreview: true },
  { slug: "beauty", en: "Beauty & personal care", ur: "بیوٹی اور پرسنل کیئر", commission: 8, resellerPreview: true },
  { slug: "home-kitchen", en: "Home & kitchen", ur: "گھر اور کچن", commission: 8, resellerPreview: true },
  {
    slug: "mobile-accessories",
    en: "Mobile accessories",
    ur: "موبائل ایکسیسریز",
    commission: 8,
    resellerPreview: true,
  },
  { slug: "electronics", en: "Electronics & appliances", ur: "الیکٹرانکس اور آلات", commission: 8 },
  { slug: "jewellery", en: "Jewellery & watches", ur: "زیورات اور گھڑیاں", commission: 8, resellerPreview: true },
  {
    slug: "kids-toys",
    en: "Kids, baby & toys",
    ur: "بچوں کا سامان اور کھلونے",
    commission: 8,
    resellerPreview: true,
  },
  { slug: "health", en: "Health & wellness", ur: "صحت اور تندرستی", commission: 8 },
  { slug: "sports", en: "Sports & fitness", ur: "کھیل اور فٹنس", commission: 8 },
  { slug: "stationery", en: "Books & stationery", ur: "کتابیں اور اسٹیشنری", commission: 8 },
  { slug: "auto", en: "Auto parts & accessories", ur: "آٹو پارٹس اور ایکسیسریز", commission: 8 },
  {
    slug: "handicrafts",
    en: "Handicrafts & local crafts",
    ur: "دستکاری اور مقامی ہنر",
    commission: 8,
    resellerPreview: true,
  },
  { slug: "grocery", en: "Grocery & packaged food", ur: "گروسری اور پیک شدہ خوراک", commission: 8 },
];

export const allowedCategorySlugs = [...categories.map((c) => c.slug), "other"];
