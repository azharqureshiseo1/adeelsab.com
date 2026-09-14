import { cn } from "@/lib/utils";

type Tone = "brand" | "success" | "neutral" | "warning" | "dark";

const tones: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-600 border-brand-100",
  success: "bg-[#E8F5EE] text-success border-[#CDEBDA]",
  neutral: "bg-ink-100 text-ink-700 border-ink-200",
  warning: "bg-[#FFF6E5] text-warning border-[#F5DFB5]",
  dark: "bg-ink-800 text-ink-100 border-ink-700",
};

export function Badge({
  children,
  tone = "neutral",
  className,
  dot,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[13px] leading-6 font-semibold",
        tones[tone],
        className,
      )}
    >
      {dot && <span className="size-1.5 rounded-full bg-current" aria-hidden />}
      {children}
    </span>
  );
}
