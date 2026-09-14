import Image from "next/image";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { T } from "@/components/T";
import { Fact } from "@/components/ui/Fact";
import { IconTile } from "@/components/ui/Card";
import { facts } from "@/content/data/facts";
import { regulatorLogos } from "@/content/data/shipping";
import { home } from "@/content/site";

/** Registration details, address, contact and founder. All values come from facts.ts (TODO until confirmed). */
export function TrustBar() {
  const { trust } = home;
  const [secp, fbr] = regulatorLogos;

  const logoTile = (logo: (typeof regulatorLogos)[number]) => (
    <span className="inline-flex h-11 min-w-11 shrink-0 items-center justify-center rounded-xl border border-ink-200 bg-white px-1.5">
      <Image
        src={logo.src}
        alt={`${logo.name} logo`}
        width={logo.width}
        height={logo.height}
        className="h-8 w-auto max-w-[84px] object-contain"
      />
    </span>
  );
  const iconTile = (Icon: typeof Mail) => (
    <IconTile className="size-11">
      <Icon size={22} strokeWidth={1.75} />
    </IconTile>
  );

  const rows = [
    { tile: logoTile(secp), label: trust.secp, f: facts.secpNumber },
    { tile: logoTile(fbr), label: trust.ntn, f: facts.ntn },
    { tile: iconTile(MapPin), label: trust.office, f: facts.officeAddress },
    { tile: iconTile(Mail), label: trust.email, f: facts.supportEmail, href: `mailto:${facts.supportEmail.value}` },
    { tile: iconTile(MessageCircle), label: trust.whatsapp, f: facts.whatsappDisplay },
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
          {rows.map(({ tile, label, f, href }) => (
            <div key={label.en} className="flex items-start gap-4">
              {tile}
              <div className="min-w-0">
                <dt className="text-small text-ink-500">
                  <T v={label} />
                </dt>
                <dd className="mt-0.5 font-semibold break-words text-ink-900">
                  {href && f.value ? (
                    <a href={href} className="latin text-brand-700 hover:underline">
                      {f.value}
                    </a>
                  ) : (
                    <Fact f={f} />
                  )}
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
