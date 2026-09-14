import Link from "next/link";
import { ArrowRight, Banknote, Check, MapPin, RotateCcw, Store, Truck, Users } from "lucide-react";
import { T } from "@/components/T";
import { Button } from "@/components/ui/Button";
import { Card, IconTile } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Hero } from "@/components/blocks/Hero";
import { ThreePaths } from "@/components/blocks/ThreePaths";
import { CapabilityBand } from "@/components/blocks/CapabilityBand";
import { HowItWorks } from "@/components/blocks/HowItWorks";
import { PartnerLogos } from "@/components/blocks/PartnerLogos";
import { TrustBar } from "@/components/blocks/TrustBar";
import { FAQ } from "@/components/blocks/FAQ";
import { CTABand } from "@/components/blocks/CTABand";
import { common, faqs, home } from "@/content/site";
import { factVars } from "@/lib/facts";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...home.meta, path: "/", absoluteTitle: true });

const deliveryIcons = [Truck, MapPin, Banknote, RotateCcw];

export default function HomePage() {
  const { resellerListings: rl, delivery, founding } = home;
  return (
    <>
      {/* 1 · Hero */}
      <Hero
        eyebrow={home.hero.eyebrow}
        title={home.hero.title}
        sub={home.hero.sub}
        micro={home.hero.micro}
        primary={{ href: "/founding-seller", label: common.ctaFounding }}
        secondary={{ href: "/how-it-works", label: common.ctaHowItWorks }}
        image={{
          src: "/images/placeholder-hero-merchant.webp",
          alt: home.hero.imageAlt.en,
          width: 1200,
          height: 1000,
        }}
      />

      {/* 2 · Three paths */}
      <Section labelledBy="paths-title">
        <ThreePaths />
      </Section>

      {/* 3 · Capability band */}
      <CapabilityBand />

      {/* 4 · How it works */}
      <Section tone="muted" labelledBy="how-title">
        <SectionHeading id="how-title" eyebrow={home.how.eyebrow} title={home.how.title} />
        <HowItWorks steps={home.how.steps} />
      </Section>

      {/* 5 · Reseller-Enabled Listings */}
      <Section labelledBy="rl-title">
        <SectionHeading id="rl-title" eyebrow={rl.eyebrow} title={rl.title} lead={rl.lead} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { side: rl.sellers, Icon: Store },
            { side: rl.resellers, Icon: Users },
          ].map(({ side, Icon }) => (
            <Card key={side.title.en} className="reveal">
              <div className="flex items-center gap-3">
                <IconTile>
                  <Icon size={24} strokeWidth={1.75} />
                </IconTile>
                <h3 className="h4">
                  <T v={side.title} />
                </h3>
              </div>
              <p className="mt-4 text-ink-700">
                <T v={side.body} />
              </p>
              <ul className="mt-5 space-y-2.5 text-[15px] text-ink-500">
                {side.points.map((p) => (
                  <li key={p.en} className="flex gap-2.5">
                    <Check size={18} className="mt-0.5 shrink-0 text-brand-500" aria-hidden />
                    <T v={p} />
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <Link href="/reseller-listings" className="mt-8 inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand-600">
          <T v={rl.cta} />
          <ArrowRight size={16} className="flip-rtl" aria-hidden />
        </Link>
      </Section>

      {/* 6 · Delivery + partner logos */}
      <Section tone="muted" labelledBy="delivery-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading id="delivery-title" eyebrow={delivery.eyebrow} title={delivery.title} lead={delivery.lead} />
            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              {delivery.points.map((p, i) => {
                const Icon = deliveryIcons[i];
                return (
                  <div key={p.title.en} className="flex gap-3">
                    <Icon size={22} strokeWidth={1.75} className="mt-1 shrink-0 text-brand-500" aria-hidden />
                    <div>
                      <dt className="font-semibold text-ink-900">
                        <T v={p.title} />
                      </dt>
                      <dd className="text-[15px] text-ink-500">
                        <T v={p.body} vars={factVars} />
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
            <Button href="/delivery" variant="secondary" className="mt-8">
              <T v={delivery.cta} />
              <ArrowRight size={16} className="flip-rtl" aria-hidden />
            </Button>
          </div>
          <div>
            <p className="text-small mb-4 font-semibold tracking-wide text-ink-500 uppercase">
              <T v={delivery.partnersLabel} />
            </p>
            <PartnerLogos withLines />
          </div>
        </div>
      </Section>

      {/* 7 · Founding Seller Program */}
      <Section labelledBy="founding-title">
        <Card emphasis className="reveal grid gap-8 p-7 md:p-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <p className="eyebrow">
              <T v={founding.eyebrow} />
            </p>
            <h2 id="founding-title" className="h2 mt-4">
              <T v={founding.title} />
            </h2>
            <p className="mt-4 text-ink-500">
              <T v={founding.lead} />
            </p>
            <p className="mt-4 font-semibold text-ink-900">
              <T v={founding.cap} vars={factVars} />
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/founding-seller" size="lg">
                <T v={common.ctaFounding} />
              </Button>
              <Button href="/founding-seller#benefits" size="lg" variant="ghost">
                <T v={founding.cta} />
              </Button>
            </div>
          </div>
          <ul className="space-y-3 self-center">
            {founding.benefits.map((b) => (
              <li key={b.en} className="flex items-center gap-3 rounded-xl bg-ink-50 px-4 py-3.5 font-medium text-ink-800">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                  <Check size={16} strokeWidth={2.5} aria-hidden />
                </span>
                <T v={b} vars={factVars} />
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* 8 · Trust bar */}
      <Section tone="muted" labelledBy="trust-title" className="md:py-16">
        <TrustBar />
      </Section>

      {/* 9 · FAQ */}
      <Section labelledBy="faq-title" narrow>
        <SectionHeading id="faq-title" eyebrow={home.faq.eyebrow} title={home.faq.title} />
        <FAQ items={[faqs.commission, faqs.payoutTiming, faqs.rto, faqs.shipping, faqs.cod, faqs.unsold]} />
      </Section>

      {/* 10 · CTA band */}
      <CTABand source="/" />
    </>
  );
}
