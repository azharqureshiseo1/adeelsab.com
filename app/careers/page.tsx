import Image from "next/image";
import { Briefcase, Heart, Languages, Store } from "lucide-react";
import { T } from "@/components/T";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, IconTile } from "@/components/ui/Card";
import { TodoMark } from "@/components/ui/Fact";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/PageHero";
import { CTABand } from "@/components/blocks/CTABand";
import { careersEmail, roles } from "@/content/data/roles";
import { careers as c } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { whatsappLink } from "@/lib/utils";

export const dynamic = "force-static";

export const metadata = pageMeta({ ...c.meta, path: "/careers" });

const cultureIcons = [Store, Heart, Briefcase, Languages];

function ApplyButton({ subject }: { subject: string }) {
  if (careersEmail) {
    return (
      <Button href={`mailto:${careersEmail}?subject=${encodeURIComponent(subject)}`} variant="secondary">
        <T v={c.roles.sendCv} />
      </Button>
    );
  }
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button href={whatsappLink(`Assalam o Alaikum, I'd like to apply: ${subject}`)} variant="secondary">
        <WhatsAppGlyph className="size-5 text-success" />
        <T v={c.roles.sendCv} />
      </Button>
      <TodoMark label="Careers email address" />
    </div>
  );
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: c.hero.eyebrow, href: "/careers" }]}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        lead={c.hero.lead}
      />

      <Section labelledBy="culture-title">
        <h2 id="culture-title" className="h2">
          <T v={c.culture.title} />
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.culture.items.map((item, i) => {
            const Icon = cultureIcons[i];
            return (
              <li key={item.title.en} className="reveal">
                <IconTile>
                  <Icon size={22} strokeWidth={1.75} />
                </IconTile>
                <h3 className="h4 mt-4">
                  <T v={item.title} />
                </h3>
                <p className="mt-2 text-[15px] text-ink-500">
                  <T v={item.body} />
                </p>
              </li>
            );
          })}
        </ul>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {["/images/placeholder-team.webp", "/images/placeholder-office.webp"].map((src) => (
            <Image
              key={src}
              src={src}
              alt={c.roles.photosAlt.en}
              width={1200}
              height={800}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="h-auto w-full rounded-card border border-ink-200 object-cover"
            />
          ))}
        </div>
      </Section>

      <Section tone="muted" labelledBy="roles-title">
        <h2 id="roles-title" className="h2">
          <T v={c.roles.title} />
        </h2>
        {roles.length > 0 ? (
          <ul className="mt-8 space-y-4">
            {roles.map((role) => (
              <Card
                as="li"
                key={role.slug}
                className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="h4">
                    <T v={role.title} />
                  </h3>
                  <p className="mt-2 flex flex-wrap gap-2">
                    <Badge>
                      <T v={role.team} />
                    </Badge>
                    <Badge>
                      <T v={role.location} />
                    </Badge>
                    <Badge>
                      <T v={role.type} />
                    </Badge>
                  </p>
                  <p className="mt-3 text-[15px] text-ink-500">
                    <T v={role.summary} />
                  </p>
                </div>
                <ApplyButton subject={role.title.en} />
              </Card>
            ))}
          </ul>
        ) : (
          <Card className="mt-8 max-w-2xl">
            <h3 className="h4">
              <T v={c.roles.none} />
            </h3>
            <p className="mt-2 text-ink-700">
              <T v={c.roles.noneBody} />
            </p>
            <div className="mt-6">
              <ApplyButton subject="General application" />
            </div>
          </Card>
        )}
      </Section>

      <CTABand form={false} source="/careers" />
    </>
  );
}
