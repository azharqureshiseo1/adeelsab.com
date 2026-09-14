import Image from "next/image";
import { Landmark } from "lucide-react";
import { T } from "@/components/T";
import { paymentLogos } from "@/content/data/shipping";
import { payoutRails } from "@/content/site";

const walletLogo = { JazzCash: paymentLogos[0], Easypaisa: paymentLogos[1] } as const;

export function PayoutRails() {
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {payoutRails.items.map((rail) => {
        const logo = walletLogo[rail.name.en as keyof typeof walletLogo];
        return (
          <li key={rail.name.en} className="rounded-card border border-ink-200 bg-white p-5">
            <span className="flex h-9 items-center">
              {logo ? (
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="h-8 w-auto"
                />
              ) : (
                <Landmark size={26} strokeWidth={1.75} className="text-brand-500" aria-hidden />
              )}
            </span>
            <p className="mt-3 font-semibold text-ink-900">
              <T v={rail.name} />
            </p>
            <p className="text-small mt-1 text-ink-500">
              <T v={rail.body} />
            </p>
          </li>
        );
      })}
    </ul>
  );
}
