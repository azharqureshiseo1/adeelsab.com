/**
 * Writes neutral WebP placeholders for every photograph listed in TODO-IMAGES.md.
 * Run once; replace each file with a real, compressed WebP of the same name and size.
 *
 *   node scripts/placeholder-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const out = path.resolve(import.meta.dirname, "..", "public", "images");
fs.mkdirSync(out, { recursive: true });

const shots = [
  ["placeholder-hero-merchant", 1200, 1000, "Merchant in shop with products"],
  ["placeholder-packaging", 1200, 900, "Seller packing an order"],
  ["placeholder-rider", 1200, 900, "Courier rider with parcel"],
  ["placeholder-founder", 600, 600, "Founder portrait"],
  ["placeholder-team", 1200, 800, "Team at the office"],
  ["placeholder-office", 1200, 800, "Office exterior / workspace"],
  ["placeholder-phone-photo", 1200, 800, "Product photo taken on a phone"],
];

for (const [name, w, h, label] of shots) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F1F4F7"/><stop offset="1" stop-color="#E2E6EB"/></linearGradient></defs>
    <rect width="${w}" height="${h}" fill="url(#b)"/>
    <rect x="${w / 2 - 60}" y="${h / 2 - 80}" width="120" height="90" rx="14" fill="none" stroke="#7C8797" stroke-width="6"/>
    <circle cx="${w / 2}" cy="${h / 2 - 35}" r="24" fill="none" stroke="#7C8797" stroke-width="6"/>
    <text x="${w / 2}" y="${h / 2 + 60}" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="${Math.round(w / 32)}" font-weight="600" fill="#566374">PLACEHOLDER — ${label}</text>
  </svg>`;
  await sharp(Buffer.from(svg)).webp({ quality: 70 }).toFile(path.join(out, `${name}.webp`));
}
console.log(`✓ ${shots.length} placeholders written to public/images`);
