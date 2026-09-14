/**
 * Builds every web-ready image from the full-size originals in /assets.
 *
 *   npm run brand:assets
 *
 * Originals (kept out of /public so they are never served):
 *   assets/brand/   adeelsab-logo-dark.png, adeelsab-logo-orange.png (2170×725),
 *                   adeelsab-couriers-dark.png, adeelsab-couriers-orange.png, mark.png
 *   assets/photos/  *.webp photographs
 *   assets/logos/   partner, payment and regulator logos (*.png)
 *
 * Outputs (committed):
 *   public/brand/   logo lockups sized for the web
 *   public/images/  photos resized to 1280px
 *   public/logos/   logos resized to 96px tall, WebP
 *   public/favicon.ico, icon-192.png, icon-512.png, apple-touch-icon.png, og-image.png
 *
 * On shared hosting the Next.js image optimiser is disabled, so images must be
 * small before they are deployed. Uses `sharp`, which ships with Next.js.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const src = (...p) => path.join(root, "assets", ...p);
const pub = (...p) => path.join(root, "public", ...p);
const kb = (file) => `${Math.round(fs.statSync(file).size / 1024)} KB`;

for (const dir of ["brand", "images", "logos"]) fs.mkdirSync(pub(dir), { recursive: true });

/** PNG-in-ICO container (supported by every current browser). */
function pngsToIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  let offset = 6 + 16 * pngs.length;
  const entries = pngs.map(({ size, buf }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(buf.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += buf.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.buf)]);
}

async function logos() {
  // Header shows the lockup at 36px tall ≈ 108px wide; 660px covers 3× displays with room to spare.
  for (const variant of ["dark", "orange"]) {
    const out = pub("brand", `adeelsab-logo-${variant}.png`);
    await sharp(src("brand", `adeelsab-logo-${variant}.png`))
      .resize({ width: 660 })
      .png({ compressionLevel: 9, palette: true, quality: 90 })
      .toFile(out);
    console.log(`✓ ${path.relative(root, out)} (${kb(out)})`);

    const courier = pub("brand", `adeelsab-couriers-${variant}.png`);
    await sharp(src("brand", `adeelsab-couriers-${variant}.png`))
      .trim()
      .resize({ height: 160 })
      .png({ compressionLevel: 9, palette: true, quality: 90 })
      .toFile(courier);
    console.log(`✓ ${path.relative(root, courier)} (${kb(courier)})`);
  }
}

async function icons() {
  // mark.png is the bag mark on white; trim the white margin, then re-pad evenly.
  const trimmed = await sharp(src("brand", "mark.png")).trim({ threshold: 20 }).png().toBuffer();
  const square = async (size, pad) => {
    const inner = Math.round(size * (1 - pad * 2));
    const m = await sharp(trimmed).resize(inner, inner, { fit: "contain", background: "#ffffff" }).png().toBuffer();
    return sharp({ create: { width: size, height: size, channels: 4, background: "#ffffff" } })
      .composite([{ input: m, gravity: "center" }])
      .png()
      .toBuffer();
  };
  fs.writeFileSync(pub("icon-192.png"), await square(192, 0.12));
  fs.writeFileSync(pub("icon-512.png"), await square(512, 0.12));
  fs.writeFileSync(pub("apple-touch-icon.png"), await square(180, 0.1));
  await sharp(await square(512, 0.06)).toFile(pub("brand", "adeelsab-mark.png"));
  fs.writeFileSync(
    pub("favicon.ico"),
    pngsToIco([
      { size: 16, buf: await square(16, 0.02) },
      { size: 32, buf: await square(32, 0.04) },
      { size: 48, buf: await square(48, 0.05) },
    ]),
  );
  console.log("✓ favicon.ico, icon-192.png, icon-512.png, apple-touch-icon.png");

  // OG image: 1200×630, ink-900 ground, orange logo, tagline.
  const logo = await sharp(src("brand", "adeelsab-logo-orange.png")).resize({ width: 760 }).png().toBuffer();
  const tagline = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect x="0" y="600" width="1200" height="30" fill="#FB5301"/>
    <text x="600" y="470" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="46" font-weight="700" fill="#F1F4F7">Sell across Pakistan. We handle the rest.</text>
    <text x="600" y="530" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="28" font-weight="500" fill="#7C8797">Founding Seller waitlist now open · adeelsab.com</text>
  </svg>`);
  await sharp({ create: { width: 1200, height: 630, channels: 4, background: "#101820" } })
    .composite([
      { input: logo, top: 110, left: 220 },
      { input: tagline, top: 0, left: 0 },
    ])
    .png()
    .toFile(pub("og-image.png"));
  console.log(`✓ og-image.png (${kb(pub("og-image.png"))})`);
}

async function photos() {
  for (const file of fs.readdirSync(src("photos")).filter((f) => /\.(webp|jpe?g|png)$/i.test(f))) {
    const out = pub("images", file.replace(/\.(jpe?g|png)$/i, ".webp"));
    await sharp(src("photos", file)).resize({ width: 1280, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
    console.log(`✓ ${path.relative(root, out)} (${kb(out)})`);
  }
}

async function partnerLogos() {
  for (const file of fs.readdirSync(src("logos")).filter((f) => /\.png$/i.test(f))) {
    const out = pub("logos", file.replace(/\.png$/i, ".webp"));
    await sharp(src("logos", file))
      .trim()
      .resize({ height: 96, withoutEnlargement: true })
      .webp({ quality: 90, alphaQuality: 100 })
      .toFile(out);
    const { width, height } = await sharp(out).metadata();
    console.log(`✓ ${path.relative(root, out)} ${width}×${height} (${kb(out)})`);
  }
}

await logos();
await icons();
await photos();
await partnerLogos();
