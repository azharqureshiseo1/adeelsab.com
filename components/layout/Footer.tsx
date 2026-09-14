import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { T } from "@/components/T";
import { Fact } from "@/components/ui/Fact";
import { FacebookIcon, InstagramIcon, ThreadsIcon, TikTokIcon } from "@/components/ui/SocialIcons";
import { facts } from "@/content/data/facts";
import { ownCourier, partners, paymentLogos, regulatorLogos } from "@/content/data/shipping";
import { footer } from "@/content/site";
import { Container } from "./Container";
import { LangToggle } from "./LangToggle";

const socials = [
  { name: "Facebook", f: facts.facebook, Icon: FacebookIcon },
  { name: "Instagram", f: facts.instagram, Icon: InstagramIcon },
  { name: "TikTok", f: facts.tiktok, Icon: TikTokIcon },
  { name: "Threads", f: facts.threads, Icon: ThreadsIcon },
];

/** A white "chip" so full-colour partner logos stay legible on the dark footer. */
function LogoChip({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <li className="flex h-12 items-center rounded-lg bg-white px-3">
      <Image src={src} alt={alt} width={width} height={height} className="h-7 w-auto max-w-[88px] object-contain" />
    </li>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-900 text-ink-200">
      <Container className="py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo variant="orange" height={36} />
            <p className="mt-5 max-w-sm text-ink-400">
              <T v={footer.tagline} />
            </p>
            <ul className="mt-6 space-y-2 text-[15px]">
              <li className="flex gap-2.5">
                <MapPin size={18} strokeWidth={1.75} className="mt-1 shrink-0 text-brand-400" aria-hidden />
                <address className="text-ink-200 not-italic">
                  <Fact f={facts.officeAddress} />
                </address>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={18} strokeWidth={1.75} className="shrink-0 text-brand-400" aria-hidden />
                <span className="sr-only">
                  <T v={footer.email} />
                </span>
                {facts.supportEmail.value ? (
                  <a href={`mailto:${facts.supportEmail.value}`} className="latin text-ink-200 hover:text-white">
                    {facts.supportEmail.value}
                  </a>
                ) : (
                  <Fact f={facts.supportEmail} />
                )}
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ul className="flex gap-2" aria-label={footer.follow.en}>
                {socials.map(({ name, f, Icon }) =>
                  f.value ? (
                    <li key={name}>
                      <a
                        href={f.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`AdeelSab on ${name}`}
                        className="inline-flex size-11 items-center justify-center rounded-full border border-ink-700 text-ink-200 transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                      >
                        <Icon className="size-5" />
                      </a>
                    </li>
                  ) : null,
                )}
              </ul>
              <LangToggle dark />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {footer.columns.map((col) => (
              <div key={col.title.en}>
                <h2 className="text-small font-semibold tracking-wide text-white uppercase">
                  <T v={col.title} />
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-ink-400 transition-colors hover:text-white">
                        <T v={link.label} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Registration, delivery and payment logos */}
        <div className="mt-12 grid gap-8 border-t border-ink-800 pt-8 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-12">
          <div>
            <p className="text-small font-semibold text-white">
              <T v={footer.registeredWith} />
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {regulatorLogos.map((r) => (
                <LogoChip key={r.name} src={r.src} alt={`${r.name} logo`} width={r.width} height={r.height} />
              ))}
            </ul>
            <p className="text-small mt-3 text-ink-400">
              <T v={footer.registration} vars={{ secp: <Fact f={facts.secpNumber} />, ntn: <Fact f={facts.ntn} /> }} />
            </p>
          </div>
          <div>
            <p className="text-small font-semibold text-white">
              <T v={footer.deliveryBy} />
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              <LogoChip
                src={ownCourier.logo.src}
                alt={`${ownCourier.name} logo`}
                width={ownCourier.logo.width}
                height={ownCourier.logo.height}
              />
              {partners.map((p) => (
                <LogoChip
                  key={p.slug}
                  src={p.logo.src}
                  alt={`${p.name} logo`}
                  width={p.logo.width}
                  height={p.logo.height}
                />
              ))}
            </ul>
          </div>
          <div>
            <p className="text-small font-semibold text-white">
              <T v={footer.paymentsBy} />
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {paymentLogos.map((p) => (
                <LogoChip key={p.name} src={p.src} alt={`${p.name} logo`} width={p.width} height={p.height} />
              ))}
            </ul>
          </div>
        </div>

        <div className="text-small mt-8 flex flex-col gap-4 border-t border-ink-800 pt-6 text-ink-400 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <p>
              © <span className="latin">{year}</span> AdeelSab. <T v={footer.rights} />
            </p>
            <p>
              <T v={footer.developedBy} />{" "}
              <a
                href={footer.developer.url}
                target="_blank"
                rel="noopener"
                className="latin font-semibold text-ink-200 underline-offset-2 hover:text-white hover:underline"
              >
                {footer.developer.name}
              </a>
              <span className="mx-2 text-ink-700" aria-hidden>
                ·
              </span>
              <T v={footer.madeIn} />
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {footer.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  <T v={link.label} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
