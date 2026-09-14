import "server-only";
import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import type { Locale } from "./i18n";
import { slugify } from "./utils";

/**
 * MDX content pipeline for the Seller Hub and blog.
 *
 * Each document is two files — `<slug>.en.mdx` and `<slug>.ur.mdx` — exporting a
 * `metadata` object (the frontmatter: title, description, audience, updatedAt, locale).
 * Files are read at BUILD time only (every page is prerendered); nothing touches the
 * filesystem at runtime.
 */

export type DocMeta = {
  title: string;
  description: string;
  audience: string;
  updatedAt: string;
  locale: Locale;
  category?: string;
  author?: string;
};

type MdxModule = { default: ComponentType; metadata: DocMeta };
type Loader = () => Promise<MdxModule>;

export type Collection = "seller-hub" | "blog" | "legal";

const registry: Record<Collection, Record<string, Record<Locale, Loader>>> = {
  "seller-hub": {
    "getting-started": {
      en: () => import("@/content/seller-hub/getting-started.en.mdx"),
      ur: () => import("@/content/seller-hub/getting-started.ur.mdx"),
    },
    "how-to-list-products": {
      en: () => import("@/content/seller-hub/how-to-list-products.en.mdx"),
      ur: () => import("@/content/seller-hub/how-to-list-products.ur.mdx"),
    },
    "product-photography-with-a-phone": {
      en: () => import("@/content/seller-hub/product-photography-with-a-phone.en.mdx"),
      ur: () => import("@/content/seller-hub/product-photography-with-a-phone.ur.mdx"),
    },
    "packaging-guide": {
      en: () => import("@/content/seller-hub/packaging-guide.en.mdx"),
      ur: () => import("@/content/seller-hub/packaging-guide.ur.mdx"),
    },
    "returns-and-disputes": {
      en: () => import("@/content/seller-hub/returns-and-disputes.en.mdx"),
      ur: () => import("@/content/seller-hub/returns-and-disputes.ur.mdx"),
    },
    "reducing-rto-in-cod": {
      en: () => import("@/content/seller-hub/reducing-rto-in-cod.en.mdx"),
      ur: () => import("@/content/seller-hub/reducing-rto-in-cod.ur.mdx"),
    },
    "ntn-and-tax-basics": {
      en: () => import("@/content/seller-hub/ntn-and-tax-basics.en.mdx"),
      ur: () => import("@/content/seller-hub/ntn-and-tax-basics.ur.mdx"),
    },
  },
  // Newest first — this order is used on the blog index.
  blog: {
    "no-hidden-fees": {
      en: () => import("@/content/blog/no-hidden-fees.en.mdx"),
      ur: () => import("@/content/blog/no-hidden-fees.ur.mdx"),
    },
    "cash-on-delivery-what-sellers-should-know": {
      en: () => import("@/content/blog/cash-on-delivery-what-sellers-should-know.en.mdx"),
      ur: () => import("@/content/blog/cash-on-delivery-what-sellers-should-know.ur.mdx"),
    },
    "why-local-sellers-first": {
      en: () => import("@/content/blog/why-local-sellers-first.en.mdx"),
      ur: () => import("@/content/blog/why-local-sellers-first.ur.mdx"),
    },
  },
  legal: {
    privacy: {
      en: () => import("@/content/legal/privacy.en.mdx"),
      ur: () => import("@/content/legal/privacy.ur.mdx"),
    },
    terms: {
      en: () => import("@/content/legal/terms.en.mdx"),
      ur: () => import("@/content/legal/terms.ur.mdx"),
    },
    "seller-agreement": {
      en: () => import("@/content/legal/seller-agreement.en.mdx"),
      ur: () => import("@/content/legal/seller-agreement.ur.mdx"),
    },
  },
};

export type TocItem = { id: string; text: string; level: 2 | 3 };

export type LoadedDoc = {
  slug: string;
  locale: Locale;
  meta: DocMeta;
  Body: ComponentType;
  toc: TocItem[];
  readingMinutes: number;
};

export function listSlugs(collection: Collection): string[] {
  return Object.keys(registry[collection]);
}

function rawSource(collection: Collection, slug: string, locale: Locale): string {
  return fs.readFileSync(path.join(process.cwd(), "content", collection, `${slug}.${locale}.mdx`), "utf8");
}

/** Strips the metadata export, JSX and markdown syntax, leaving readable text. */
function plainText(source: string): string {
  return source
    .replace(/export const metadata[\s\S]*?\n};?\n/, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`|[\]()-]/g, " ");
}

function tocFrom(source: string): TocItem[] {
  const items: TocItem[] = [];
  for (const line of source.split(/\r?\n/)) {
    const m = line.match(/^(##|###)\s+(.+?)\s*$/);
    if (m) items.push({ level: m[1] === "##" ? 2 : 3, text: m[2], id: slugify(m[2]) });
  }
  return items;
}

export async function loadDoc(collection: Collection, slug: string, locale: Locale): Promise<LoadedDoc> {
  const loader = registry[collection][slug]?.[locale];
  if (!loader) throw new Error(`Unknown ${collection} document: ${slug} (${locale})`);
  const mod = await loader();
  const source = rawSource(collection, slug, locale);
  const words = plainText(source).split(/\s+/).filter(Boolean).length;
  // Urdu reads a little slower than English per word.
  const wpm = locale === "ur" ? 160 : 220;
  return {
    slug,
    locale,
    meta: mod.metadata,
    Body: mod.default,
    toc: tocFrom(source),
    readingMinutes: Math.max(1, Math.round(words / wpm)),
  };
}

export async function loadBoth(collection: Collection, slug: string) {
  const [en, ur] = await Promise.all([loadDoc(collection, slug, "en"), loadDoc(collection, slug, "ur")]);
  return { en, ur };
}

export async function loadAll(collection: Collection) {
  return Promise.all(listSlugs(collection).map((slug) => loadBoth(collection, slug)));
}
