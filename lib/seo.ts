import type { Metadata } from "next";
import { siteUrl } from "./utils";

export const SITE_NAME = "AdeelSab";

/** Per-page metadata with canonical URL, Open Graph and Twitter card. */
export function pageMeta({
  title,
  description,
  path,
  image = "/og-image.png",
  type = "website",
  absoluteTitle,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  /** Skip the "· AdeelSab" title template. */
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: siteUrl(path),
      siteName: SITE_NAME,
      locale: "en_PK",
      alternateLocale: ["ur_PK"],
      type,
      images: [{ url: image, width: 1200, height: 630, alt: `${SITE_NAME} — Sell across Pakistan` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: siteUrl(item.path),
    })),
  };
}
