import { listSlugs, loadDoc } from "@/lib/content";
import { siteUrl } from "@/lib/utils";

export const dynamic = "force-static";

/**
 * /llms.txt — a plain-text map of the site for AI agents and crawlers
 * (see llmstxt.org). Generated at build time from the same route list the
 * sitemap uses, so the two never drift apart.
 */
const PAGES: { path: string; note: string }[] = [
  { path: "/", note: "What AdeelSab is, who it is for, and how to join the seller waitlist" },
  { path: "/founding-seller", note: "The Founding Seller Program: first 100 sellers, what they get, how to apply" },
  { path: "/sell", note: "The three ways to sell: local sellers, resellers, dropshippers" },
  { path: "/sell/local-sellers", note: "For shops, wholesalers and brands — the main onboarding path" },
  { path: "/sell/resellers", note: "Reselling with no inventory — coming soon" },
  { path: "/sell/dropshippers", note: "Dropshipping — planned for Phase 2" },
  { path: "/pricing", note: "Every fee: 7% commission on all categories, no listing fee, delivery and RTO charges" },
  { path: "/delivery", note: "Coverage, delivery times by zone, flat Rs 350 per parcel, cash on delivery, RTO" },
  { path: "/payouts", note: "Weekly payouts, Rs 3,000 minimum, deductions and dispute holds" },
  { path: "/how-it-works", note: "An order from listing to payout, step by step" },
  { path: "/reseller-listings", note: "What reseller-enabled listings will be" },
  { path: "/about", note: "ADEELSAB (PRIVATE) LIMITED — the registered company behind the marketplace" },
  { path: "/contact", note: "WhatsApp, landline, email and the office address" },
  { path: "/careers", note: "Open roles and how to apply" },
];

const LEGAL: { path: string; note: string }[] = [
  { path: "/legal/terms", note: "Terms of Use" },
  { path: "/legal/privacy", note: "Privacy Policy" },
  { path: "/legal/seller-agreement", note: "Seller Agreement" },
];

function section(title: string, rows: { url: string; label: string; note?: string }[]) {
  const lines = rows.map((r) => `- [${r.label}](${r.url})${r.note ? `: ${r.note}` : ""}`);
  return `## ${title}\n\n${lines.join("\n")}\n`;
}

export async function GET() {
  const rows = async (collection: "seller-hub" | "blog") =>
    Promise.all(
      listSlugs(collection).map(async (slug) => {
        const { meta } = await loadDoc(collection, slug, "en");
        return { url: siteUrl(`/${collection}/${slug}`), label: meta.title, note: meta.description };
      }),
    );
  const guides = await rows("seller-hub");
  const posts = await rows("blog");

  const body = [
    `# AdeelSab`,
    ``,
    `> AdeelSab is a Pakistani multi-vendor marketplace, operated by ADEELSAB (PRIVATE) LIMITED`,
    `> (SECP 0353167, Lahore). It has not launched yet. This site explains how selling on AdeelSab`,
    `> will work and collects sellers onto a pre-launch waitlist. It is not the marketplace itself:`,
    `> there is no catalogue, cart or checkout here.`,
    ``,
    `Key facts, all published on the site: commission is 7% of the item price for every category and`,
    `every seller; there is no listing fee, no COD handling fee and no payout transfer fee; delivery`,
    `is a flat Rs 350 per parcel anywhere in Pakistan; an undelivered parcel returned to the seller`,
    `(RTO) costs the seller Rs 300; payouts are weekly with a Rs 3,000 minimum, and cash collected on`,
    `delivery is remitted 9 days after delivery. Every page is available in English and Urdu.`,
    ``,
    section(
      "Main pages",
      PAGES.map((p) => ({ url: siteUrl(p.path), label: p.path, note: p.note })),
    ),
    section("Seller Hub guides", guides),
    section("Blog", posts),
    section("Legal", LEGAL.map((p) => ({ url: siteUrl(p.path), label: p.note, note: undefined }))),
    `## Contact\n\n- WhatsApp: +92 325 0040009\n- Landline (sellers and vendors only): 042 3663 2828\n- Email: support@adeelsab.com\n- Office: Office No 20, First Floor, Takbeer Plaza, Al Faisal Town, Lahore, Pakistan\n`,
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
