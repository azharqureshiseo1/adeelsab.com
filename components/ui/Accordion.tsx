import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** Native <details> accordion — accessible, works without JavaScript. */
export function Accordion({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("divide-y divide-ink-200 border-y border-ink-200", className)}>{children}</div>;
}

export function AccordionItem({
  question,
  children,
  defaultOpen,
}: {
  question: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="group py-1" open={defaultOpen}>
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-start text-[17px] font-semibold text-ink-900 md:text-lg [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-700 transition-transform group-open:rotate-180">
          <ChevronDown size={18} aria-hidden />
        </span>
      </summary>
      <div className="pe-12 pb-5 text-ink-500">{children}</div>
    </details>
  );
}
