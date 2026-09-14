import { ArrowRight, Check, Lock, Store, Truck, Users } from "lucide-react";
import { T } from "@/components/T";
import { Button } from "@/components/ui/Button";
import { Card, IconTile } from "@/components/ui/Card";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { CTABand } from "@/components/blocks/CTABand";
import { resellerListings as rl } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...rl.meta, path: "/reseller-listings" });

const stepIcons = [Store, Users, Truck];

export default function ResellerListingsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: rl.hero.eyebrow, href: "/reseller-listings" }]}
        eyebrow={rl.hero.eyebrow}
        title={rl.hero.title}
        lead={rl.hero.lead}
      />

      {/* 3-step diagram */}
      <Section labelledBy="rlsteps-title">
        <h2 id="rlsteps-title" className="h2">
          <T v={rl.stepsTitle} />
        </h2>
        <ol className="mt-10 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {rl.steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <li key={s.title.en} className="contents">
                <Card className="reveal flex flex-col">
                  <div className="flex items-center gap-3">
                    <IconTile>
                      <Icon size={24} strokeWidth={1.75} />
                    </IconTile>
                    <span className="latin text-sm font-bold text-brand-700">0{i + 1}</span>
                  </div>
                  <h3 className="h4 mt-4">
                    <T v={s.title} />
                  </h3>
                  <p className="mt-2 text-[15px] text-ink-500">
                    <T v={s.body} />
                  </p>
                </Card>
                {i < rl.steps.length - 1 && (
                  <span aria-hidden className="flex items-center justify-center text-ink-400">
                    <ArrowRight size={28} className="flip-rtl rotate-90 lg:rotate-0" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
        <div className="mt-10 flex gap-4 rounded-card border border-ink-200 bg-ink-50 p-6">
          <Lock size={26} strokeWidth={1.75} className="shrink-0 text-brand-500" aria-hidden />
          <div>
            <p className="font-semibold text-ink-900">
              <T v={rl.consent.title} />
            </p>
            <p className="mt-1 text-ink-700">
              <T v={rl.consent.body} />
            </p>
          </div>
        </div>
      </Section>

      {/* Both audiences side by side */}
      <Section tone="muted" labelledBy="rlsides-title">
        <h2 id="rlsides-title" className="sr-only">
          <T v={rl.hero.eyebrow} />
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { side: rl.forSellers, Icon: Store, href: "/sell/local-sellers" },
            { side: rl.forResellers, Icon: Users, href: "/sell/resellers" },
          ].map(({ side, Icon, href }, i) => (
            <Card key={side.title.en} emphasis={i === 0} className="reveal flex flex-col">
              <div className="flex items-center gap-3">
                <IconTile>
                  <Icon size={24} strokeWidth={1.75} />
                </IconTile>
                <h3 className="h3">
                  <T v={side.title} />
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {side.points.map((pt) => (
                  <li key={pt.en} className="flex gap-3 text-ink-700">
                    <Check size={20} className="mt-1 shrink-0 text-brand-500" aria-hidden />
                    <T v={pt} />
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button href={href} variant={i === 0 ? "primary" : "secondary"}>
                  <T v={side.cta} />
                  <ArrowRight size={16} className="flip-rtl" aria-hidden />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CTABand source="/reseller-listings" />
    </>
  );
}
