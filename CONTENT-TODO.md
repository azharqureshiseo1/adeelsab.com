# Content TODO: values needed before launch

Every item below is shown on the live site as a visible orange **`TODO:`** marker until a real value is supplied. **Nothing here has been guessed.** Pre-launch, a visible gap is better than an invented number.

**How to fill a value**

- **Facts** (single values) → edit `content/data/facts.ts` and change `todo("…")` to `{ value: "…", todo: "" }`. The value then appears everywhere the fact is used: pages, FAQs, JSON-LD.
- **Tables** (commission, rate card, RTO, timelines) → edit the `null` entries in `content/data/`.
- **Legal documents** → edit the `<TodoMark … />` tags directly in `content/legal/*.mdx`, in **both** `.en.mdx` and `.ur.mdx`.

To find every remaining marker on the running site, open DevTools and run `document.querySelectorAll("mark[data-todo]")`.

---

## A. The 15 placeholders from the brief

| # | Placeholder | Where to set it | Shown on |
|---|---|---|---|
| 1 | ✅ **No launch date is published** — by decision. `launchDate` was removed; the copy says Founding Sellers hear the confirmed date first on WhatsApp. | — | — |
| 2 | ✅ **Own-fleet cities at launch: Lahore** (add more by setting `ownFleet: true`) | `content/data/cities.ts` → `ownFleet` | Home capability band, delivery section, coverage map, FAQ |
| 3 | ✅ **Commission: 8% at launch, same for all 14 categories** | `content/data/categories.ts` → `commission` | Commission table on `/pricing` and `/sell/local-sellers` |
| 4 | ✅ **Payout timeline: weekly** (written into the copy as "every week" / "ہر ہفتے") and **minimum payout: Rs 3,000**. | `content/site.ts` (payout strings); `facts.ts` → `minPayout` | Home, FAQ, `/payouts`, `/pricing`, resellers |
| 5 | ✅ **Delivery charge: flat Rs 350 per parcel**, every city. Confirm whether bulky or heavy parcels are an exception. | `facts.ts` → `deliveryCharge`; `shipping.ts` → `rateCard`; also written in `content/seller-hub/packaging-guide.*.mdx` | `/delivery#rates`, `/pricing`, FAQ, packaging guide |
| 6 | ✅ **RTO: paid by the customer who placed the order** — the seller is charged Rs 0 in every zone. | `shipping.ts` → `rtoCharges` (per zone) **and** `facts.ts` → `rtoCharge` (summary text) | `/delivery#rto`, local sellers, pricing, FAQ |
| 7 | ✅ **COD remittance: 9 days after delivery** | `facts.ts` → `codRemittanceDays` | `/delivery#cod`, `/payouts`, FAQ |
| 8 | ✅ **SECP registration no.** (0353167) and **FBR registration no.** (J816970) | `facts.ts` → `secpNumber`, `ntn` | Footer, home trust bar, Organization JSON-LD |
| 9 | ✅ **Physical office address** (Office No 20, First floor, Takbeer Plaza, Al Faisal Town, Lahore) | `facts.ts` → `officeAddress` **and** legal MDX (privacy, terms) | Footer, trust bar, `/contact`, Organization JSON-LD |
| 10 | ✅ **WhatsApp support: +92 325 0040009** and **landline 042 3663 2828 (sellers/vendors only)**. Both are now in the Organization JSON-LD. | `facts.ts` → `whatsappDisplay`, `landlineDisplay`, `landlineTel`; env `NEXT_PUBLIC_WHATSAPP=923250040009` | Trust bar, `/contact`, every WhatsApp link |
| 11 | ✅ **Support email** (support@adeelsab.com, also used for business enquiries and privacy requests) and **careers@adeelsab.com**. | `facts.ts` → `supportEmail`, `businessEmail`; legal MDX; `content/data/roles.ts` → `careersEmail` | `/contact`, `/careers`, legal pages |
| 12 | ✅ **Founder name, photo, bio**: not shown on the site, by decision. The trust bar and `/about` show the registered company (ADEELSAB (PRIVATE) LIMITED) instead. | — | — |
| 13 | ✅ **Social media**: Facebook, Instagram, TikTok, Threads (@adeelsab.pk) | `facts.ts` → `facebook`, `instagram`, `tiktok`, `threads` | Footer, Organization `sameAs` |
| 14 | ✅ **Founding Seller Program**: first **100** sellers, **0% commission + no listing fee for 2 months**. The registered counter was removed — the page states the cap instead. | `facts.ts` → `foundingCap`, `foundingCommissionMonths`, `foundingCommissionRate`, `foundingRegistered` | Home, `/founding-seller` (counter), commission table note |
| 15 | **Mobile app at launch?** | `facts.ts` → `mobileAppAtLaunch` | Not shown yet. If **yes**, add app-store links to the footer (`components/layout/Footer.tsx`) and CTAs. |

> **#14 counter:** `foundingRegistered` is updated **by hand**. It is deliberately not a live counter, and the page says so.

---

## B. Additional values the build needed

These came up while writing the pages. They are policy numbers the site must state plainly, so they are marked rather than guessed.

