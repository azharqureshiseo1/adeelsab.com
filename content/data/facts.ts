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
  launchDate: todo("Target launch date"),
  mobileAppAtLaunch: todo("Mobile app at launch? (yes/no)"),

  // Money
  payoutCycleDays: todo("Payout cycle (days after delivery)"),
  minPayout: todo("Minimum payout threshold (Rs)"),
  codRemittanceDays: todo("COD remittance (days after delivery)"),
  rtoCharge: todo("RTO charge per returned parcel"),
  listingFee: todo("Listing fee per product (Rs)"),
  holdPeriodDays: todo("Dispute hold period (days)"),
  codFee: todo("COD handling fee, if any"),
  payoutFee: todo("Payout / transfer fee, if any"),
  deliveryAttempts: todo("Delivery attempts before RTO"),
  returnWindowDays: todo("Customer return window (days)"),
  returnShippingPayer: todo("Who pays return shipping for customer returns"),

  // Founding Seller Program
  foundingCap: todo("Founding Seller cap (e.g. first 500)"),
  foundingCommissionMonths: todo("Reduced-commission period (months)"),
  foundingCommissionRate: todo("Founding Seller commission rate"),
  /** Hand-updated. Do not wire to a live counter. */
  foundingRegistered: todo("Registered Founding Sellers (hand-updated)"),

  // Company & trust
  secpNumber: known("0353167"),
  /** FBR registration number (shown as "FBR Reg. No."). */
  ntn: known("J816970"),
  officeAddress: known("H-115, S-4, Canal Forts 2, Khaira Pull, Jallo, Lahore, Pakistan"),
  /** DEMO number — replace with the real WhatsApp support line before launch (and NEXT_PUBLIC_WHATSAPP). */
  whatsappDisplay: known("+92 300 0000000"),
  supportEmail: known("support@adeelsab.com"),
  // One inbox for now; split when a separate business address exists.
  businessEmail: known("support@adeelsab.com"),
  officeHours: todo("Office hours (PKT)"),
  founderName: todo("Founder name"),
  founderBio: todo("Founder one-line bio"),

  // Social — full profile URLs
  facebook: known("https://www.facebook.com/adeelsab.pk"),
  instagram: known("https://www.instagram.com/adeelsab.pk"),
  tiktok: known("https://www.tiktok.com/@adeelsab.pk"),
  threads: known("https://www.threads.com/@adeelsab.pk"),
} satisfies Record<string, Fact>;

export type FactKey = keyof typeof facts;
