import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Check,
  FileText,
  HandCoins,
  MapPinned,
  Receipt,
  Store,
  Truck,
  User,
  Users,
} from "lucide-react";
import { T } from "@/components/T";
import { Card, IconTile } from "@/components/ui/Card";
import { Table } from "@/components/ui/Table";
import { TodoMark } from "@/components/ui/Fact";
import { Section, SectionHeading } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { CoverageMap } from "@/components/blocks/CoverageMap";
import { PartnerLogos } from "@/components/blocks/PartnerLogos";
import { RateCard } from "@/components/blocks/RateCard";
import { RtoTable } from "@/components/blocks/RtoTable";
import { HowItWorks } from "@/components/blocks/HowItWorks";
import { FAQ } from "@/components/blocks/FAQ";
import { CTABand } from "@/components/blocks/CTABand";
import { timelines, zones } from "@/content/data/shipping";
import { delivery as d, faqs, nav, photos } from "@/content/site";
import { Photo } from "@/components/ui/Photo";
import { factVars } from "@/lib/facts";
import { pageMeta } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...d.meta, path: "/delivery" });

const whoIcons = [User, Store, Users];
const codIcons = [MapPinned, Banknote, Receipt];

function GuideLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-700 hover:underline"
    >
      <FileText size={18} strokeWidth={1.75} aria-hidden />
      {children}
      <ArrowRight size={16} className="flip-rtl" aria-hidden />
    </Link>
  );
}

