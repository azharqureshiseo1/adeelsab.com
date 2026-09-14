import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { T } from "@/components/T";
import type { L } from "@/lib/i18n";

type Tone = "white" | "muted" | "dark";

const tones: Record<Tone, string> = {
  white: "bg-white",
  muted: "bg-ink-50",
  dark: "bg-ink-900 text-ink-200 [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white",
};

export function Section({
  children,
  tone = "white",
  id,
  className,
  narrow,
  labelledBy,
}: {
  children: React.ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  narrow?: boolean;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("py-16 md:py-24", tones[tone], className)}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}

/** Standard section heading block: optional eyebrow, H2, lead paragraph. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  dark,
  className,
}: {
  id?: string;
  eyebrow?: L;
  title: L;
  lead?: L;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-small mb-3 font-semibold tracking-wide uppercase",
            dark ? "text-brand-400" : "text-brand-700",
          )}
        >
          <T v={eyebrow} />
        </p>
      )}
      <h2 id={id} className="h2">
        <T v={title} />
      </h2>
      {lead && (
        <p className={cn("mt-4 text-[17px] md:text-lg", dark ? "text-ink-200" : "text-ink-500")}>
          <T v={lead} />
        </p>
      )}
    </div>
  );
}
