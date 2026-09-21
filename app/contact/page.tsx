import { Briefcase, Clock, LifeBuoy, Mail, MapPin, Phone } from "lucide-react";
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

/** Google Maps embed for the office (ADEELSAB.PK pickup and dropout point, Al Faisal Town). */
const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.1537081670517!2d74.4108931!3d31.547396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919053bea205b7d%3A0x3c2e87e0f5f20456!2sADEELSAB.PK%20PICKUP%20%26%20DROPOUT%20POINT!5e0!3m2!1sen!2s!4v1790015155316!5m2!1sen!2s";
/** Same coordinates as the embed, in Google's documented search-URL format. */
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=31.547396,74.4108931";

const routeMeta = {
  support: { icon: LifeBuoy, email: facts.supportEmail, prefill: "Assalam o Alaikum, I need seller support." },
  business: { icon: Briefcase, email: facts.businessEmail, prefill: "Hello, I have a business enquiry for AdeelSab." },
} as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: c.hero.eyebrow, href: "/contact" }]}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        lead={c.hero.lead}
      />

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

        {/* Landline — sellers and vendors only */}
        <Card className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <IconTile>
              <Phone size={22} strokeWidth={1.75} />
            </IconTile>
            <div>
              <h3 className="h4">
                <T v={c.phone.title} />
              </h3>
              <p className="mt-1 text-[15px] text-ink-500">
                <T v={c.phone.body} />
              </p>
            </div>
          </div>
          {facts.landlineTel.value ? (
            <a
              href={`tel:${facts.landlineTel.value}`}
              className="latin tabular shrink-0 text-lg font-semibold text-brand-700 hover:underline"
            >
              {facts.landlineDisplay.value}
            </a>
          ) : (
            <Fact f={facts.landlineDisplay} />
          )}
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
                    <a
                      href={`mailto:${meta.email.value}`}
                      className="latin font-semibold text-brand-700 hover:underline"
                    >
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
          {/* Google Maps embed. `loading="lazy"` keeps it off the critical path, so the page
              still renders fast even though this is a third-party frame. */}
          <div className="overflow-hidden rounded-card border border-ink-200 bg-white">
            <iframe
              src={MAP_EMBED_SRC}
              title={c.office.mapAlt.en}
              className="block h-full min-h-72 w-full lg:min-h-[22rem]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="text-small text-ink-500 lg:col-start-2">
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline"
            >
              <MapPin size={16} strokeWidth={1.75} aria-hidden />
              <T v={c.office.directions} />
            </a>
          </p>
        </div>
      </Section>

      <CTABand source="/contact" />
    </>
  );
}
