import { Check } from "lucide-react";
import { Logo } from "@/components/Logo";
import { T } from "@/components/T";
import { Container } from "@/components/layout/Container";
import { ctaBand } from "@/content/site";
import type { L } from "@/lib/i18n";
import { WaitlistForm, type Audience } from "./WaitlistForm";

/** Dark closing band with the waitlist form inline. Every page ends here. */
export function CTABand({
  title = ctaBand.title,
  lead = ctaBand.lead,
  audience = "local_seller",
  source,
}: {
  title?: L;
  lead?: L;
  audience?: Audience;
  source: string;
}) {
  return (
    <section id="join" aria-labelledby="cta-title" className="bg-ink-900 py-16 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="lg:pt-4">
          <Logo variant="orange" height={34} />
          <h2 id="cta-title" className="h2 mt-8 text-white">
            <T v={title} />
          </h2>
          <p className="mt-4 text-lg text-ink-200">
            <T v={lead} />
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
