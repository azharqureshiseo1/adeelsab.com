import Link from "next/link";
import { ArrowRight, BookOpen, Camera, PackageOpen, RotateCcw, Rocket, Scale } from "lucide-react";
import { T } from "@/components/T";
import { IconTile } from "@/components/ui/Card";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { CTABand } from "@/components/blocks/CTABand";
import { common, sellerHub } from "@/content/site";
import { loadAll } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...sellerHub.meta, path: "/seller-hub" });

const icons = { "getting-started": Rocket, listings: Camera, orders: PackageOpen, returns: RotateCcw, money: Scale } as const;

export default async function SellerHubIndex() {
  const docs = await loadAll("seller-hub");
  const bySlug = Object.fromEntries(docs.map((d) => [d.en.slug, d]));

  return (
    <>
      <PageHero
        crumbs={[{ label: sellerHub.hero.eyebrow, href: "/seller-hub" }]}
        eyebrow={sellerHub.hero.eyebrow}
        title={sellerHub.hero.title}
        lead={sellerHub.hero.lead}
      />
      <Section labelledBy="hub-cats">
        <h2 id="hub-cats" className="sr-only">
          <T v={sellerHub.hero.eyebrow} />
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sellerHub.categories.map((cat) => {
            const Icon = icons[cat.key as keyof typeof icons] ?? BookOpen;
            return (
              <section
                key={cat.key}
                aria-labelledby={`cat-${cat.key}`}
                className="reveal flex flex-col rounded-card border border-ink-200 bg-white p-6 shadow-soft"
              >
                <IconTile>
                  <Icon size={24} strokeWidth={1.75} />
                </IconTile>
                <h3 id={`cat-${cat.key}`} className="h4 mt-4">
                  <T v={cat.title} />
                </h3>
                <p className="text-small mt-1 text-ink-500">
                  <T v={cat.desc} />
                </p>
                <ul className="mt-5 divide-y divide-ink-200 border-t border-ink-200">
                  {cat.slugs.map((slug) => {
                    const doc = bySlug[slug];
                    if (!doc) return null;
                    return (
                      <li key={slug}>
                        <Link href={`/seller-hub/${slug}`} className="group flex items-start justify-between gap-3 py-3.5">
                          <span>
                            <span className="block font-semibold text-ink-900 group-hover:text-brand-600">
                              <T v={{ en: doc.en.meta.title, ur: doc.ur.meta.title }} />
                            </span>
                            <span className="text-small text-ink-500">
                              <span className="l-en">
                                <span className="latin">{doc.en.readingMinutes}</span> <T v={common.minRead} />
                              </span>
                              <span className="l-ur" lang="ur">
                                <span className="latin">{doc.ur.readingMinutes}</span> {common.minRead.ur}
                              </span>
                            </span>
                          </span>
                          <ArrowRight size={18} className="flip-rtl mt-1 shrink-0 text-ink-400 group-hover:text-brand-600" aria-hidden />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </Section>
      <CTABand source="/seller-hub" />
    </>
  );
}
