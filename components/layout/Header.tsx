import Link from "next/link";
import { Logo } from "@/components/Logo";
import { T } from "@/components/T";
import { Button } from "@/components/ui/Button";
import { common, nav } from "@/content/site";
import { Container } from "./Container";
import { HeaderShell, NavLink, SellDropdown } from "./HeaderIslands";
import { LangToggle } from "./LangToggle";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <HeaderShell>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2"
      >
        <T v={common.skipToContent} />
      </a>
      <Container className="flex h-16 items-center gap-4 md:h-[72px]">
        <Link href="/" aria-label="AdeelSab home" className="shrink-0">
          <span className="block md:hidden">
            <Logo height={30} priority />
          </span>
          <span className="hidden md:block">
            <Logo height={36} priority />
          </span>
        </Link>

        <nav aria-label="Main" className="ms-6 hidden items-center gap-0.5 whitespace-nowrap xl:flex">
          <SellDropdown label={<T v={nav.sellWithUs} />}>
            {nav.sellMenu.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 transition-colors hover:bg-ink-50">
                <span className="block font-semibold text-ink-900">
                  <T v={item.label} />
                </span>
                <span className="text-small block text-ink-500">
                  <T v={item.desc} />
                </span>
              </Link>
            ))}
          </SellDropdown>
          {nav.main.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-full px-3.5 font-semibold transition-colors hover:text-ink-900"
            >
              <T v={item.label} />
            </NavLink>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2">
          {/* Visibility lives on wrappers: `hidden` on the components would conflict with their own inline-flex. */}
          <div className="hidden sm:block">
            <LangToggle />
          </div>
          <div className="hidden md:block">
            <Button href="/founding-seller">
              <T v={common.ctaFounding} />
            </Button>
          </div>
          <MobileNav />
        </div>
      </Container>
    </HeaderShell>
  );
}
