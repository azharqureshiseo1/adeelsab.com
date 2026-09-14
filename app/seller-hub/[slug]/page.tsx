import type { Metadata } from "next";
import { DocArticle } from "@/components/blocks/DocArticle";
import { CTABand } from "@/components/blocks/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { nav, sellerHub } from "@/content/site";
import { listSlugs, loadBoth } from "@/lib/content";
import { pageMeta, SITE_NAME } from "@/lib/seo";
import { siteUrl } from "@/lib/utils";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return listSlugs("seller-hub").map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { en } = await loadBoth("seller-hub", slug);
  return pageMeta({
    title: en.meta.title,
    description: en.meta.description,
    path: `/seller-hub/${slug}`,
    type: "article",
  });
}

export default async function SellerHubArticle({ params }: Props) {
  const { slug } = await params;
  const { en, ur } = await loadBoth("seller-hub", slug);
  return (
    <>
      <DocArticle
        en={en}
        ur={ur}
        crumbs={[
          { label: nav.main[2].label, href: "/seller-hub" },
          { label: { en: en.meta.title, ur: ur.meta.title }, href: `/seller-hub/${slug}` },
        ]}
        backHref="/seller-hub"
        backLabel={sellerHub.back}
        cta={sellerHub.articleCta}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: en.meta.title,
          description: en.meta.description,
          inLanguage: ["en-PK", "ur-PK"],
          dateModified: en.meta.updatedAt,
          author: { "@type": "Organization", name: SITE_NAME },
          publisher: { "@type": "Organization", name: SITE_NAME, logo: siteUrl("/icon-512.png") },
          mainEntityOfPage: siteUrl(`/seller-hub/${slug}`),
        }}
      />
      <CTABand form={false} source={`/seller-hub/${slug}`} />
    </>
  );
}
