import { Check, Hourglass, Wallet } from "lucide-react";
import { T } from "@/components/T";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { HowItWorks } from "@/components/blocks/HowItWorks";
import { MarginCalculator } from "@/components/blocks/MarginCalculator";
import { PayoutRails } from "@/components/blocks/PayoutRails";
import { WaitlistForm } from "@/components/blocks/WaitlistForm";
import { CTABand } from "@/components/blocks/CTABand";
import { categories } from "@/content/data/categories";
import { common, nav, resellers as r } from "@/content/site";
import { factVars } from "@/lib/facts";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...r.meta, path: "/sell/resellers" });

export default function ResellersPage() {
  const preview = categories.filter((c) => c.resellerPreview);
  return (
    <>
      <PageHero
        crumbs={[
          { label: nav.sellWithUs, href: "/sell" },
          { label: nav.sellMenu[1].label, href: "/sell/resellers" },
        ]}
        eyebrow={r.hero.eyebrow}
        badge={
          <Badge tone="brand" dot>
            <T v={common.badgeWaitlist} />
          </Badge>
        }
        title={r.hero.title}
        lead={r.hero.lead}
        actions={
          <Button href="#reseller-waitlist" size="lg">
            <T v={r.hero.cta} />
          </Button>
        }
        aside={
          <Card className="flex items-center gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF6E5] text-warning">
              <Hourglass size={24} strokeWidth={1.75} aria-hidden />
            </span>
            <div>
              <p className="font-semibold text-ink-900">
                <T v={r.hero.status} />
              </p>
              <p className="text-small text-ink-500">
                <T v={r.hero.statusBody} />
              </p>
            </div>
          </Card>
        }
      />

      {/* Zero investment — how it works */}
      <Section labelledBy="zero-title">
        <SectionHeading id="zero-title" eyebrow={r.zero.eyebrow} title={r.zero.title} lead={r.zero.lead} />
        <HowItWorks steps={r.zero.steps} vars={factVars} />
      </Section>

      {/* Published margins + calculator */}
      <Section tone="muted" labelledBy="margins-title">
        <SectionHeading id="margins-title" eyebrow={r.margins.eyebrow} title={r.margins.title} />
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {r.margins.points.map((p) => (
            <li key={p.title.en} className="reveal">
              <p className="flex items-center gap-2 font-semibold text-ink-900">
                <Check size={18} className="text-brand-500" aria-hidden />
                <T v={p.title} />
              </p>
              <p className="mt-2 text-[15px] text-ink-500">
                <T v={p.body} />
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <MarginCalculator copy={r.calculator} />
        </div>
      </Section>

      {/* Category preview */}
      <Section labelledBy="cats-title">
        <SectionHeading id="cats-title" eyebrow={r.categories.eyebrow} title={r.categories.title} lead={r.categories.lead} />
        <ul className="mt-8 flex flex-wrap gap-3">
          {preview.map((c) => (
            <li key={c.slug} className="rounded-full border border-ink-200 bg-white px-4 py-2 font-medium text-ink-800">
              <T v={{ en: c.en, ur: c.ur }} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Payout timeline */}
      <Section tone="muted" labelledBy="rpayout-title">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-center">
          <div>
            <Wallet size={28} strokeWidth={1.75} className="text-brand-500" aria-hidden />
            <h2 id="rpayout-title" className="h3 mt-3">
              <T v={r.payout.title} />
            </h2>
            <p className="mt-3 text-ink-700">
              <T v={r.payout.body} vars={factVars} />
            </p>
          </div>
          <PayoutRails />
        </div>
      </Section>

      {/* Waitlist */}
      <Section id="reseller-waitlist" labelledBy="rform-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="lg:pt-6">
            <h2 id="rform-title" className="h2">
              <T v={r.formTitle} />
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              <T v={r.formLead} />
            </p>
          </div>
          <div className="rounded-[20px] border border-ink-200 bg-ink-50 p-2 md:p-3">
            <WaitlistForm audience="reseller" source="/sell/resellers" />
          </div>
        </div>
      </Section>

      <CTABand form={false} source="/sell/resellers" href="#reseller-waitlist" label={r.hero.cta} title={r.formTitle} lead={r.formLead} />
    </>
  );
}
