# Images

## How images are managed

Full-size originals live in **`/assets`** and are never served. Web-ready copies in `/public` are generated from them:

```bash
npm run brand:assets
```

| Folder | Contents | Generated into |
|---|---|---|
| `assets/brand/` | `adeelsab-logo-dark.png`, `adeelsab-logo-orange.png` (2170 × 725), `adeelsab-couriers-dark.png`, `adeelsab-couriers-orange.png`, `mark.png` | `public/brand/` (logos ~16 KB), `favicon.ico`, `icon-192/512.png`, `apple-touch-icon.png`, `og-image.png` |
| `assets/photos/` | Photographs (any size, WebP/JPG/PNG) | `public/images/*.webp`, 1280px wide, quality 78 |
| `assets/logos/` | Partner, payment and regulator logos (PNG, transparent) | `public/logos/*.webp`, 96px tall |

The image optimiser is disabled on shared hosting, so **always run the script** after adding or replacing an original. Never put large files straight into `/public`.

To **replace a photo**, overwrite the original in `assets/photos/` with the same filename, then run the script. To **add a new one**, add it there, run the script, and add an entry to `photos` in `content/site.ts` with bilingual alt text.

## Where each photo is used

| Photo (`content/site.ts` → `photos`) | File | Used on |
|---|---|---|
| `merchant` | `merchant-wholesale-market.webp` | Home hero |
| `rider` | `adeelsab-rider.webp` | Home delivery section, `/delivery` hero, `/careers` |
| `packingOrder` | `seller-packing-order.webp` | `/sell/local-sellers` hero |
| `packaging` | `branded-packaging.webp` | `/founding-seller` ("What it is"), `/delivery` rate card |
| `team` | `team-office.webp` | `/about`, `/careers` |

| Logo | Used on |
|---|---|
| AdeelSab Couriers | Delivery partner card (home, `/delivery`, local sellers), footer |
| TCS, Leopards, PostEx, M&P | Partner grid (home, `/delivery`, local sellers), footer |
| JazzCash, Easypaisa | Payout rails (local sellers, pricing, payouts, resellers), footer |
| Stripe | Footer (Payments). See CONTENT-TODO §D. |
| SECP, FBR | Home trust bar, footer |

## Still needed

| File | Size | Used on | Shot |
|---|---|---|---|
| `public/images/placeholder-founder.webp` → add a real portrait to `assets/photos/founder.webp`, then update `TrustBar.tsx` and `app/about/page.tsx` | Square, at least 600 × 600 | Home trust bar, `/about` (shown as a circle) | Head-and-shoulders portrait of the founder, plain background, face centred |

Also get **written consent** (a model release) from everyone recognisable in the photos, and permission to display partner logos.
