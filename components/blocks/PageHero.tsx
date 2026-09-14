import { T } from "@/components/T";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import type { L } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Light hero for inner pages: breadcrumbs, eyebrow, H1, lead, optional actions and aside. */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  actions,
  aside,
  badge,
  vars,
  className,
}: {
  eyebrow?: L;
  title: L;
  lead?: L;
  crumbs?: Crumb[];
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  badge?: React.ReactNode;
  vars?: Record<string, React.ReactNode>;
  className?: string;
}) {
  return (
    <section className={cn("border-b border-ink-200 bg-ink-50", className)}>
      <Container
        className={cn("py-12 md:py-16", !!aside && "grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16")}
      >
        <div className="max-w-3xl">
          {crumbs && <Breadcrumbs items={crumbs} />}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {eyebrow && (
              <p className="eyebrow">
                <span className="size-2 rounded-full bg-brand-500" aria-hidden />
                <T v={eyebrow} />
              </p>
            )}
            {badge}
          </div>
          <h1 className="h1 mt-5">
            <T v={title} vars={vars} />
          </h1>
          {lead && (
            <p className="mt-5 text-lg text-ink-500 md:text-xl">
              <T v={lead} vars={vars} />
            </p>
          )}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {aside}
      </Container>
    </section>
  );
}
