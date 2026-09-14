import type { Metadata } from "next";
import { DocArticle } from "@/components/blocks/DocArticle";
import { CTABand } from "@/components/blocks/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { blog, sellerHub } from "@/content/site";
import { listSlugs, loadBoth } from "@/lib/content";
import { pageMeta, SITE_NAME } from "@/lib/seo";
import { siteUrl } from "@/lib/utils";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return listSlugs("blog").map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { en } = await loadBoth("blog", slug);
  return pageMeta({ title: en.meta.title, description: en.meta.description, path: `/blog/${slug}`, type: "article" });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const { en, ur } = await loadBoth("blog", slug);
  return (
    <>
      <DocArticle
        en={en}
        ur={ur}
        crumbs={[
          { label: blog.hero.eyebrow, href: "/blog" },
          { label: { en: en.meta.title, ur: ur.meta.title }, href: `/blog/${slug}` },
        ]}
        backHref="/blog"
        backLabel={blog.back}
        cta={sellerHub.articleCta}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: en.meta.title,
          description: en.meta.description,
          inLanguage: ["en-PK", "ur-PK"],
          datePublished: en.meta.updatedAt,
          dateModified: en.meta.updatedAt,
          author: { "@type": "Organization", name: en.meta.author ?? SITE_NAME },
          publisher: { "@type": "Organization", name: SITE_NAME, logo: siteUrl("/icon-512.png") },
          mainEntityOfPage: siteUrl(`/blog/${slug}`),
          image: siteUrl("/og-image.png"),
        }}
      />
      <CTABand form={false} source={`/blog/${slug}`} />
    </>
  );
}
