import { T } from "@/components/T";
import { Container } from "@/components/layout/Container";
import { home } from "@/content/site";
import { factVars } from "@/lib/facts";
import { StatNumber } from "./StatNumber";

/** Capability, not vanity metrics — pre-launch there is no traction to report. */
export function CapabilityBand() {
  const { capability } = home;
  return (
    <section aria-labelledby="capability-title" className="bg-ink-900 py-16 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 id="capability-title" className="h3 text-white">
            <T v={capability.title} />
          </h2>
          <p className="mt-3 text-ink-400">
            <T v={capability.lead} />
          </p>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {capability.items.map((item) => (
            <StatNumber
              key={item.label.en}
              value={item.stat}
              label={item.label}
              vars={factVars}
              className="border-s-2 border-ink-700 ps-5"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
