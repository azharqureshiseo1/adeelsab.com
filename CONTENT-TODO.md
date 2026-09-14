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
| 1 | **Target launch date** | `facts.ts` → `launchDate` | Founding Seller timeline and FAQ |
| 2 | **Own-fleet cities at launch** | `content/data/cities.ts` → set `ownFleet: true` per city | Home capability band, delivery section, coverage map, FAQ |
| 3 | **Commission % by category** (14 categories) | `content/data/categories.ts` → `commission` | Commission table on `/pricing` and `/sell/local-sellers` |
| 4 | **Payout timeline** and **minimum payout** | `facts.ts` → `payoutCycleDays`, `minPayout` | Home, FAQ, `/payouts`, `/pricing`, resellers |
| 5 | **Weight-banded shipping rate card** (5 bands × 3 zones) | `content/data/shipping.ts` → `rateCard` | `/delivery#rates` |
| 6 | **RTO charge structure** | `shipping.ts` → `rtoCharges` (per zone) **and** `facts.ts` → `rtoCharge` (summary text) | `/delivery#rto`, local sellers, pricing, FAQ |
| 7 | **COD remittance schedule** | `facts.ts` → `codRemittanceDays` | `/delivery#cod`, `/payouts`, FAQ |
| 8 | **SECP registration no.** and **NTN** | `facts.ts` → `secpNumber`, `ntn` | Footer, home trust bar |
| 9 | **Physical office address** | `facts.ts` → `officeAddress` **and** legal MDX (privacy, terms) | Footer, trust bar, `/contact`, Organization JSON-LD |
| 10 | **WhatsApp support number** (display format) | `facts.ts` → `whatsappDisplay` **and** env `NEXT_PUBLIC_WHATSAPP` (digits only) | Trust bar, `/contact`, every WhatsApp link |
| 11 | **Support email** and **business-enquiry email** | `facts.ts` → `supportEmail`, `businessEmail`; legal MDX; `content/data/roles.ts` → `careersEmail` | `/contact`, `/careers`, legal pages |
| 12 | **Founder name, photo, one-line bio** | `facts.ts` → `founderName`, `founderBio`; photo → `public/images/placeholder-founder.webp` | Home trust bar, `/about` |
| 13 | **Social media handles** (full URLs) | `facts.ts` → `facebook`, `instagram`, `tiktok`, `linkedin`, `youtube` | Footer, Organization `sameAs` |
| 14 | **Founding Seller Program**: cap, commission-holiday length, reduced rate, current registered count | `facts.ts` → `foundingCap`, `foundingCommissionMonths`, `foundingCommissionRate`, `foundingRegistered` | Home, `/founding-seller` (counter), commission table note |
| 15 | **Mobile app at launch?** | `facts.ts` → `mobileAppAtLaunch` | Not shown yet. If **yes**, add app-store links to the footer (`components/layout/Footer.tsx`) and CTAs. |

> **#14 counter:** `foundingRegistered` is updated **by hand**. It is deliberately not a live counter, and the page says so.

---

## B. Additional values the build needed

These came up while writing the pages. They are policy numbers the site must state plainly, so they are marked rather than guessed.

| Placeholder | Where to set it | Shown on |
|---|---|---|
| Listing fee per product | `facts.ts` → `listingFee` | `/pricing` fee table, FAQ |
| COD handling fee (if any; write "Rs 0" if none) | `facts.ts` → `codFee` | `/delivery#cod`, `/pricing`, `/payouts` |
| Payout / transfer fee (if any; write "Rs 0" if none) | `facts.ts` → `payoutFee` | `/pricing`, `/payouts` |
| Dispute hold period (days) | `facts.ts` → `holdPeriodDays` | `/payouts` |
| Delivery attempts before RTO | `facts.ts` → `deliveryAttempts` | `/delivery#rto` |
| Customer return window (days) | `facts.ts` → `returnWindowDays` | `/delivery#returns` |
| Who pays return shipping on customer returns | `facts.ts` → `returnShippingPayer` | `/delivery#returns` |
| Office hours (PKT) | `facts.ts` → `officeHours` | `/contact`, local sellers callback card |
| Delivery time per zone | `shipping.ts` → `timelines` | `/delivery#times` |
| Founder's origin story (2–3 sentences, first person) | `app/about/page.tsx` (replace the `TodoMark` with copy added to `about.story` in `content/site.ts`) | `/about` |
| Open roles (optional; the page handles none) | `content/data/roles.ts` → `roles` | `/careers` |

## C. Legal (needs a lawyer)

All three legal pages show a **"Draft pending legal review"** banner. Remove it from `components/blocks/LegalPage.tsx` once they're finalised.

| Placeholder | Files |
|---|---|
| Registered company name | `content/legal/privacy.*.mdx`, `terms.*.mdx` |
| Privacy contact email, response time, data retention period | `content/legal/privacy.*.mdx` |
| City for court jurisdiction | `content/legal/terms.*.mdx` |
| **Full Seller Agreement text** | `content/legal/seller-agreement.*.mdx` (the page is currently a summary of what the agreement covers) |
| Review all three documents end to end | Privacy, Terms, Seller Agreement, in EN and UR |

## D. Confirm operational wording

These describe **how the service works**. They were written to match the brief, but the operations team should confirm each one before launch:

- [ ] **Return pickup process** (4 steps: customer requests with photos → seller notified → pickup → back to seller). `content/site.ts` → `delivery.returns`
- [ ] **Below-minimum payouts carry over** to the next cycle. `payouts.threshold`
- [ ] **Disputes hold only the disputed order's earnings.** `payouts.hold`
- [ ] **Volumetric weight** is used for shipping, with a 5,000 divisor mentioned in the packaging guide. `delivery.rates.note`, `content/seller-hub/packaging-guide.*.mdx`
- [ ] **Who pays shipping**: customer, seller or split, deducted from payout. `delivery.whoPays`
- [ ] **Payout rails**: bank (IBAN), JazzCash, Easypaisa, in the seller's name. `payoutRails`
- [ ] **Reseller margin** is paid on delivered orders only. `resellerListings`, `resellers.margins`
- [ ] **Careers culture points.** `careers.culture`
- [ ] **Courier partner descriptions** (TCS, Leopards, PostEx), and written permission to show their logos. `content/data/shipping.ts` → `partners`

## E. Urdu review

- [ ] **All Urdu copy needs a native editor's review before launch.** That means every `ur` string in `content/site.ts`, `content/data/*.ts`, and all `*.ur.mdx` files (7 Seller Hub guides, 3 blog posts, 3 legal pages). There are **no empty Urdu strings**; this is a quality pass, not a translation job.
- [ ] Confirm preferred terminology: e.g. "سیلر" vs "فروخت کنندہ", "ری سیلر", "آن بورڈنگ".

## F. Brand and partner assets

- [ ] **Logos:** replace the interim `public/brand/adeelsab-logo-dark.png` and `adeelsab-logo-orange.png` with the supplied originals (2170 × 725, transparent), then run `npm run brand:assets` to regenerate the favicon, icons and OG image.
- [ ] **Partner logos:** `public/partners/tcs.svg`, `leopards.svg`, `postex.svg` are placeholder wordmarks. Replace them with official files from each partner.
- [ ] **Photography:** see [TODO-IMAGES.md](TODO-IMAGES.md).
- [ ] **Environment:** set `NEXT_PUBLIC_WHATSAPP` and `NEXT_PUBLIC_GA_ID` (see [DEPLOY.md](DEPLOY.md)).
