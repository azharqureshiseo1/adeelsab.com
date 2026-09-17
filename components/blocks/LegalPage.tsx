import type { Metadata } from "next";
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

/** Shared renderer for legal documents (MDX, EN + UR). */
export async function LegalPage({ slug }: { slug: LegalSlug }) {
  const { en, ur } = await loadBoth("legal", slug);
  return (
    <>
      <DocArticle
        en={en}
        ur={ur}
        crumbs={[{ label: { en: en.meta.title, ur: ur.meta.title }, href: `/legal/${slug}` }]}
        backHref="/"
        backLabel={notFound.home}
        cta={sellerHub.articleCta}
      />
      {/* Which language version prevails — a term of the documents, not a draft notice. */}
      <Container className="pb-12">
        <p className="text-small text-ink-500">
          <T v={legal.officialNote} />
        </p>
      </Container>
      <CTABand form={false} source={`/legal/${slug}`} />
    </>
  );
}
