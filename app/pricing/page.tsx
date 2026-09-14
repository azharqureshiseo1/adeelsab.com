import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { T } from "@/components/T";
import { Button } from "@/components/ui/Button";
import { Table } from "@/components/ui/Table";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { CommissionTable } from "@/components/blocks/CommissionTable";
import { PayoutRails } from "@/components/blocks/PayoutRails";
import { FAQ } from "@/components/blocks/FAQ";
import { CTABand } from "@/components/blocks/CTABand";
import { faqs, nav, pricing as p } from "@/content/site";
import { factVars } from "@/lib/facts";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...p.meta, path: "/pricing" });

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: nav.main[1].label, href: "/pricing" }]}
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        lead={p.hero.lead}
      />

      <Section labelledBy="commission-title">
        <h2 id="commission-title" className="h2 mb-8">
          <T v={p.commissionTitle} />
        </h2>
        <CommissionTable />
      </Section>

      <Section tone="muted" labelledBy="fees-title">
        <h2 id="fees-title" className="h2 mb-8">
          <T v={p.feesTitle} />
        </h2>
        <Table
          head={p.feesHead.map((h) => (
            <T key={h.en} v={h} />
          ))}
        >
          {p.fees.map((fee) => (
            <tr key={fee.name.en}>
              <th scope="row" className="text-start font-semibold text-ink-900">
                <T v={fee.name} />
              </th>
              <td className="tabular text-ink-800">
                {fee.href ? (
                  <Link href={fee.href} className="font-medium text-brand-700 underline-offset-2 hover:underline">
                    <T v={fee.amount} vars={factVars} />
                  </Link>
                ) : (
                  <T v={fee.amount} vars={factVars} />
                )}
              </td>
              <td className="text-ink-500">
                <T v={fee.when} />
              </td>
            </tr>
          ))}
        </Table>
        <div className="mt-6 flex gap-4 rounded-card border-2 border-success/30 bg-white p-6">
          <ShieldCheck size={32} strokeWidth={1.75} className="shrink-0 text-success" aria-hidden />
          <div>
            <p className="h4 font-extrabold text-ink-900">
              <T v={p.noOther} />
            </p>
            <p className="mt-1 text-ink-700">
              <T v={p.noOtherBody} />
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="ppayout-title">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-center">
          <div>
            <h2 id="ppayout-title" className="h3">
              <T v={p.payoutTitle} />
            </h2>
            <p className="mt-3 text-ink-700">
              <T v={p.payoutBody} vars={factVars} />
            </p>
            <Button href="/payouts" variant="secondary" className="mt-6">
              <T v={p.payoutCta} />
              <ArrowRight size={16} className="flip-rtl" aria-hidden />
            </Button>
          </div>
          <PayoutRails />
        </div>
      </Section>

      <Section tone="muted" labelledBy="pfaq-title" narrow>
        <h2 id="pfaq-title" className="h2">
          <T v={p.faqTitle} />
        </h2>
        <FAQ items={[faqs.commission, faqs.shipping, faqs.rto, faqs.unsold]} />
      </Section>

      <CTABand source="/pricing" />
    </>
  );
}
