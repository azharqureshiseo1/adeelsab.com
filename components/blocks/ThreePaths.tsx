import Link from "next/link";
import { ArrowRight, Check, Plug, Store, Users } from "lucide-react";
import { T } from "@/components/T";
import { Badge } from "@/components/ui/Badge";
import { Card, IconTile } from "@/components/ui/Card";
import { SectionHeading } from "@/components/layout/Section";
import { home } from "@/content/site";
import { cn } from "@/lib/utils";

const icons = { local: Store, reseller: Users, dropshipper: Plug } as const;
const tones = { local: "success", reseller: "brand", dropshipper: "neutral" } as const;

export function ThreePaths() {
  const { paths } = home;
  return (
    <>
      <SectionHeading id="paths-title" eyebrow={paths.eyebrow} title={paths.title} lead={paths.lead} />
      <ul className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-3">
        {paths.items.map((item, i) => {
          const Icon = icons[item.key as keyof typeof icons];
          const emphasis = i === 0;
          return (
            <Card key={item.key} as="li" emphasis={emphasis} className={cn("reveal flex flex-col", emphasis && "lg:-mt-2")}>
              <div className="flex items-start justify-between gap-3">
                <IconTile>
                  <Icon size={24} strokeWidth={1.75} />
                </IconTile>
                <Badge tone={tones[item.key as keyof typeof tones]} dot>
                  <T v={item.badge} />
                </Badge>
              </div>
              <h3 className="h4 mt-5">
                <T v={item.title} />
              </h3>
              <p className="mt-2 text-ink-700">
                <T v={item.promise} />
              </p>
              <ul className="mt-5 space-y-2.5 text-[15px] text-ink-500">
                {item.bullets.map((b) => (
                  <li key={b.en} className="flex gap-2.5">
                    <Check size={18} className="mt-0.5 shrink-0 text-brand-500" aria-hidden />
                    <T v={b} />
                  </li>
                ))}
              </ul>
              <Link
                href={item.href}
                className={cn(
                  "mt-auto inline-flex min-h-11 items-center gap-1.5 pt-6 font-semibold",
                  emphasis ? "text-brand-600" : "text-ink-900",
                )}
              >
                <T v={item.cta} />
                <ArrowRight size={16} className="flip-rtl" aria-hidden />
              </Link>
            </Card>
          );
        })}
      </ul>
    </>
  );
}
