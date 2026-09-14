import Link from "next/link";
import { ArrowRight, Minus, PauseCircle, PiggyBank } from "lucide-react";
import { T } from "@/components/T";
import { Section, SectionHeading } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { HowItWorks } from "@/components/blocks/HowItWorks";
import { PayoutRails } from "@/components/blocks/PayoutRails";
import { FAQ } from "@/components/blocks/FAQ";
import { CTABand } from "@/components/blocks/CTABand";
import { faqs, localSellers, payoutRails, payouts as p } from "@/content/site";
import { factVars } from "@/lib/facts";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...p.meta, path: "/payouts" });

export default function PayoutsPage() {
  return (
    <>
      <PageHero crumbs={[{ label: p.hero.eyebrow, href: "/payouts" }]} eyebrow={p.hero.eyebrow} title={p.hero.title} lead={p.hero.lead} />

      <Section labelledBy="schedule-title">
        <SectionHeading id="schedule-title" eyebrow={p.schedule.eyebrow} title={p.schedule.title} />
        <HowItWorks steps={localSellers.money.schedule} vars={factVars} />
        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {p.summary.map((s) => (
            <div key={s.label.en} className="rounded-card border border-ink-200 bg-ink-50 p-5">
              <dt className="text-small text-ink-500">
                <T v={s.label} />
              </dt>
              <dd className="mt-1 text-lg font-bold text-ink-900">
                <T v={s.value} vars={factVars} />
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="muted" labelledBy="rails-title">
        <h2 id="rails-title" className="h3 mb-6">
          <T v={payoutRails.title} />
        </h2>
        <PayoutRails />
      </Section>

      <Section labelledBy="deductions-title">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-card border border-ink-200 p-6">
            <Minus size={24} strokeWidth={1.75} className="text-brand-500" aria-hidden />
            <h2 id="deductions-title" className="h4 mt-3">
              <T v={p.deductions.title} />
            </h2>
            <ul className="mt-4 space-y-2 text-[15px] text-ink-700">
              {p.deductions.items.map((item) => (
                <li key={item.en} className="flex gap-2">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ink-400" aria-hidden />
                  <T v={item} />
                </li>
              ))}
            </ul>
            <Link href="/pricing" className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand-600">
              <T v={p.deductions.link} />
              <ArrowRight size={16} className="flip-rtl" aria-hidden />
            </Link>
          </div>
          <div className="rounded-card border border-ink-200 p-6">
            <PiggyBank size={24} strokeWidth={1.75} className="text-brand-500" aria-hidden />
            <h2 className="h4 mt-3">
              <T v={p.threshold.title} />
            </h2>
            <p className="mt-3 text-[15px] text-ink-700">
              <T v={p.threshold.body} vars={factVars} />
            </p>
          </div>
          <div className="rounded-card border border-ink-200 p-6">
            <PauseCircle size={24} strokeWidth={1.75} className="text-brand-500" aria-hidden />
            <h2 className="h4 mt-3">
              <T v={p.hold.title} />
            </h2>
            <p className="mt-3 text-[15px] text-ink-700">
              <T v={p.hold.body} vars={factVars} />
            </p>
            <Link href="/seller-hub/returns-and-disputes" className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand-600">
              <T v={p.hold.link} />
              <ArrowRight size={16} className="flip-rtl" aria-hidden />
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="muted" labelledBy="payfaq-title" narrow>
        <h2 id="payfaq-title" className="h2">
          <T v={p.faqTitle} />
        </h2>
        <FAQ items={[faqs.payoutTiming, faqs.cod, faqs.rto]} />
      </Section>

      <CTABand source="/payouts" />
    </>
  );
}
