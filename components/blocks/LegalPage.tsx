import type { Metadata } from "next";
import { TriangleAlert } from "lucide-react";
import { T } from "@/components/T";
import { Container } from "@/components/layout/Container";
import { DocArticle } from "./DocArticle";
import { CTABand } from "./CTABand";
import { legal, notFound, sellerHub } from "@/content/site";
import { loadBoth } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export type LegalSlug = "privacy" | "terms" | "seller-agreement";

export async function legalMetadata(slug: LegalSlug): Promise<Metadata> {
  const { en } = await loadBoth("legal", slug);
  return pageMeta({ title: en.meta.title, description: en.meta.description, path: `/legal/${slug}` });
}

/** Shared renderer for legal documents (MDX, EN + UR), with a visible draft notice. */
export async function LegalPage({ slug }: { slug: LegalSlug }) {
  const { en, ur } = await loadBoth("legal", slug);
  return (
    <>
      <div className="border-b border-[#F5DFB5] bg-[#FFF6E5]">
        <Container className="flex items-center gap-3 py-3 text-sm font-medium text-[#8A5300]">
          <TriangleAlert size={18} className="shrink-0" aria-hidden />
          <p>
            <T v={legal.draftBanner} /> <T v={legal.officialNote} />
          </p>
        </Container>
      </div>
      <DocArticle
        en={en}
        ur={ur}
        crumbs={[{ label: { en: en.meta.title, ur: ur.meta.title }, href: `/legal/${slug}` }]}
        backHref="/"
        backLabel={notFound.home}
        cta={sellerHub.articleCta}
      />
      <CTABand form={false} source={`/legal/${slug}`} />
    </>
  );
}
