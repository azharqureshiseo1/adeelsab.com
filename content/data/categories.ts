/**
 * Product categories and commission rates.
 *
 * `commission` is a percentage of the item sale price. `null` renders a visible
 * TODO marker — never publish a guessed rate. (CONTENT-TODO #3)
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
  { slug: "fashion", en: "Fashion & clothing", ur: "فیشن اور کپڑے", commission: null, resellerPreview: true },
  { slug: "footwear", en: "Footwear", ur: "جوتے", commission: null, resellerPreview: true },
  { slug: "beauty", en: "Beauty & personal care", ur: "بیوٹی اور پرسنل کیئر", commission: null, resellerPreview: true },
  { slug: "home-kitchen", en: "Home & kitchen", ur: "گھر اور کچن", commission: null, resellerPreview: true },
  { slug: "mobile-accessories", en: "Mobile accessories", ur: "موبائل ایکسیسریز", commission: null, resellerPreview: true },
  { slug: "electronics", en: "Electronics & appliances", ur: "الیکٹرانکس اور آلات", commission: null },
  { slug: "jewellery", en: "Jewellery & watches", ur: "زیورات اور گھڑیاں", commission: null, resellerPreview: true },
  { slug: "kids-toys", en: "Kids, baby & toys", ur: "بچوں کا سامان اور کھلونے", commission: null, resellerPreview: true },
  { slug: "health", en: "Health & wellness", ur: "صحت اور تندرستی", commission: null },
  { slug: "sports", en: "Sports & fitness", ur: "کھیل اور فٹنس", commission: null },
  { slug: "stationery", en: "Books & stationery", ur: "کتابیں اور اسٹیشنری", commission: null },
  { slug: "auto", en: "Auto parts & accessories", ur: "آٹو پارٹس اور ایکسیسریز", commission: null },
  { slug: "handicrafts", en: "Handicrafts & local crafts", ur: "دستکاری اور مقامی ہنر", commission: null, resellerPreview: true },
  { slug: "grocery", en: "Grocery & packaged food", ur: "گروسری اور پیک شدہ خوراک", commission: null },
];

export const allowedCategorySlugs = [...categories.map((c) => c.slug), "other"];
