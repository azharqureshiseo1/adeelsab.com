/**
 * Generates every derived brand asset from the two supplied logo PNGs.
 *
 *   npm run brand:assets
 *
 * Inputs  : public/brand/adeelsab-logo-dark.png, public/brand/adeelsab-logo-orange.png
 * Outputs : public/favicon.ico, public/icon-192.png, public/icon-512.png,
 *           public/apple-touch-icon.png, public/og-image.png, public/brand/adeelsab-mark.png
 *
 * If the supplied PNGs are missing, INTERIM approximations are drawn from SVG so the
 * site still builds. Replace them with the real files and re-run this script.
 *
 * Uses `sharp`, which ships with Next.js — no extra dependency.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const pub = (...p) => path.join(root, "public", ...p);
const DARK = pub("brand", "adeelsab-logo-dark.png");
const ORANGE = pub("brand", "adeelsab-logo-orange.png");

const W = 2170;
const H = 725;

function markSvg() {
  // Simplified "A shopping-bag" mark with delivery swoosh, 500×500 box.
  return `
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FF8B3D"/><stop offset=".55" stop-color="#FB5301"/><stop offset="1" stop-color="#E63E00"/>
    </linearGradient>
    <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FF7A2B"/><stop offset="1" stop-color="#E63E00"/>
    </linearGradient>
  </defs>
  <path d="M185 140 V120 a65 65 0 0 1 130 0 V140" fill="none" stroke="#FB6A12" stroke-width="30"/>
  <path d="M150 132 H350 Q382 132 394 162 L482 440 Q494 482 450 482 H402 Q376 482 362 456 L272 262 Q250 222 228 262 L138 456 Q124 482 98 482 H50 Q6 482 18 440 L106 162 Q118 132 150 132 Z" fill="url(#g)"/>
  <path d="M350 132 Q382 132 394 162 L482 440 Q494 482 450 482 H402 Q376 482 362 456 L272 262 Q300 170 350 132 Z" fill="url(#g2)" opacity=".9"/>
  <path d="M112 350 Q150 440 290 410 Q360 392 418 318" fill="none" stroke="#fff" stroke-width="26" stroke-linecap="round"/>
  <path d="M112 350 Q150 440 290 410 Q360 392 418 318" fill="none" stroke="#FB5301" stroke-width="12" stroke-linecap="round"/>
  <path d="M372 300 L452 276 L420 350 L410 318 Z" fill="#FB5301" stroke="#fff" stroke-width="8" stroke-linejoin="round"/>`;
}

function logoSvg(variant) {
  const adeel = variant === "dark" ? "#101820" : "#FB5301";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <g transform="translate(20,110) scale(1.0)">${markSvg()}</g>
  <text x="540" y="520" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-weight="800" font-size="330" letter-spacing="-8">
    <tspan fill="${adeel}">Adeel</tspan><tspan fill="#FB5301">Sab</tspan>
  </text>
</svg>`;
}

async function ensureLogos() {
  fs.mkdirSync(pub("brand"), { recursive: true });
  for (const [file, variant] of [
    [DARK, "dark"],
    [ORANGE, "orange"],
  ]) {
    if (fs.existsSync(file)) continue;
    console.warn(`! ${path.basename(file)} not found — drawing an INTERIM approximation.`);
    await sharp(Buffer.from(logoSvg(variant))).png().toFile(file);
  }
}

/** PNG-in-ICO container (supported by every browser since IE Vista). */
function pngsToIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  const entries = [];
  let offset = 6 + 16 * pngs.length;
  for (const { size, buf } of pngs) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(buf.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += buf.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.buf)]);
}

async function main() {
  await ensureLogos();

  const meta = await sharp(DARK).metadata();
  // The bag mark sits in the left ~24% of the lockup. Extract, then trim transparency.
  const markRegion = await sharp(DARK)
    .extract({ left: 0, top: 0, width: Math.round(meta.width * 0.245), height: meta.height })
    .png()
    .toBuffer();
  const mark = await sharp(markRegion).trim().png().toBuffer();
  const markMeta = await sharp(mark).metadata();
  const side = Math.max(markMeta.width, markMeta.height);
  const squareMark = await sharp(mark)
    .extend({
      top: Math.floor((side - markMeta.height) / 2),
      bottom: Math.ceil((side - markMeta.height) / 2),
      left: Math.floor((side - markMeta.width) / 2),
      right: Math.ceil((side - markMeta.width) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  await sharp(squareMark).resize(512, 512).png().toFile(pub("brand", "adeelsab-mark.png"));

  const onWhite = async (size, padRatio) => {
    const inner = Math.round(size * (1 - padRatio * 2));
    const m = await sharp(squareMark).resize(inner, inner).png().toBuffer();
    return sharp({ create: { width: size, height: size, channels: 4, background: "#ffffff" } })
      .composite([{ input: m, gravity: "center" }])
      .png()
      .toBuffer();
  };

  fs.writeFileSync(pub("icon-192.png"), await onWhite(192, 0.12));
  fs.writeFileSync(pub("icon-512.png"), await onWhite(512, 0.12));
  fs.writeFileSync(pub("apple-touch-icon.png"), await onWhite(180, 0.1));

  const ico16 = await sharp(squareMark).resize(16, 16).png().toBuffer();
  const ico32 = await sharp(squareMark).resize(32, 32).png().toBuffer();
  const ico48 = await sharp(squareMark).resize(48, 48).png().toBuffer();
  fs.writeFileSync(
    pub("favicon.ico"),
    pngsToIco([
      { size: 16, buf: ico16 },
      { size: 32, buf: ico32 },
      { size: 48, buf: ico48 },
    ]),
  );

  // OG image: 1200×630, ink-900 ground, orange logo, tagline.
  const logo = await sharp(ORANGE).resize({ width: 760 }).png().toBuffer();
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

  console.log("✓ Brand assets written to /public");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
