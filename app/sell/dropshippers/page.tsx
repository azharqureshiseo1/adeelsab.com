import Link from "next/link";
import { ArrowRight, Boxes, PackageCheck, RefreshCw, ShoppingBag } from "lucide-react";
import { T } from "@/components/T";
import { Badge } from "@/components/ui/Badge";
import { Card, IconTile } from "@/components/ui/Card";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { WaitlistForm } from "@/components/blocks/WaitlistForm";
import { CTABand } from "@/components/blocks/CTABand";
import { common, dropshippers as d, nav } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...d.meta, path: "/sell/dropshippers" });

const icons = [RefreshCw, PackageCheck, Boxes, ShoppingBag];

/** Phase 2 stub: what's coming + early-access capture. No API docs in v1. */
export default function DropshippersPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: nav.sellWithUs, href: "/sell" },
          { label: nav.sellMenu[2].label, href: "/sell/dropshippers" },
        ]}
        eyebrow={d.hero.eyebrow}
        badge={
          <Badge tone="neutral" dot>
            <T v={common.badgePhase2} />
          </Badge>
        }
        title={d.hero.title}
        lead={d.hero.lead}
      />

      <Section labelledBy="coming-title">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <h2 id="coming-title" className="h2">
              <T v={d.featuresTitle} />
            </h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {d.features.map((f, i) => {
                const Icon = icons[i];
                return (
                  <Card as="li" key={f.title.en} className="reveal p-5 md:p-6">
                    <IconTile>
                      <Icon size={22} strokeWidth={1.75} />
                    </IconTile>
                    <h3 className="h4 mt-4">
                      <T v={f.title} />
                    </h3>
                    <p className="mt-2 text-[15px] text-ink-500">
                      <T v={f.body} />
                    </p>
                  </Card>
                );
              })}
            </ul>
            <p className="mt-8 text-ink-700">
              <T v={d.meanwhile} />{" "}
              <Link href="/sell/local-sellers" className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline">
                <T v={d.meanwhileCta} />
                <ArrowRight size={16} className="flip-rtl" aria-hidden />
              </Link>
            </p>
          </div>
          <div id="early-access">
            <h2 className="h3">
              <T v={d.formTitle} />
            </h2>
            <p className="mt-2 mb-5 text-ink-500">
              <T v={d.formLead} />
            </p>
            <div className="rounded-[20px] border border-ink-200 bg-ink-50 p-2">
              <WaitlistForm audience="dropshipper" source="/sell/dropshippers" compact />
            </div>
          </div>
        </div>
      </Section>

      <CTABand form={false} source="/sell/dropshippers" href="/sell/local-sellers" label={d.meanwhileCta} />
    </>
  );
}
