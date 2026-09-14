import { cn } from "@/lib/utils";

/** Responsive table: scrolls horizontally inside its own container, never the page. */
export function Table({
  head,
  children,
  caption,
  className,
}: {
  head: React.ReactNode[];
  children: React.ReactNode;
  caption?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-x-auto rounded-card border border-ink-200 bg-white shadow-soft", className)}>
      <table className="w-full min-w-[520px] border-collapse text-start text-[15px]">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-ink-50">
            {head.map((h, i) => (
              <th
                key={i}
                scope="col"
                className="border-b border-ink-200 px-4 py-3 text-start text-sm font-semibold text-ink-900 md:px-5"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-200 [&_td]:px-4 [&_td]:py-3 md:[&_td]:px-5 [&_th]:px-4 [&_th]:py-3 md:[&_th]:px-5">
          {children}
        </tbody>
      </table>
    </div>
  );
}
