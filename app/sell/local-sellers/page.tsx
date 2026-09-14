import Link from "next/link";
import { ArrowRight, Camera, Check, FileText, MessageCircle, PenLine } from "lucide-react";
import { T } from "@/components/T";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { CommissionTable } from "@/components/blocks/CommissionTable";
import { RtoTable } from "@/components/blocks/RtoTable";
import { PayoutRails } from "@/components/blocks/PayoutRails";
import { CoverageMap } from "@/components/blocks/CoverageMap";
import { PartnerLogos } from "@/components/blocks/PartnerLogos";
import { CTABand } from "@/components/blocks/CTABand";
import { common, localSellers as ls, nav } from "@/content/site";
import { factVars } from "@/lib/facts";
import type { L } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { whatsappLink } from "@/lib/utils";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...ls.meta, path: "/sell/local-sellers" });

/** Objection block: the seller's worry as a quote, then our answer. */
function Objection({ n, q, title, id, children }: { n: number; q: L; title: L; id: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 border-t border-ink-200 py-12 first:border-t-0 first:pt-0 md:py-16 lg:grid-cols-[1fr_2fr] lg:gap-12">
      <div>
        <span className="latin text-small font-bold text-brand-600">0{n}</span>
        <p className="mt-2 text-lg font-medium text-ink-500 italic">
          <T v={q} />
        </p>
        <h3 id={id} className="h3 mt-3">
          <T v={title} />
        </h3>
      </div>
      <div className="reveal min-w-0">{children}</div>
    </div>
  );
}

function GuideLink({ href, label }: { href: string; label: L }) {
  return (
    <Link href={href} className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-600 hover:underline">
      <FileText size={18} strokeWidth={1.75} aria-hidden />
      <T v={label} />
      <ArrowRight size={16} className="flip-rtl" aria-hidden />
    </Link>
  );
}

const complicatedIcons = [PenLine, MessageCircle, Camera];

