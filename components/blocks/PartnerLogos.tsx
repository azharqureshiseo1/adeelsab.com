import Image from "next/image";
import { T } from "@/components/T";
import { ownCourier, partners } from "@/content/data/shipping";
import { cn } from "@/lib/utils";

/**
 * Delivery network: AdeelSab Couriers (own fleet, in colour) followed by the national
 * courier partners (greyscale, colour on hover). The strongest credibility element on the page.
 */
export function PartnerLogos({
  withLines,
  columns = 2,
  showOwnFleet = true,
  className,
}: {
  withLines?: boolean;
  /** 2 for half-width layouts, 4 for full-width sections (one row per partner). */
  columns?: 2 | 4;
  showOwnFleet?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      {showOwnFleet && (
        <div className="flex flex-col items-center gap-4 rounded-card border border-ink-200 border-t-4 border-t-brand-500 bg-white p-5 text-center shadow-soft sm:flex-row sm:text-start">
          <Image
            src={ownCourier.logo.src}
            alt={`${ownCourier.name} logo`}
            width={ownCourier.logo.width}
            height={ownCourier.logo.height}
            className="h-16 w-auto shrink-0"
          />
          <p className="text-small text-ink-700">
            <T v={ownCourier.line} />
          </p>
        </div>
      )}
      <ul className={cn("grid grid-cols-2 gap-4", columns === 4 && "lg:grid-cols-3")}>
        {partners.map((p) => (
          <li
            key={p.slug}
            className="group flex flex-col items-center justify-center rounded-card border border-ink-200 bg-white p-5 text-center shadow-soft transition-shadow hover:shadow-lift"
          >
            <Image
              src={p.logo.src}
              alt={`${p.name} logo`}
              width={p.logo.width}
              height={p.logo.height}
              className="h-10 w-auto max-w-[120px] object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-11"
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
    </div>
  );
}
