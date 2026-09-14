import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { T } from "@/components/T";
import { JsonLd } from "@/components/JsonLd";
import { common } from "@/content/site";
import type { L } from "@/lib/i18n";
import { breadcrumbLd } from "@/lib/seo";

export type Crumb = { label: L; href: string };

/** Visible breadcrumb trail + BreadcrumbList JSON-LD. Home is prepended automatically. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: common.breadcrumbHome, href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="text-small flex flex-wrap items-center gap-1.5 text-ink-500">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="font-medium text-ink-700">
                    <T v={c.label} />
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className="hover:text-ink-900 hover:underline">
                      <T v={c.label} />
                    </Link>
                    <ChevronRight size={14} className="flip-rtl text-ink-400" aria-hidden />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbLd(all.map((c) => ({ name: c.label.en, path: c.href })))} />
    </>
  );
}
