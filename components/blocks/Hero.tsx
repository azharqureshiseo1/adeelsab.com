import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { T } from "@/components/T";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import type { L } from "@/lib/i18n";

type Props = {
  eyebrow: L;
  title: L;
  sub: L;
  primary: { href: string; label: L };
  secondary?: { href: string; label: L };
  micro?: L;
  image: { src: string; alt: string; width: number; height: number };
  vars?: Record<string, React.ReactNode>;
};

/** Light hero. The soft gradient shape behind the photo is one of the page's ≤3 gradient uses. */
export function Hero({ eyebrow, title, sub, primary, secondary, micro, image, vars }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink-50">
      <Container className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow">
            <span className="size-2 rounded-full bg-brand-500" aria-hidden />
            <T v={eyebrow} />
          </p>
          <h1 className="h1 mt-5">
            <T v={title} vars={vars} />
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-500 md:text-xl">
            <T v={sub} vars={vars} />
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primary.href} size="lg">
              <T v={primary.label} />
              <ArrowRight size={18} className="flip-rtl transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Button>
            {secondary && (
              <Button href={secondary.href} size="lg" variant="secondary">
                <T v={secondary.label} />
              </Button>
            )}
          </div>
          {micro && (
            <p className="text-small mt-5 flex items-center gap-2 text-ink-500">
              <Check size={16} className="text-success" aria-hidden />
              <T v={micro} />
            </p>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div
            aria-hidden
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[24px] opacity-85 md:translate-x-6 md:translate-y-6 rtl:-translate-x-4 rtl:md:-translate-x-6"
            style={{ background: "var(--brand-gradient)" }}
          />
          <div className="relative overflow-hidden rounded-card border-4 border-white bg-white shadow-lift">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="aspect-[4/3] h-auto w-full object-cover object-[42%_50%]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
