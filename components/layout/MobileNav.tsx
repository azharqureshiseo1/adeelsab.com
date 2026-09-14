import Link from "next/link";
import { Logo } from "@/components/Logo";
import { T } from "@/components/T";
import { Button } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";
import { common, nav } from "@/content/site";
import { whatsappLink } from "@/lib/utils";
import { MobileDrawer } from "./HeaderIslands";
import { LangToggle } from "./LangToggle";

export function MobileNav() {
  return (
    <MobileDrawer
      labels={{ open: nav.openMenu, close: nav.closeMenu }}
      logo={<Logo height={30} />}
      footer={
        <>
          <LangToggle className="w-full justify-center" />
          <Button href="/founding-seller" size="lg" className="w-full">
            <T v={common.ctaFounding} />
          </Button>
          <Button href={whatsappLink()} variant="secondary" size="lg" className="w-full">
            <WhatsAppGlyph className="size-5 text-success" />
            <T v={common.whatsappUs} />
          </Button>
        </>
      }
    >
      <nav aria-label="Mobile">
        <p className="text-small mb-2 font-semibold tracking-wide text-ink-500 uppercase">
          <T v={nav.sellWithUs} />
        </p>
        <ul className="space-y-1">
          {nav.sellMenu.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block rounded-xl px-3 py-3 hover:bg-ink-50">
                <span className="block text-lg font-semibold text-ink-900">
                  <T v={item.label} />
                </span>
                <span className="text-small block text-ink-500">
                  <T v={item.desc} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-6 space-y-1 border-t border-ink-200 pt-6">
          {nav.main.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-xl px-3 py-3 text-lg font-semibold text-ink-900 hover:bg-ink-50"
              >
                <T v={item.label} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </MobileDrawer>
  );
}
