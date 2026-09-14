import { Briefcase, Clock, LifeBuoy, Mail, MapPin } from "lucide-react";
import { T } from "@/components/T";
import { Button } from "@/components/ui/Button";
import { Card, IconTile } from "@/components/ui/Card";
import { Fact } from "@/components/ui/Fact";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { CTABand } from "@/components/blocks/CTABand";
import { facts } from "@/content/data/facts";
import { contact as c } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { whatsappLink } from "@/lib/utils";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...c.meta, path: "/contact" });

const routeMeta = {
  support: { icon: LifeBuoy, email: facts.supportEmail, prefill: "Assalam o Alaikum, I need seller support." },
  business: { icon: Briefcase, email: facts.businessEmail, prefill: "Hello, I have a business enquiry for AdeelSab." },
} as const;

export default function ContactPage() {
  return (
    <>
      <PageHero crumbs={[{ label: c.hero.eyebrow, href: "/contact" }]} eyebrow={c.hero.eyebrow} title={c.hero.title} lead={c.hero.lead} />

      <Section labelledBy="contact-title">
        <h2 id="contact-title" className="sr-only">
          <T v={c.hero.eyebrow} />
        </h2>

        {/* Primary: WhatsApp */}
        <Card emphasis className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-success text-white">
              <WhatsAppGlyph className="size-8" />
            </span>
            <div>
              <h3 className="h3">
                <T v={c.whatsapp.title} />
              </h3>
              <p className="mt-1 text-ink-700">
                <T v={c.whatsapp.body} />
              </p>
              <p className="mt-1 font-semibold text-ink-900">
                <Fact f={facts.whatsappDisplay} />
              </p>
            </div>
          </div>
          <Button href={whatsappLink("Assalam o Alaikum AdeelSab")} variant="whatsapp" size="lg">
            <WhatsAppGlyph className="size-5" />
            <T v={c.whatsapp.cta} />
          </Button>
        </Card>

        {/* Routing */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {c.routes.map((route) => {
            const meta = routeMeta[route.key as keyof typeof routeMeta];
            const Icon = meta.icon;
            return (
              <Card key={route.key}>
                <IconTile>
                  <Icon size={22} strokeWidth={1.75} />
                </IconTile>
                <h3 className="h4 mt-4">
                  <T v={route.title} />
                </h3>
                <p className="mt-2 text-[15px] text-ink-500">
                  <T v={route.body} />
                </p>
                <p className="mt-4 flex flex-wrap items-center gap-2 text-ink-800">
                  <Mail size={18} strokeWidth={1.75} className="text-brand-500" aria-hidden />
                  <span className="text-small text-ink-500">
                    <T v={c.emailLabel} />:
                  </span>
                  {meta.email.value ? (
                    <a href={`mailto:${meta.email.value}`} className="latin font-semibold text-brand-700 hover:underline">
                      {meta.email.value}
                    </a>
                  ) : (
                    <Fact f={meta.email} />
                  )}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section tone="muted" labelledBy="office-title">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <div className="space-y-6">
            <div className="flex gap-3">
              <MapPin size={24} strokeWidth={1.75} className="mt-1 shrink-0 text-brand-500" aria-hidden />
              <div>
                <h2 id="office-title" className="h4">
                  <T v={c.office.title} />
                </h2>
                <address className="mt-1 text-ink-700 not-italic">
                  <Fact f={facts.officeAddress} />
                </address>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock size={24} strokeWidth={1.75} className="mt-1 shrink-0 text-brand-500" aria-hidden />
              <div>
                <h2 className="h4">
                  <T v={c.office.hours} />
                </h2>
                <p className="mt-1 text-ink-700">
                  <Fact f={facts.officeHours} />
                </p>
                <p className="text-small text-ink-500">
                  <T v={c.office.tz} />
                </p>
              </div>
            </div>
          </div>
          {/* Map placeholder — no third-party embed until the address is confirmed (keeps pages fast and private). */}
          <div
            role="img"
            aria-label={c.office.mapAlt.en}
            className="flex min-h-64 items-center justify-center rounded-card border border-dashed border-ink-400 bg-white p-8 text-center"
          >
            <p className="max-w-xs text-ink-500">
              <MapPin size={32} strokeWidth={1.5} className="mx-auto mb-3 text-ink-400" aria-hidden />
              <T v={c.office.mapPlaceholder} />
            </p>
          </div>
        </div>
      </Section>

      <CTABand source="/contact" />
    </>
  );
}