export default function LocalSellersPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: nav.sellWithUs, href: "/sell" },
          { label: nav.sellMenu[0].label, href: "/sell/local-sellers" },
        ]}
        eyebrow={ls.hero.eyebrow}
        badge={
          <Badge tone="success" dot>
            <T v={common.badgeNowOnboarding} />
          </Badge>
        }
        title={ls.hero.title}
        lead={ls.hero.lead}
        actions={
          <>
            <Button href="#join" size="lg">
              <T v={ls.hero.cta} />
            </Button>
            <Button href={whatsappLink("Assalam o Alaikum, I have a shop and want to sell on AdeelSab.")} size="lg" variant="secondary">
              <WhatsAppGlyph className="size-5 text-success" />
              <T v={ls.hero.whatsapp} />
            </Button>
          </>
        }
      />

      <Section labelledBy="objections-title">
        <div className="max-w-2xl">
          <p className="text-small mb-3 font-semibold tracking-wide text-brand-600 uppercase">
            <T v={ls.objectionsIntro.eyebrow} />
          </p>
          <h2 id="objections-title" className="h2">
            <T v={ls.objectionsIntro.title} />
          </h2>
        </div>

        <div className="mt-12">
          {/* 1 — complicated */}
          <Objection n={1} id="o-complicated" q={ls.complicated.q} title={ls.complicated.title}>
            <p className="text-lg text-ink-700">
              <T v={ls.complicated.body} />
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {ls.complicated.points.map((p, i) => {
                const Icon = complicatedIcons[i];
                return (
                  <li key={p.title.en} className="rounded-card border border-ink-200 p-5">
                    <Icon size={22} strokeWidth={1.75} className="text-brand-500" aria-hidden />
                    <p className="mt-3 font-semibold text-ink-900">
                      <T v={p.title} />
                    </p>
                    <p className="text-small mt-1 text-ink-500">
                      <T v={p.body} />
                    </p>
                  </li>
                );
              })}
            </ul>
            <GuideLink href="/seller-hub/product-photography-with-a-phone" label={ls.complicated.guide} />
          </Objection>

          {/* 2 — returns / RTO */}
          <Objection n={2} id="o-returns" q={ls.returns.q} title={ls.returns.title}>
            <p className="text-lg text-ink-700">
              <T v={ls.returns.body} />
            </p>
            <RtoTable />
            <ul className="mt-5 space-y-2 text-ink-700">
              {ls.returns.points.map((p) => (
                <li key={p.en} className="flex gap-2.5">
                  <Check size={18} className="mt-1 shrink-0 text-brand-500" aria-hidden />
                  <T v={p} />
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-6">
              <GuideLink href="/seller-hub/reducing-rto-in-cod" label={ls.returns.guide} />
              <GuideLink href="/delivery#rto" label={ls.returns.more} />
            </div>
          </Objection>

          {/* 3 — commission */}
          <Objection n={3} id="o-commission" q={ls.commission.q} title={ls.commission.title}>
            <p className="mb-5 text-lg text-ink-700">
              <T v={ls.commission.body} />
            </p>
            <CommissionTable />
            <GuideLink href="/pricing" label={ls.commission.more} />
          </Objection>

          {/* 4 — money */}
          <Objection n={4} id="o-money" q={ls.money.q} title={ls.money.title}>
            <ol className="grid gap-4 sm:grid-cols-3">
              {ls.money.schedule.map((s, i) => (
                <li key={s.title.en} className="rounded-card bg-ink-50 p-5">
                  <span className="latin inline-flex size-8 items-center justify-center rounded-full bg-white text-sm font-bold text-brand-600 shadow-soft">
                    {i + 1}
                  </span>
                  <p className="mt-3 font-semibold text-ink-900">
                    <T v={s.title} />
                  </p>
                  <p className="text-small mt-1 text-ink-500">
                    <T v={s.body} vars={factVars} />
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-6">
              <PayoutRails />
            </div>
            <GuideLink href="/payouts" label={ls.money.more} />
          </Objection>

          {/* 5 — reach */}
          <Objection n={5} id="o-reach" q={ls.reach.q} title={ls.reach.title}>
            <div className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
              <CoverageMap showList={false} />
              <PartnerLogos stacked />
            </div>
            <GuideLink href="/delivery" label={ls.reach.more} />
          </Objection>

          {/* 6 — NTN */}
          <Objection n={6} id="o-ntn" q={ls.ntn.q} title={ls.ntn.title}>
            <ul className="space-y-3 text-lg text-ink-700">
              {ls.ntn.points.map((p) => (
                <li key={p.en} className="flex gap-3">
                  <Check size={20} className="mt-1.5 shrink-0 text-brand-500" aria-hidden />
                  <T v={p} />
                </li>
              ))}
            </ul>
            <p className="text-small mt-5 rounded-xl border border-ink-200 bg-ink-50 p-4 text-ink-500">
              <T v={ls.ntn.disclaimer} />
            </p>
            <GuideLink href="/seller-hub/ntn-and-tax-basics" label={ls.ntn.guide} />
          </Objection>
        </div>
      </Section>

      {/* Onboarding steps */}
      <Section tone="muted" labelledBy="onboarding-title">
        <p className="text-small mb-3 font-semibold tracking-wide text-brand-600 uppercase">
          <T v={ls.onboarding.eyebrow} />
        </p>
        <h2 id="onboarding-title" className="h2 max-w-2xl">
          <T v={ls.onboarding.title} />
        </h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {ls.onboarding.steps.map((s, i) => (
            <li key={s.title.en} className="reveal rounded-card border border-ink-200 bg-white p-5">
              <span className="latin inline-flex size-9 items-center justify-center rounded-full border-2 border-brand-500 font-bold text-brand-600">
                {i + 1}
              </span>
              <p className="mt-4 font-semibold text-ink-900">
                <T v={s.title} />
              </p>
              <p className="text-small mt-1 text-ink-500">
                <T v={s.body} />
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-card border border-ink-200 bg-white p-6 md:p-8">
            <h3 className="h4">
              <T v={ls.bring.title} />
            </h3>
            <ul className="mt-5 space-y-3">
              {ls.bring.items.map((item) => (
                <li key={item.en} className="flex gap-3 text-ink-700">
                  <Check size={20} className="mt-1 shrink-0 text-success" aria-hidden />
                  <T v={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card border border-ink-200 border-t-4 border-t-success bg-white p-6 md:p-8">
            <h3 className="h4">
              <T v={ls.callback.title} />
            </h3>
            <p className="mt-3 text-ink-700">
              <T v={ls.callback.body} />
            </p>
            <Button
              href={whatsappLink("Assalam o Alaikum, please call me back in Urdu about selling on AdeelSab.")}
              variant="whatsapp"
              size="lg"
              className="mt-6"
            >
              <WhatsAppGlyph className="size-5" />
              <T v={ls.callback.cta} />
            </Button>
            <p className="text-small mt-4 text-ink-500">
              <T v={ls.callback.hours} vars={factVars} />
            </p>
          </div>
        </div>
      </Section>

      <CTABand source="/sell/local-sellers" title={ls.ctaTitle} />
    </>
  );
}
