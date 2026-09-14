import Image from "next/image";
import { T } from "@/components/T";
import { partners } from "@/content/data/shipping";
import { cn } from "@/lib/utils";

/** Courier partner logos — greyscale, colour on hover. The strongest credibility element on the page. */
export function PartnerLogos({ withLines, className }: { withLines?: boolean; className?: string }) {
  return (
    <ul className={cn("grid gap-4 sm:grid-cols-3", className)}>
      {partners.map((p) => (
        <li
          key={p.slug}
          className="group rounded-card border border-ink-200 bg-white p-6 text-center shadow-soft transition-shadow hover:shadow-lift"
        >
          <Image
            src={p.logo}
            alt={`${p.name} logo`}
            width={200}
            height={64}
            className="mx-auto h-14 w-auto opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
          />
          {withLines && (
            <>
              <p className="mt-4 font-semibold text-ink-900">{p.name}</p>
              <p className="text-small mt-1 text-ink-500">
                <T v={p.line} />
              </p>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
