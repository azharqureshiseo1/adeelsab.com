# Photography needed

Every photo on the site is currently a grey placeholder in `public/images/`. Replace each file **in place** with the same filename, so no code changes are needed.

## Direction

- **Real Pakistani merchants, real packaging, real courier riders.** Photograph actual shops in Lahore, Karachi, Faisalabad and secondary cities.
- **Never** use generic Western stock imagery, 3D renders or illustrated people.
- Warm, natural daylight. Credible, not glossy. People should look like the sellers we're speaking to.
- Get **written consent** (a model release) from everyone recognisable in a photo.
- Leave breathing room around the subject; some images are cropped to different ratios.

## Technical requirements

- **Format:** WebP, quality around 75–80. The image optimiser is disabled on shared hosting, so ship pre-compressed files.
- **Size:** keep each file **under 150 KB** (the hero under 200 KB). Export at the dimensions below; larger files slow down mobile visitors.
- **Colour:** sRGB.
- The **alt text** is already written in `content/site.ts`. If a photo's content differs, update the matching `…Alt` string there.

## Shot list

| File | Size (px) | Ratio | Used on | Shot |
|---|---|---|---|---|
| `placeholder-hero-merchant.webp` | 1200 × 1000 | 6 : 5 | Home hero (largest image, affects page speed) | A shop owner in their own store, among shelves of real stock, looking confident and approachable. A bazaar or market shop, not a mall. Space on one side. |
| `placeholder-founder.webp` | 600 × 600 | 1 : 1 | Home trust bar, `/about` (shown as a circle) | Head-and-shoulders portrait of the founder, plain background, natural smile. Face centred so a circular crop works. |
| `placeholder-team.webp` | 1200 × 800 | 3 : 2 | `/about`, `/careers` | The team working together: onboarding call, laptop or packing table. Candid, not posed in a row. |
| `placeholder-office.webp` | 1200 × 800 | 3 : 2 | `/careers` | The office or workspace: entrance with signage, or the work floor. |
| `placeholder-packaging.webp` | 1200 × 900 | 4 : 3 | Reserved for `/delivery` and the packaging guide | A seller packing an order: flyer or box, tape, packing slip. Hands and product in focus. |
| `placeholder-rider.webp` | 1200 × 900 | 4 : 3 | Reserved for `/delivery` | A courier rider with a parcel on a motorbike, on a recognisably Pakistani street. |
| `placeholder-phone-photo.webp` | 1200 × 800 | 3 : 2 | Reserved for the photography guide | A seller photographing a product on a white sheet by a window, with the phone visible. |

"Reserved" images are generated and ready, but not yet placed on a page. Add them where they help once real photos exist.

## Other visual assets

| Asset | Status | Action |
|---|---|---|
| `public/brand/adeelsab-logo-dark.png`, `adeelsab-logo-orange.png` | **Interim** approximations | Replace with the supplied 2170 × 725 originals, then run `npm run brand:assets` |
| `public/favicon.ico`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `og-image.png`, `brand/adeelsab-mark.png` | Generated from the interim logo | Regenerate with `npm run brand:assets` after replacing the logos |
| `public/partners/tcs.svg`, `leopards.svg`, `postex.svg` | Placeholder wordmarks | Replace with official logo files supplied by each partner, with permission. Keep roughly a 200 × 64 viewBox. |
