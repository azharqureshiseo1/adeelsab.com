import { ArrowRight, Check } from "lucide-react";
import { Logo } from "@/components/Logo";
import { T } from "@/components/T";
import { Button } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";
import { Container } from "@/components/layout/Container";
import { common, ctaBand } from "@/content/site";
import type { L } from "@/lib/i18n";
import { factVars } from "@/lib/facts";
import { whatsappLink } from "@/lib/utils";
import { WaitlistForm, type Audience } from "./WaitlistForm";

/**
 * Dark closing band. Every page ends here.
 * With `form` (default) the waitlist form is inline; otherwise it links to a form elsewhere.
 */
export function CTABand({
  title = ctaBand.title,
  lead = ctaBand.lead,
  audience = "local_seller",
  source,
  form = true,
  href = "/founding-seller#waitlist",
  label = common.ctaFounding,
}: {
  title?: L;
  lead?: L;
  audience?: Audience;
  source: string;
  form?: boolean;
  href?: string;
  label?: L;
}) {
  if (!form) {
    return (
      <section aria-labelledby="cta-title" className="bg-ink-900 py-16 md:py-20">
        <Container className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <Logo variant="orange" height={30} />
            <h2 id="cta-title" className="h2 mt-6 text-white">
              <T v={title} vars={factVars} />
            </h2>
            <p className="mt-3 text-lg text-ink-200">
              <T v={lead} vars={factVars} />
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={href} size="lg">
              <T v={label} />
              <ArrowRight size={18} className="flip-rtl" aria-hidden />
            </Button>
            <Button href={whatsappLink()} size="lg" variant="onDark">
              <WhatsAppGlyph className="size-5 text-[#25D366]" />
              <T v={common.whatsappUs} />
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="join" aria-labelledby="cta-title" className="bg-ink-900 py-16 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="lg:pt-4">
          <Logo variant="orange" height={34} />
          <h2 id="cta-title" className="h2 mt-8 text-white">
            <T v={title} vars={factVars} />
          </h2>
          <p className="mt-4 text-lg text-ink-200">
            <T v={lead} vars={factVars} />
          </p>
          <ul className="mt-8 space-y-3">
            {ctaBand.points.map((p) => (
              <li key={p.en} className="flex items-center gap-3 text-ink-100">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-brand-500/15 text-brand-400">
                  <Check size={14} strokeWidth={2.5} aria-hidden />
                </span>
                <T v={p} />
              </li>
            ))}
          </ul>
        </div>
        <WaitlistForm audience={audience} source={source} />
      </Container>
    </section>
  );
}
