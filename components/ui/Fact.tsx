import type { Fact as FactT } from "@/content/data/facts";
import { cn } from "@/lib/utils";

/** Renders a confirmed value, or a visible TODO marker when the value is not yet known. */
export function Fact({ f, className }: { f: FactT; className?: string }) {
  if (f.value !== null) return <span className={cn("latin tabular", className)}>{f.value}</span>;
  return <TodoMark label={f.todo} className={className} />;
}

export function TodoMark({ label, className }: { label: string; className?: string }) {
  return (
    <mark
      data-todo={label}
      title={`TODO: ${label}`}
      className={cn(
        "latin rounded-md border border-dashed border-warning/60 bg-[#FFF6E5] px-1.5 py-0.5 text-[0.8em] font-semibold whitespace-nowrap text-warning",
        className,
      )}
    >
      TODO: {label}
    </mark>
  );
}
