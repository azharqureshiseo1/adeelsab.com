# AdeelSab.com

The corporate and merchant-acquisition website for **AdeelSab**, a Pakistani multi-vendor marketplace that is built but not yet launched. The site establishes credibility for a new brand and collects committed sellers onto a **pre-launch waitlist**.

This is **not** the marketplace: there is no catalogue, cart or checkout.

- **Market:** Pakistan only · **Languages:** English + Urdu (RTL, Nastaliq)
- **Primary KPI:** waitlist submissions
- **Audience, in launch order:** local sellers → resellers (waitlist) → dropshippers (Phase 2)

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router), TypeScript strict |
| Styling | Tailwind CSS v4, tokens in `app/globals.css` → `@theme` |
| Icons | `lucide-react` |
| Fonts | `next/font/google`: Inter, Noto Nastaliq Urdu (self-hosted at build) |
| Content | `@next/mdx` for Seller Hub, blog and legal |
| Database | `@supabase/supabase-js` (server-only) |
| Email | `nodemailer` over Hostinger SMTP |
| Analytics | GA4 via `next/script`, only when `NEXT_PUBLIC_GA_ID` is set |
| Animation | CSS + `IntersectionObserver` only |

No UI kit, no form library, no state manager, no Framer Motion.

## Getting started

```bash
nvm use            # Node 22
npm ci
cp .env.example .env.local   # fill in values; the site runs without them, but the waitlist won't save
npm run dev
```

| Script | What it does |
|---|---|
| `npm run dev` | Development server on http://localhost:3000 |
| `npm run build` | Production build. Every page must show `○`/`●`; only `/api/waitlist` shows `ƒ`. |
| `npm run start` | Serve the production build (reads `PORT`) |
| `npm run lint` / `npm run typecheck` | ESLint / `tsc --noEmit` |
| `npm run format` | Prettier |
| `npm run brand:assets` | Regenerate favicon, app icons and OG image from the logo PNGs |

Deployment: see **[DEPLOY.md](DEPLOY.md)**.

## Architecture in five rules

1. **Every page is static.** Pages export `dynamic = "force-static"`. Never use `cookies()`, `headers()` or `no-store` fetches in pages; on shared hosting, dynamic rendering burns CPU on every request. CI fails a PR if any page becomes dynamic.
2. **Nothing is written to disk at runtime.** Hostinger overwrites the deployment folder on every build. Leads go to Supabase.
3. **All copy lives in `content/site.ts`** as `{ en, ur }`. Components never hardcode strings.
4. **Unconfirmed business facts are never guessed.** They live in `content/data/facts.ts` (or as `null` in `content/data/*`) and render as a visible **TODO** marker until filled. See [CONTENT-TODO.md](CONTENT-TODO.md).
5. **Server secrets stay on the server.** `lib/supabase.ts`, `lib/mailer.ts`, `lib/env.ts` and `lib/content.ts` import `server-only`. Client islands receive already-rendered copy as props, so `site.ts` never ships to the browser.

## How bilingual rendering works

- `<T v={copy.x} />` renders **both** languages: `<span class="l-en">…</span><span class="l-ur" lang="ur">…</span>`.
- An inline `<head>` script reads the saved language from `localStorage` (or `?lang=ur` in the URL) and sets `<html lang="ur" dir="rtl">` **before first paint**. CSS then hides the other language, so there's no English flash and no routing change, and pages stay static.
- `LangProvider` (React context + `localStorage`) handles the toggle and strings that live in attributes (`placeholder`, `aria-label`).
- Urdu uses Noto Nastaliq Urdu with `line-height: 2`. The font is **not preloaded** and English pages never download it.
- Share an Urdu link by adding **`?lang=ur`**, e.g. `https://adeelsab.com/founding-seller?lang=ur`.

## Project structure