| Placeholder | Where to set it | Shown on |
|---|---|---|
| ✅ Listing fee per product: **Rs 0** — commission is the only fee on a sale | `facts.ts` → `listingFee` | `/pricing` fee table, FAQ |
| ✅ COD handling fee: **none** — the fee row and `codFee` were removed; the copy says there is no COD fee | — | — |
| ✅ Payout / transfer fee: **Rs 0** | `facts.ts` → `payoutFee` | `/pricing`, `/payouts` |
| ✅ Dispute hold period: **no fixed number of days published** — `holdPeriodDays` removed; the copy says the disputed order's earnings are held until it is resolved | — | — |
| ✅ Delivery attempts before RTO: **3** | `facts.ts` → `deliveryAttempts` | `/delivery#rto` |
| ✅ Customer return window: **2 days** | `facts.ts` → `returnWindowDays` | `/delivery#returns` |
| ✅ Return shipping on customer returns: **paid by the customer** — written into the copy, `returnShippingPayer` removed | `content/site.ts` → `delivery.returns` | `/delivery#returns` |
| ✅ Office hours: **9:00 am – 9:00 pm (PKT)** | `facts.ts` → `officeHours` | `/contact`, local sellers callback card |
| ✅ Delivery time per zone: same city **same day to next day**, major cities **2–3 working days**, rest of Pakistan **3–4 working days** | `shipping.ts` → `timelines` (now bilingual `L`) | `/delivery#times` |
| Open roles (optional; the page handles none) | `content/data/roles.ts` → `roles` | `/careers` |

**Every operational value on the site is now filled.** The only remaining `TODO:` markers are the three legal ones in section C (jurisdiction city, privacy retention/response time, full Seller Agreement text), plus the Urdu review in section E.

## C. Legal

The three legal documents were replaced on 17 September 2026 with the owner-supplied
drafts. They now describe the marketplace, not just the waitlist. The "Draft pending legal
review" banner was **removed at the owner's request**; the "English version prevails" line is
kept as a footer on each document, because that is a term of the documents rather than a draft
notice. The values below are still unfilled and render as visible TODO markers.

| Placeholder | Where |
|---|---|
| ✅ Registered company name: ADEELSAB (PRIVATE) LIMITED | `facts.ts` → `legalName`; all three documents |
| ✅ City for court jurisdiction: **Lahore** | `terms.*.mdx` §19, `seller-agreement.*.mdx` §19.2 |
| ✅ Full Seller Agreement text | `content/legal/seller-agreement.*.mdx` |
| ✅ Privacy retention and response time | Rewritten as a purpose-based retention clause (§8) and "as promptly as reasonably possible" (§9) |
| **Liability cap: how many months of payments, and the minimum PKR figure** | `terms.*.mdx` §16.2 |
| **Liability cap: how many months of commission** | `seller-agreement.*.mdx` §16 |
| **Notice period for a fee change (days)** | `seller-agreement.*.mdx` §8.1 |
| **Notice period to terminate for convenience (days)** | `seller-agreement.*.mdx` §17.2 |
| **Non-circumvention period after termination (months)** | `seller-agreement.*.mdx` §18 |
| Optional **arbitration clause** — the owner's draft offered one; it was left out, so disputes go to the Lahore courts. Add it if the lawyer wants it | `terms.*.mdx` §15.2, `seller-agreement.*.mdx` §19.2 |
| Review all three documents end to end | Privacy, Terms, Seller Agreement, in EN and UR |

## D. Confirm operational wording

These describe **how the service works**. They were written to match the brief, but the operations team should confirm each one before launch:

- [ ] **Return pickup process** (4 steps: customer requests with photos → seller notified → pickup → back to seller). `content/site.ts` → `delivery.returns`
- [ ] **Below-minimum payouts carry over** to the next cycle. `payouts.threshold`
- [ ] **Disputes hold only the disputed order's earnings.** `payouts.hold`
- [ ] **Who pays shipping**: customer, seller or split, deducted from payout. `delivery.whoPays`
- [ ] **RTO billed to the customer**: confirm how the return charge is collected from a customer who already refused the parcel, and what happens if it can't be collected. `content/data/shipping.ts` → `rtoCharges`, `facts.rtoCharge`
- [ ] **Payout rails**: bank (IBAN), JazzCash, Easypaisa, in the seller's name. `payoutRails`
- [ ] **Reseller margin** is paid on delivered orders only. `resellerListings`, `resellers.margins`
- [ ] **Careers culture points.** `careers.culture`
- [ ] **Courier partner descriptions** (TCS, PostEx, TRAX), and written permission to show their logos. `content/data/shipping.ts` → `partners`
- [ ] **Stripe** is shown under Payments in the footer. Stripe does not onboard Pakistan-registered businesses directly, so confirm how it is used (e.g. through a foreign entity), or remove it from `paymentLogos` in `content/data/shipping.ts`.
- [ ] **TRAX** replaced Leopards and M&P (the home stat now says "3 national courier partners"). Confirm the partnership.

## E. Urdu review

- [ ] **All Urdu copy needs a native editor's review before launch.** That means every `ur` string in `content/site.ts`, `content/data/*.ts`, and all `*.ur.mdx` files (7 Seller Hub guides, 3 blog posts, 3 legal pages). There are **no empty Urdu strings**; this is a quality pass, not a translation job.
- [ ] Confirm preferred terminology: e.g. "سیلر" vs "فروخت کنندہ", "ری سیلر", "آن بورڈنگ".

## F. Brand and partner assets

- ✅ **Logos:** real logos, AdeelSab Couriers logos and the bag mark are in `assets/brand/`. Web versions, favicon, icons and OG image are generated with `npm run brand:assets`.
- ✅ **Partner, payment and regulator logos:** TCS, PostEx, TRAX, JazzCash, Easypaisa, Stripe, SECP and FBR are in `assets/logos/`.
- ✅ **Photography:** 5 real photos added (no founder portrait, by decision). See [TODO-IMAGES.md](TODO-IMAGES.md).
- [ ] **Environment:** set `NEXT_PUBLIC_WHATSAPP` and `NEXT_PUBLIC_GA_ID` (see [DEPLOY.md](DEPLOY.md)).
