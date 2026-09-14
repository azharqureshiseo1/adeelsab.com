import Link from "next/link";
import { Logo } from "@/components/Logo";
import { T } from "@/components/T";
import { Fact } from "@/components/ui/Fact";
import { facts } from "@/content/data/facts";
import { footer } from "@/content/site";
import { Container } from "./Container";
import { LangToggle } from "./LangToggle";

const socials = [
  { name: "Facebook", f: facts.facebook },
  { name: "Instagram", f: facts.instagram },
  { name: "TikTok", f: facts.tiktok },
  { name: "LinkedIn", f: facts.linkedin },
  { name: "YouTube", f: facts.youtube },
];

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
            <div className="mt-6">
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

        <div className="mt-12 grid gap-6 border-t border-ink-800 pt-8 md:grid-cols-2">
          <div className="text-small space-y-2 text-ink-400">
            <p>
              <T v={footer.registration} vars={{ secp: <Fact f={facts.secpNumber} />, ntn: <Fact f={facts.ntn} /> }} />
            </p>
            <p>
              <T v={footer.address} vars={{ address: <Fact f={facts.officeAddress} /> }} />
            </p>
          </div>
          <div className="text-small md:text-end">
            <p className="font-semibold text-white">
              <T v={footer.follow} />
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
              {socials.map((s) =>
                s.f.value ? (
                  <li key={s.name}>
                    <a
                      href={s.f.value}
                      className="text-ink-400 hover:text-white"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {s.name}
                    </a>
                  </li>
                ) : (
                  <li key={s.name} className="text-ink-400">
                    {s.name} <Fact f={s.f} className="text-[10px]" />
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="text-small mt-8 flex flex-col gap-4 border-t border-ink-800 pt-6 text-ink-400 md:flex-row md:items-center md:justify-between">
          <p>
            © <span className="latin">{year}</span> AdeelSab. <T v={footer.rights} />{" "}
            <span className="text-ink-200">
              <T v={footer.madeIn} />
            </span>
          </p>
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
