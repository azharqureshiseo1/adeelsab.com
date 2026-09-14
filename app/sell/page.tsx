import { T } from "@/components/T";
import { Table } from "@/components/ui/Table";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { ThreePaths } from "@/components/blocks/ThreePaths";
import { CTABand } from "@/components/blocks/CTABand";
import { nav, sellHub } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...sellHub.meta, path: "/sell" });

export default function SellHubPage() {
  const { compare } = sellHub;
  return (
    <>
      <PageHero
        crumbs={[{ label: nav.sellWithUs, href: "/sell" }]}
        eyebrow={sellHub.hero.eyebrow}
        title={sellHub.hero.title}
        lead={sellHub.hero.lead}
      />

      <Section labelledBy="paths-title">
        <ThreePaths />
      </Section>

      <Section tone="muted" labelledBy="compare-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <div>
            <h2 id="why-title" className="h3">
              <T v={sellHub.why.title} />
            </h2>
            <p className="mt-4 text-ink-700">
              <T v={sellHub.why.body} />
            </p>
          </div>
          <div className="min-w-0">
            <h2 id="compare-title" className="h3 mb-5">
              <T v={compare.title} />
            </h2>
            <Table
              head={compare.head.map((h, i) =>
                i === 0 ? (
                  <span key={i} className="sr-only">
                    —
                  </span>
                ) : (
                  <T key={i} v={h} />
                ),
              )}
            >
              {compare.rows.map((row) => (
                <tr key={row.label.en}>
                  <th scope="row" className="text-start font-semibold text-ink-900">
                    <T v={row.label} />
                  </th>
                  {row.cells.map((cell, i) => (
                    <td key={i} className="text-ink-700">
                      <T v={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </Table>
          </div>
        </div>
      </Section>

      <CTABand source="/sell" />
    </>
  );
}
