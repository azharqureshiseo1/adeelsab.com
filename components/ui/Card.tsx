import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  emphasis,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Orange top border + stronger shadow. Use once per group. */
  emphasis?: boolean;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn(
        "relative rounded-card border bg-white p-6 md:p-7",
        emphasis
          ? "border-ink-200 border-t-4 border-t-brand-500 shadow-lift"
          : "border-ink-200 shadow-soft",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function IconTile({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn("inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500", className)}
      aria-hidden
    >
      {children}
    </span>
  );
}
