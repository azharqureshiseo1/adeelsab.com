import { T } from "@/components/T";
import type { L } from "@/lib/i18n";

/** Horizontal steps on desktop, vertical timeline on mobile. */
export function HowItWorks({ steps, vars }: { steps: { title: L; body: L }[]; vars?: Record<string, React.ReactNode> }) {
  return (
    <ol className="relative mt-10 grid gap-8 md:mt-12 lg:grid-cols-4 lg:gap-6">
      {/* timeline rail */}
      <span aria-hidden className="absolute start-5 top-2 bottom-2 w-px bg-ink-200 lg:hidden" />
      <span aria-hidden className="absolute start-[12%] end-[12%] top-5 hidden h-px bg-ink-200 lg:block" />
      {steps.map((step, i) => (
        <li key={step.title.en} className="reveal relative flex gap-5 lg:flex-col lg:gap-4">
          <span className="latin relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-500 bg-white font-bold text-brand-700 lg:mx-0">
            {i + 1}
          </span>
          <div>
            <h3 className="h4">
              <T v={step.title} vars={vars} />
            </h3>
            <p className="mt-2 text-[15px] text-ink-500">
              <T v={step.body} vars={vars} />
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
