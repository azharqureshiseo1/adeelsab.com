import { T } from "@/components/T";
import type { L } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Large stat figure with the brand gradient text fill (counts toward the page's gradient budget). */
export function StatNumber({
  value,
  label,
  vars,
  className,
}: {
  value: L;
  label: L;
  vars?: Record<string, React.ReactNode>;
  className?: string;
}) {
  return (
    <div className={cn("reveal", className)}>
      <p className="gradient-text tabular text-4xl leading-tight font-extrabold tracking-tight lg:text-[40px] [&_mark]:text-sm">
        <T v={value} vars={vars} />
      </p>
      <p className="mt-2 text-[15px] text-ink-200">
        <T v={label} vars={vars} />
      </p>
    </div>
  );
}
