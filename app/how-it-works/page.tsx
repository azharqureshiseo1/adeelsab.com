import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import { T } from "@/components/T";
import { Table } from "@/components/ui/Table";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { HowItWorks } from "@/components/blocks/HowItWorks";
import { CTABand } from "@/components/blocks/CTABand";
import { home, howItWorks as h, resellers } from "@/content/site";
import { factVars } from "@/lib/facts";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...h.meta, path: "/how-it-works" });

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: h.hero.eyebrow, href: "/how-it-works" }]}
        eyebrow={h.hero.eyebrow}
        title={h.hero.title}
        lead={h.hero.lead}
      />

      <Section labelledBy="sflow-title">
        <h2 id="sflow-title" className="h2">
          <T v={h.sellerFlowTitle} />
        </h2>
        <HowItWorks steps={home.how.steps} vars={factVars} />
      </Section>

      <Section tone="muted" labelledBy="rflow-title">
        <h2 id="rflow-title" className="h2">
          <T v={h.resellerFlowTitle} />
        </h2>
        <HowItWorks steps={resellers.zero.steps} vars={factVars} />
      </Section>

      <Section labelledBy="split-title">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-14">
          <div className="min-w-0">
            <h2 id="split-title" className="h2 mb-8">
              <T v={h.splitTitle} />
            </h2>
            <Table
              head={h.splitHead.map((x) => (
                <T key={x.en} v={x} />
              ))}
            >
              {h.split.map((row) => (
                <tr key={row.task.en}>
                  <th scope="row" className="text-start font-medium text-ink-900">
                    <T v={row.task} />
                    {row.note && (
                      <span className="block text-sm font-normal text-ink-500">
                        <T v={row.note} />
                      </span>
                    )}
                  </th>
                  {[row.you, row.us].map((yes, i) => (
                    <td key={i}>
                      {yes ? (
                        <Check size={20} className="text-success" aria-label="Yes" />
                      ) : (
                        <Minus size={20} className="text-ink-400" aria-label="No" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </Table>
          </div>
          <nav aria-labelledby="deeper-title" className="self-start rounded-card border border-ink-200 bg-ink-50 p-6">
            <h2 id="deeper-title" className="h4">
              <T v={h.linksTitle} />
            </h2>
            <ul className="mt-4 divide-y divide-ink-200">
              {h.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-12 items-center justify-between gap-3 font-semibold text-ink-800 hover:text-brand-700"
                  >
                    <T v={link.label} />
                    <ArrowRight size={16} className="flip-rtl" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Section>

      <CTABand source="/how-it-works" />
    </>
  );
}
