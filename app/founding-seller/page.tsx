import { BadgeCheck, Camera, Check, CreditCard, HandCoins, IdCard, Megaphone, MessageCircle, Package, PenLine, X } from "lucide-react";
import { T } from "@/components/T";
import { Button } from "@/components/ui/Button";
import { Card, IconTile } from "@/components/ui/Card";
import { Fact } from "@/components/ui/Fact";
import { Section, SectionHeading } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { HowItWorks } from "@/components/blocks/HowItWorks";
import { WaitlistForm } from "@/components/blocks/WaitlistForm";
import { FAQ } from "@/components/blocks/FAQ";
import { CTABand } from "@/components/blocks/CTABand";
import { facts } from "@/content/data/facts";
import { faqs, founding, nav } from "@/content/site";
import { factVars } from "@/lib/facts";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...founding.meta, path: "/founding-seller" });

const benefitIcons = [HandCoins, PenLine, MessageCircle, Megaphone, BadgeCheck];
const needIcons = [IdCard, CreditCard, Camera, Package];

export default function FoundingSellerPage() {
  const { hero, what, benefits, who, needs, timeline, formSection } = founding;
  return (
    <>
      <PageHero
        crumbs={[{ label: nav.sellMenu[3].label, href: "/founding-seller" }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        lead={hero.sub}
        actions={
          <Button href="#waitlist" size="lg">
            <T v={hero.cta} />
          </Button>
        }
        aside={
          <Card emphasis className="text-center">
            <dl className="grid grid-cols-2 divide-x divide-ink-200 rtl:divide-x-reverse">
              <div className="px-3">
                <dt className="text-small text-ink-500">
                  <T v={hero.counterLabel} />
                </dt>
                <dd className="gradient-text tabular mt-2 text-4xl font-extrabold [&_mark]:text-sm">
                  <Fact f={facts.foundingRegistered} />
                </dd>
              </div>
              <div className="px-3">
                <dt className="text-small text-ink-500">
                  <T v={hero.capLabel} />
                </dt>
                <dd className="tabular mt-2 text-4xl font-extrabold text-ink-900 [&_mark]:text-sm">
                  <Fact f={facts.foundingCap} />
                </dd>
              </div>
            </dl>
            <p className="text-small mt-5 border-t border-ink-200 pt-4 text-ink-400">
              <T v={hero.counterNote} />
            </p>
          </Card>
        }
      />

      {/* What the programme is */}
      <Section labelledBy="what-title" narrow>
        <SectionHeading id="what-title" eyebrow={what.eyebrow} title={what.title} />
        <p className="mt-5 text-lg text-ink-700">
          <T v={what.body} />
        </p>
      </Section>

      {/* Benefits */}
      <Section tone="muted" id="benefits" labelledBy="benefits-title">
        <SectionHeading id="benefits-title" eyebrow={benefits.eyebrow} title={benefits.title} lead={benefits.lead} />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((b, i) => {
            const Icon = benefitIcons[i];
            return (
              <Card as="li" key={b.title.en} emphasis={i === 0} className="reveal">
                <IconTile>
                  <Icon size={24} strokeWidth={1.75} />
                </IconTile>
                <h3 className="h4 mt-5">
                  <T v={b.title} />
                </h3>
                <p className="mt-2 text-[15px] text-ink-500">
                  <T v={b.body} vars={factVars} />
                </p>
              </Card>
            );
          })}
        </ul>
      </Section>

      {/* Who it's for + what we need */}
      <Section labelledBy="who-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="who-title" eyebrow={who.eyebrow} title={who.title} />
            <ul className="mt-8 space-y-3">
              {who.yes.map((item) => (
                <li key={item.en} className="flex items-center gap-3 text-lg text-ink-800">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#E8F5EE] text-success">
                    <Check size={16} strokeWidth={2.5} aria-hidden />
                  </span>
                  <T v={item} />
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3 rounded-card border border-ink-200 bg-ink-50 p-5">
              <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-ink-200 text-ink-700">
                <X size={16} strokeWidth={2.5} aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-ink-900">
                  <T v={who.notTitle} />
                </p>
                <p className="mt-1 text-[15px] text-ink-500">
                  <T v={who.not} />
                </p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading id="needs-title" eyebrow={needs.eyebrow} title={needs.title} />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {needs.items.map((n, i) => {
                const Icon = needIcons[i];
                return (
                  <li key={n.title.en} className="reveal rounded-card border border-ink-200 p-5">
                    <Icon size={24} strokeWidth={1.75} className="text-brand-500" aria-hidden />
                    <p className="mt-3 font-semibold text-ink-900">
                      <T v={n.title} />
                    </p>
                    <p className="mt-1 text-[15px] text-ink-500">
                      <T v={n.body} />
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section tone="muted" labelledBy="timeline-title">
        <SectionHeading id="timeline-title" eyebrow={timeline.eyebrow} title={timeline.title} />
        <HowItWorks steps={timeline.steps} vars={factVars} />
      </Section>

      {/* Waitlist form — inline and prominent */}
      <Section id="waitlist" labelledBy="form-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="lg:pt-6">
            <h2 id="form-title" className="h2">
              <T v={formSection.title} />
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              <T v={formSection.lead} vars={factVars} />
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.items.map((b) => (
                <li key={b.title.en} className="flex items-center gap-3 font-medium text-ink-800">
                  <Check size={18} className="shrink-0 text-brand-500" aria-hidden />
                  <T v={b.title} />
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[20px] border border-ink-200 bg-ink-50 p-2 md:p-3">
            <WaitlistForm audience="local_seller" source="/founding-seller" />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="muted" labelledBy="ffaq-title" narrow>
        <h2 id="ffaq-title" className="h2">
          <T v={founding.faqTitle} />
        </h2>
        <FAQ items={[faqs.foundingFree, faqs.foundingAfter, faqs.foundingCapFull, faqs.foundingNtn, faqs.foundingLaunch, faqs.commission]} />
      </Section>

      <CTABand form={false} href="#waitlist" source="/founding-seller" title={founding.ctaTitle} lead={founding.ctaLead} />
    </>
  );
}
