import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { T } from "@/components/T";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { CTABand } from "@/components/blocks/CTABand";
import { blog, common } from "@/content/site";
import { loadAll } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...blog.meta, path: "/blog" });

export default async function BlogIndex() {
  const posts = await loadAll("blog");
  return (
    <>
      <PageHero crumbs={[{ label: blog.hero.eyebrow, href: "/blog" }]} eyebrow={blog.hero.eyebrow} title={blog.hero.title} lead={blog.hero.lead} />
      <Section labelledBy="posts-title">
        <h2 id="posts-title" className="sr-only">
          <T v={blog.hero.eyebrow} />
        </h2>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ en, ur }) => (
            <li key={en.slug} className="reveal">
              <Link
                href={`/blog/${en.slug}`}
                className="group flex h-full flex-col rounded-card border border-ink-200 bg-white p-6 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="text-small font-semibold text-brand-600">
                  <T v={{ en: en.meta.audience, ur: ur.meta.audience }} />
                </span>
                <span className="h4 mt-3 block text-ink-900 group-hover:text-brand-600">
                  <T v={{ en: en.meta.title, ur: ur.meta.title }} />
                </span>
                <span className="mt-3 block text-[15px] text-ink-500">
                  <T v={{ en: en.meta.description, ur: ur.meta.description }} />
                </span>
                <span className="text-small mt-auto flex items-center justify-between gap-3 pt-6 text-ink-500">
                  <span>
                    <time dateTime={en.meta.updatedAt} className="latin">
                      {en.meta.updatedAt}
                    </time>{" "}
                    · <span className="latin">{en.readingMinutes}</span> <T v={common.minRead} />
                  </span>
                  <ArrowRight size={18} className="flip-rtl text-ink-400 group-hover:text-brand-600" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CTABand source="/blog" />
    </>
  );
}
