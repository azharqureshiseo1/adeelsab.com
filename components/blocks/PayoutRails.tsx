import { Landmark, Smartphone } from "lucide-react";
import { T } from "@/components/T";
import { payoutRails } from "@/content/site";

const icons = [Landmark, Smartphone, Smartphone];

export function PayoutRails() {
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {payoutRails.items.map((rail, i) => {
        const Icon = icons[i];
        return (
          <li key={rail.name.en} className="rounded-card border border-ink-200 bg-white p-5">
            <Icon size={24} strokeWidth={1.75} className="text-brand-500" aria-hidden />
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