export default function DeliveryPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: nav.main[0].label, href: "/delivery" }]}
        eyebrow={d.hero.eyebrow}
        title={d.hero.title}
        lead={d.hero.lead}
        actions={
          <nav aria-label="On this page" className="flex flex-wrap gap-2">
            {d.hero.jump.map((j) => (
              <a
                key={j.href}
                href={j.href}
                className="inline-flex min-h-11 items-center rounded-full border border-ink-200 bg-white px-4 text-[15px] font-semibold text-ink-700 hover:border-ink-400 hover:text-ink-900"
              >
                <T v={j.label} />
              </a>
            ))}
          </nav>
        }
        aside={<Photo photo={photos.rider} priority className="aspect-[4/3]" />}
      />

      {/* Coverage */}
      <Section id="coverage" labelledBy="coverage-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading id="coverage-title" eyebrow={d.coverage.eyebrow} title={d.coverage.title} />
            <p className="mt-4 text-lg text-ink-700">
              <T v={d.coverage.body} />
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <Truck size={22} strokeWidth={1.75} className="mt-1 shrink-0 text-brand-500" aria-hidden />
                <span className="text-ink-700">
                  <T v={zones[0].label} /> — <T v={zones[0].note} />
                </span>
              </li>
              <li className="flex gap-3">
                <MapPinned size={22} strokeWidth={1.75} className="mt-1 shrink-0 text-brand-500" aria-hidden />
                <span className="text-ink-700">
                  <T v={zones[2].label} /> — <T v={zones[2].note} />
                </span>
              </li>
            </ul>
          </div>
          <CoverageMap />
        </div>
      </Section>

      {/* Delivery times */}
      <Section id="times" tone="muted" labelledBy="times-title">
        <SectionHeading id="times-title" eyebrow={d.times.eyebrow} title={d.times.title} />
        <Table
          className="mt-8"
          head={[
            <T key="z" v={d.times.zone} />,
            <T key="c" v={d.times.carrier} />,
            <T key="t" v={d.times.time} />,
            <T key="cod" v={d.times.cod} />,
          ]}
        >
          {zones.map((z) => (
            <tr key={z.key}>
              <th scope="row" className="text-start font-semibold text-ink-900">
                <T v={z.label} />
              </th>
              <td className="text-ink-700">
                <T v={z.note} />
              </td>
              <td className="tabular">{timelines[z.key] ?? <TodoMark label={`Delivery time — ${z.label.en}`} />}</td>
              <td>
                <Check size={20} className="text-success" aria-label="Available" />
              </td>
            </tr>
          ))}
        </Table>
        <p className="text-small mt-3 text-ink-500">
          <T v={d.times.note} />
        </p>
      </Section>

      {/* Partners */}
      <Section labelledBy="partners-title">
        <SectionHeading id="partners-title" eyebrow={d.partners.eyebrow} title={d.partners.title} />
        <PartnerLogos withLines columns={4} className="mt-8" />
      </Section>

      {/* Rate card */}
      <Section id="rates" tone="muted" labelledBy="rates-title">
        <SectionHeading
          id="rates-title"
          eyebrow={d.rates.eyebrow}
          title={d.rates.title}
          lead={d.rates.lead}
          vars={factVars}
        />
        <div className="mt-8">
          <RateCard />
        </div>
        <div className="mt-6 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="text-ink-700">
              <T v={d.rates.note} />
            </p>
            <GuideLink href="/seller-hub/packaging-guide">
              <T v={d.rates.guide} />
            </GuideLink>
          </div>
          <Photo photo={photos.packaging} className="aspect-[16/9]" sizes="(min-width: 768px) 45vw, 100vw" />
        </div>
      </Section>

      {/* Who pays shipping */}
      <Section labelledBy="whopays-title">
        <SectionHeading id="whopays-title" eyebrow={d.whoPays.eyebrow} title={d.whoPays.title} />
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {d.whoPays.options.map((o, i) => {
            const Icon = whoIcons[i];
            return (
              <Card as="li" key={o.title.en} className="reveal">
                <IconTile>
                  <Icon size={22} strokeWidth={1.75} />
                </IconTile>
                <h3 className="h4 mt-4">
                  <T v={o.title} />
                </h3>
                <p className="mt-2 text-[15px] text-ink-500">
                  <T v={o.body} />
                </p>
              </Card>
            );
          })}
        </ul>
      </Section>

      {/* COD */}
      <Section id="cod" tone="muted" labelledBy="cod-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <div>
            <HandCoins size={32} strokeWidth={1.75} className="text-brand-500" aria-hidden />
            <SectionHeading id="cod-title" eyebrow={d.cod.eyebrow} title={d.cod.title} className="mt-4" />
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {d.cod.points.map((p, i) => {
              const Icon = codIcons[i];
              return (
                <li key={p.title.en} className="reveal rounded-card border border-ink-200 bg-white p-5">
                  <Icon size={22} strokeWidth={1.75} className="text-brand-500" aria-hidden />
                  <p className="mt-3 font-semibold text-ink-900">
                    <T v={p.title} />
                  </p>
                  <p className="text-small mt-1 text-ink-500">
                    <T v={p.body} vars={factVars} />
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      {/* RTO — stated openly */}
      <Section id="rto" labelledBy="rto-title">
        <SectionHeading id="rto-title" eyebrow={d.rto.eyebrow} title={d.rto.title} lead={d.rto.lead} />
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-card border border-ink-200 border-t-4 border-t-warning p-6 md:p-8">
            <h3 className="h4">
              <T v={d.rto.whenTitle} />
            </h3>
            <ul className="mt-5 space-y-3">
              {d.rto.when.map((w) => (
                <li key={w.en} className="flex gap-3 text-ink-700">
                  <span className="mt-2.5 size-2 shrink-0 rounded-full bg-warning" aria-hidden />
                  <span>
                    <T v={w} vars={factVars} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <h3 className="h4">
              <T v={d.rto.chargeTitle} />
            </h3>
            <p className="mt-2 mb-5 text-ink-700">
              <T v={d.rto.chargeBody} />
            </p>
            <RtoTable />
            <GuideLink href="/seller-hub/reducing-rto-in-cod">
              <T v={d.rto.guide} />
            </GuideLink>
          </div>
        </div>
      </Section>

      {/* Return pickup */}
      <Section id="returns" tone="muted" labelledBy="returns-title">
        <SectionHeading id="returns-title" eyebrow={d.returns.eyebrow} title={d.returns.title} lead={d.returns.lead} />
        <HowItWorks steps={d.returns.steps} vars={factVars} />
        <GuideLink href="/seller-hub/returns-and-disputes">
          <T v={d.returns.disputes} />
        </GuideLink>
      </Section>

      <Section labelledBy="dfaq-title" narrow>
        <h2 id="dfaq-title" className="h2">
          <T v={d.faqTitle} />
        </h2>
        <FAQ items={[faqs.shipping, faqs.cod, faqs.rto, faqs.payoutTiming]} />
      </Section>

      <CTABand source="/delivery" title={d.ctaTitle} />
    </>
  );
}