```
app/                     routes (all static) + api/waitlist/route.ts (the only dynamic route)
components/
  layout/                Header (+ client islands), Footer, MobileNav, LangToggle/Provider, Section…
  ui/                    Button, Card, Badge, Input, Select, Accordion, Table, Fact (TODO markers)
  blocks/                Hero, ThreePaths, CapabilityBand, CoverageMap, RateCard, CommissionTable,
                         WaitlistForm (server) + WaitlistFormClient, MarginCalculator, FAQ, CTABand…
content/
  site.ts                ALL copy, EN + UR
  data/                  facts, cities, categories (+ commission), shipping (rate card, RTO, partners), roles
  seller-hub/*.mdx       7 guides × EN/UR
  blog/*.mdx             3 posts × EN/UR
  legal/*.mdx            privacy, terms, seller agreement × EN/UR
lib/                     i18n, seo, utils, analytics, supabase, mailer, validate, env, content, facts, routes
public/                  brand/, partners/, images/, icons, og-image.png
scripts/                 brand-assets.mjs, placeholder-images.mjs
supabase/schema.sql      waitlist_leads table + RLS
```

## Common edits

**Fill a business value** (commission, payout days, SECP…): edit `content/data/facts.ts` or the relevant file in `content/data/`. It updates every page, FAQ and JSON-LD that uses it.

**Add or change copy:** edit `content/site.ts`, keeping both `en` and `ur`.

**Mark an own-fleet city / add a city:** `content/data/cities.ts`. Set `ownFleet: true`, or add `{ slug, name, ur, lat, lon }`. The coverage map plots cities from real coordinates, so there's no SVG editing. New cities are also accepted by the waitlist form automatically.

**Add a Seller Hub guide or blog post:**
1. Create `content/seller-hub/<slug>.en.mdx` and `<slug>.ur.mdx`, each exporting `metadata` (title, description, audience, updatedAt, locale). Copy an existing file.
2. Register both files in `lib/content.ts`.
3. For Seller Hub, add the slug to a category in `sellerHub.categories` (`content/site.ts`).

The sitemap, static params, table of contents and reading time are generated automatically. MDX here has **no GFM**: write tables as JSX `<table>` and checklists as plain lists.

**Add an open role:** `content/data/roles.ts`.

## Brand assets

The logo PNGs in `public/brand/` are **interim approximations**. Drop in the supplied files with exactly these names:

- `adeelsab-logo-dark.png`: black "Adeel" + orange "Sab" (default; header and light sections)
- `adeelsab-logo-orange.png`: all orange (dark backgrounds only; footer and dark CTA bands)

Then run `npm run brand:assets` to regenerate `favicon.ico` (bag mark only), `icon-192/512.png`, `apple-touch-icon.png` and `og-image.png`. The script uses `sharp`, which ships with Next.js.

**Colour rules:** orange is an accent, never a large flat fill. Use at most three `--brand-gradient` instances per page. Small orange text uses `brand-700` (an added AA-contrast shade). There is no dark mode.

## Waitlist API

`POST /api/waitlist`, JSON body → `{ ok: true }` or `{ ok: false, error }`.

- 405 for other methods, 10 KB body cap, honeypot field `company_website` (fake success)
- Dependency-free validation (`lib/validate.ts`) shared with the client. WhatsApp numbers are normalised to `+92XXXXXXXXXX`.
- Rate limit: 5 per hour per SHA-256 IP hash, in memory. Raw IPs are never stored.
- Insert with the Supabase service role key → notification email (its own try/catch)
- Unexpected errors log the full payload to the server log for recovery
- The client shows inline errors, disables while pending, fires the GA4 `waitlist_submit` event, and **falls back to a pre-filled WhatsApp message** on any failure

## Guardrails

- Don't invent user counts, GMV, testimonials or success stories.
- Don't add other countries, currencies or dark mode.
- Don't use `output: 'export'` or make any page dynamic.
- Don't soften or hide RTO charges, commission or payout timelines.
- Ask before adding any dependency outside the stack above.
