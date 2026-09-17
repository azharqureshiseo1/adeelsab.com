/**
 * Business facts that are NOT yet confirmed.
 *
 * Rule: a `null` value renders a visible "TODO:" marker on the site. Never replace
 * a null with a guess — set the real value or leave it. Every entry is tracked in
 * CONTENT-TODO.md.
 */
export type Fact = { value: string | null; todo: string };

const todo = (label: string): Fact => ({ value: null, todo: label });
const known = (value: string): Fact => ({ value, todo: "" });

export const facts = {
  // Launch
  // No target launch date is published — the owner does not want a date on the site until
  // it is certain. Founding Sellers are told the confirmed date first, by WhatsApp.
  mobileAppAtLaunch: todo("Mobile app at launch? (yes/no)"),

  // Money
  /** Payouts are weekly — written directly into the copy in site.ts ("every week" / "ہر ہفتے"). */
  payoutSchedule: known("Weekly"),
  /** Flat delivery charge per parcel, anywhere in Pakistan. Also set in shipping.ts → rateCard. */
  deliveryCharge: known("Rs 350"),
  minPayout: known("Rs 3,000"),
  codRemittanceDays: known("9"),
  /** The seller is not charged for RTO — the customer who placed the order pays the return charge. */
  rtoCharge: known("Rs 0"),
  /** No listing fee at all — commission is the only fee on a sale. */
  listingFee: known("Rs 0"),
  // No COD handling fee and no dispute hold period are charged or published — commission
  // is the only fee on a sale, so neither has a fact or a row on the pricing page.
  /** No transfer fee on payouts. */
  payoutFee: known("Rs 0"),
  /** Delivery attempts made before a parcel is returned to origin. */
  deliveryAttempts: known("3"),
  /** Customer return window, in days. Return shipping is paid by the customer. */
  returnWindowDays: known("2"),

  // Founding Seller Program
  foundingCap: known("100"),
  /** How long the 0% Founding Seller commission lasts, in months. */
  foundingCommissionMonths: known("2"),
  /** Founding Sellers pay no commission and no listing fee. */
  foundingCommissionRate: known("0%"),
  // No registered-seller counter is shown. The page states the cap (first 100) instead.

  // Company & trust
  legalName: known("ADEELSAB (PRIVATE) LIMITED"),
  secpNumber: known("0353167"),
  /** FBR registration number (shown as "FBR Reg. No."). */
  ntn: known("J816970"),
  officeAddress: known("Office No 20, First floor, Takbeer Plaza, Al Faisal Town, Lahore, Pakistan"),
  /** Support WhatsApp line. Keep in sync with NEXT_PUBLIC_WHATSAPP (digits only). */
  whatsappDisplay: known("+92 325 0040009"),
  /** Landline for vendors/sellers only — not a customer support line. */
  landlineDisplay: known("042 3663 2828"),
  /** Same landline in tel: format. */
  landlineTel: known("+924236632828"),
  supportEmail: known("support@adeelsab.com"),
  // One inbox for now; split when a separate business address exists.
  businessEmail: known("support@adeelsab.com"),
  officeHours: known("9:00 am – 9:00 pm"),

  // Social — full profile URLs
  facebook: known("https://www.facebook.com/adeelsab.pk"),
  instagram: known("https://www.instagram.com/adeelsab.pk"),
  tiktok: known("https://www.tiktok.com/@adeelsab.pk"),
  threads: known("https://www.threads.com/@adeelsab.pk"),
} satisfies Record<string, Fact>;

export type FactKey = keyof typeof facts;
