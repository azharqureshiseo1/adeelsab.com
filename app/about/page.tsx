import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { T } from "@/components/T";
import { Card } from "@/components/ui/Card";
import { Fact } from "@/components/ui/Fact";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { CTABand } from "@/components/blocks/CTABand";
import { facts } from "@/content/data/facts";
import { about as a, footer, photos } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...a.meta, path: "/about" });

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: a.hero.eyebrow, href: "/about" }]}
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        lead={a.hero.lead}
      />

      <Section labelledBy="story-title">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h2 id="story-title" className="h2">
              <T v={a.story.title} />
            </h2>
            {a.story.body.map((p) => (
              <p key={p.en} className="mt-5 text-lg text-ink-700">
                <T v={p} />
              </p>
            ))}
          </div>
          <Card emphasis className="self-start">
            <p className="text-small font-semibold tracking-wide text-brand-700 uppercase">
              <T v={a.mission.title} />
            </p>
            <p className="mt-3 text-2xl leading-snug font-bold text-ink-900">
              <T v={a.mission.body} />
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="muted" labelledBy="building-title">
        <h2 id="building-title" className="h2">
          <T v={a.building.title} />
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {a.building.items.map((item) => (
            <Card as="li" key={item.title.en} className="reveal">
              <h3 className="h4">
                <T v={item.title} />
              </h3>
              <p className="mt-2 text-[15px] text-ink-500">
                <T v={item.body} />
              </p>
            </Card>
          ))}
        </ul>
        <h2 className="h3 mt-14">
          <T v={a.values.title} />
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {a.values.items.map((v) => (
            <li key={v.en} className="flex items-center gap-3 font-medium text-ink-800">
              <Check size={20} className="shrink-0 text-brand-500" aria-hidden />
              <T v={v} />
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="team-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
          <div>
            <h2 id="team-title" className="h2">
              <T v={a.team.title} />
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              <T v={a.team.lead} />
            </p>
            <div className="mt-8 rounded-card border border-ink-200 bg-ink-50 p-5">
              <p className="font-semibold text-ink-900">
                <Fact f={facts.legalName} />
              </p>
              <p className="text-small mt-1 text-ink-500">
                <T
                  v={footer.registration}
                  vars={{ secp: <Fact f={facts.secpNumber} />, ntn: <Fact f={facts.ntn} /> }}
                />
              </p>
              <address className="text-small mt-1 text-ink-500 not-italic">
                <Fact f={facts.officeAddress} />
              </address>
            </div>
            <Link
              href="/careers"
              className="mt-8 inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand-700"
            >
              <T v={a.team.careers} />
              <ArrowRight size={16} className="flip-rtl" aria-hidden />
            </Link>
          </div>
          <Image
            src={photos.team.src}
            alt={photos.team.alt.en}
            width={photos.team.width}
            height={photos.team.height}
            sizes="(min-width: 1024px) 600px, 100vw"
            className="h-auto w-full rounded-card border border-ink-200 object-cover"
          />
        </div>
      </Section>

      <CTABand source="/about" />
    </>
  );
}
