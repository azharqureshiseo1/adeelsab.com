import type { MetadataRoute } from "next";
import { listSlugs } from "@/lib/content";
import { staticRoutes } from "@/lib/routes";
import { siteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...staticRoutes.map((r) => ({
      url: siteUrl(r.path),
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...listSlugs("seller-hub").map((slug) => ({
      url: siteUrl(`/seller-hub/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...listSlugs("blog").map((slug) => ({
      url: siteUrl(`/blog/${slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
