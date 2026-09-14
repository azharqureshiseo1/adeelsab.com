import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { T } from "@/components/T";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { common, nav, notFound } from "@/content/site";

export const metadata = { title: "Page not found", robots: { index: false } };

/** Branded 404 with routes back to the three audience pages. */
export default function NotFound() {
  const paths = nav.sellMenu.slice(0, 3);
  return (
    <section className="bg-ink-50">
      <Container className="py-20 md:py-28">
        <p className="latin gradient-text text-7xl font-extrabold md:text-8xl">404</p>
        <h1 className="h1 mt-4">
          <T v={notFound.title} />
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink-500">
          <T v={notFound.lead} />
        </p>
        <ul className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
          {paths.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-card border border-ink-200 bg-white p-5 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="flex items-center justify-between font-semibold text-ink-900 group-hover:text-brand-600">
                  <T v={p.label} />
                  <ArrowRight size={18} className="flip-rtl" aria-hidden />
                </span>
                <span className="text-small mt-1 text-ink-500">
                  <T v={p.desc} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/">
            <T v={notFound.home} />
          </Button>
          <Button href="/founding-seller" variant="secondary">
            <T v={common.ctaFounding} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
