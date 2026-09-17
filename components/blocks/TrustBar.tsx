import Image from "next/image";
import { Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { T } from "@/components/T";
import { Fact } from "@/components/ui/Fact";
import { IconTile } from "@/components/ui/Card";
import { facts } from "@/content/data/facts";
import { regulatorLogos } from "@/content/data/shipping";
import { home } from "@/content/site";

/** Registered company, registration numbers, address and contact. All values come from facts.ts. */
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
    { tile: iconTile(Building2), label: trust.company, f: facts.legalName },
    { tile: logoTile(secp), label: trust.secp, f: facts.secpNumber },
    { tile: logoTile(fbr), label: trust.ntn, f: facts.ntn },
    { tile: iconTile(MapPin), label: trust.office, f: facts.officeAddress },
    { tile: iconTile(Mail), label: trust.email, f: facts.supportEmail, href: `mailto:${facts.supportEmail.value}` },
    { tile: iconTile(MessageCircle), label: trust.whatsapp, f: facts.whatsappDisplay },
    {
      tile: iconTile(Phone),
      label: trust.phone,
      f: facts.landlineDisplay,
      href: facts.landlineTel.value ? `tel:${facts.landlineTel.value}` : undefined,
    },
  ];

  return (
    <div>
      <div>
        <h2 id="trust-title" className="h3">
          <T v={trust.title} />
        </h2>
        <p className="mt-2 text-ink-500">
          <T v={trust.lead} />
        </p>
        <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
}
