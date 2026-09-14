import Image from "next/image";
import { BadgeCheck, Building2, MapPin, MessageCircle } from "lucide-react";
import { T } from "@/components/T";
import { Fact } from "@/components/ui/Fact";
import { IconTile } from "@/components/ui/Card";
import { facts } from "@/content/data/facts";
import { home } from "@/content/site";

/** Registration details, address, WhatsApp and founder. All values come from facts.ts (TODO until confirmed). */
export function TrustBar() {
  const { trust } = home;
  const rows = [
    { icon: BadgeCheck, label: trust.secp, f: facts.secpNumber },
    { icon: Building2, label: trust.ntn, f: facts.ntn },
    { icon: MapPin, label: trust.office, f: facts.officeAddress },
    { icon: MessageCircle, label: trust.whatsapp, f: facts.whatsappDisplay },
  ];
  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
      <div>
        <h2 id="trust-title" className="h3">
          <T v={trust.title} />
        </h2>
        <p className="mt-2 text-ink-500">
          <T v={trust.lead} />
        </p>
        <dl className="mt-8 grid gap-5 sm:grid-cols-2">
          {rows.map(({ icon: Icon, label, f }) => (
            <div key={label.en} className="flex items-start gap-4">
              <IconTile className="size-11">
                <Icon size={22} strokeWidth={1.75} />
              </IconTile>
              <div>
                <dt className="text-small text-ink-500">
                  <T v={label} />
                </dt>
                <dd className="mt-0.5 font-semibold text-ink-900">
                  <Fact f={f} />
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
      <figure className="flex items-center gap-4 rounded-card border border-ink-200 bg-white p-5 shadow-soft">
        <Image
          src="/images/placeholder-founder.webp"
          alt={trust.founderAlt.en}
          width={96}
          height={96}
          className="size-20 shrink-0 rounded-full object-cover"
        />
        <figcaption>
          <p className="font-semibold text-ink-900">
            <Fact f={facts.founderName} />
          </p>
          <p className="text-small text-ink-500">
            <T v={trust.founderRole} />
          </p>
          <p className="text-small mt-2 text-ink-700">
            <Fact f={facts.founderBio} />
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
