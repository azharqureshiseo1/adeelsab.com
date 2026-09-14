/**
 * Business facts that are NOT yet confirmed.
 *
 * Rule: a `null` value renders a visible "TODO:" marker on the site. Never replace
 * a null with a guess — set the real value or leave it. Every entry is tracked in
 * CONTENT-TODO.md.
 */
export type Fact = { value: string | null; todo: string };

const todo = (label: string): Fact => ({ value: null, todo: label });

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

  // Founding Seller Program
  foundingCap: todo("Founding Seller cap (e.g. first 500)"),
  foundingCommissionMonths: todo("Reduced-commission period (months)"),
  foundingCommissionRate: todo("Founding Seller commission rate"),
  /** Hand-updated. Do not wire to a live counter. */
  foundingRegistered: todo("Registered Founding Sellers (hand-updated)"),

  // Company & trust
  secpNumber: todo("SECP registration number"),
  ntn: todo("NTN"),
  officeAddress: todo("Registered office address"),
  whatsappDisplay: todo("WhatsApp support number"),
  supportEmail: todo("Merchant support email"),
  businessEmail: todo("Business enquiries email"),
  officeHours: todo("Office hours (PKT)"),
  founderName: todo("Founder name"),
  founderBio: todo("Founder one-line bio"),

  // Social
  facebook: todo("Facebook handle"),
  instagram: todo("Instagram handle"),
  tiktok: todo("TikTok handle"),
  linkedin: todo("LinkedIn page"),
  youtube: todo("YouTube channel"),
} satisfies Record<string, Fact>;

export type FactKey = keyof typeof facts;
