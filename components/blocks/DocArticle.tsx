import { ArrowLeft, Clock } from "lucide-react";
import { T } from "@/components/T";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { common } from "@/content/site";
import type { LoadedDoc } from "@/lib/content";
import type { L } from "@/lib/i18n";

function formatDate(iso: string, locale: "en" | "ur") {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale === "ur" ? "ur-PK" : "en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function Toc({ doc }: { doc: LoadedDoc }) {
  const items = doc.toc.filter((t) => t.level === 2);
  if (items.length < 2) return null;
  return (
    <nav
      aria-label={doc.locale === "ur" ? "اس صفحے پر" : "On this page"}
      className="rounded-card border border-ink-200 bg-ink-50 p-5"
    >
      <p className="text-small font-semibold tracking-wide text-ink-500 uppercase">
        {doc.locale === "ur" ? common.onThisPage.ur : common.onThisPage.en}
      </p>
      <ol className="mt-3 space-y-2 text-[15px]">
        {items.map((t) => (
          <li key={t.id}>
            <a href={`#${t.id}`} className="text-ink-700 hover:text-brand-700">
              {t.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Byline row for one language. */
function Byline({ doc }: { doc: LoadedDoc }) {
  const ur = doc.locale === "ur";
  const t = (v: L) => (ur ? v.ur : v.en);
  return (
    <p className="text-small mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-ink-500">
      <span className="inline-flex items-center gap-1.5">
        <Clock size={15} aria-hidden />
        <span className="latin">{doc.readingMinutes}</span> {t(common.minRead)}
      </span>
      <span>
        {t(common.updated)} <time dateTime={doc.meta.updatedAt}>{formatDate(doc.meta.updatedAt, doc.locale)}</time>
      </span>
      {doc.meta.author && <span>{doc.meta.author}</span>}
    </p>
  );
}

/** One language version of the body. Both are rendered; CSS shows the active one. */
function Body({ doc }: { doc: LoadedDoc }) {
  const { Body: Content } = doc;
  const ur = doc.locale === "ur";
  return (
    <div className={`${ur ? "l-ur" : "l-en"} mt-10 grid gap-10 lg:grid-cols-[1fr_260px] lg:gap-14`} lang={doc.locale}>
      <div className={`prose-as min-w-0 ${ur ? "font-urdu" : ""}`}>
        <Content />
      </div>
      <aside className="order-first lg:order-last">
        <div className="lg:sticky lg:top-24">
          <Toc doc={doc} />
        </div>
      </aside>
    </div>
  );
}

export function DocArticle({
  en,
  ur,
  crumbs,
  backHref,
  backLabel,
  cta,
}: {
  en: LoadedDoc;
  ur: LoadedDoc;
  crumbs: Crumb[];
  backHref: string;
  backLabel: L;
  cta: { title: L; body: L };
}) {
  return (
    <article>
      <div className="border-b border-ink-200 bg-ink-50">
        <Container className="py-5">
          <Breadcrumbs items={crumbs} />
        </Container>
      </div>
      <Container className="py-12 md:py-16">
        <header className="max-w-3xl">
          <p className="eyebrow">
            <T v={{ en: en.meta.audience, ur: ur.meta.audience }} />
          </p>
          {/* Exactly one <h1>: both language titles live inside it. */}
          <h1 className="h1 mt-5">
            <T v={{ en: en.meta.title, ur: ur.meta.title }} />
          </h1>
          <p className="mt-4 text-lg text-ink-500">
            <T v={{ en: en.meta.description, ur: ur.meta.description }} />
          </p>
          <div className="l-en">
            <Byline doc={en} />
          </div>
          <div className="l-ur" lang="ur">
            <Byline doc={ur} />
          </div>
        </header>

        <Body doc={en} />
        <Body doc={ur} />

        <aside className="mt-16 max-w-3xl rounded-card border border-ink-200 border-t-4 border-t-brand-500 p-6 shadow-soft md:p-8">
          <h2 className="h3">
            <T v={cta.title} />
          </h2>
          <p className="mt-2 text-ink-700">
            <T v={cta.body} />
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/founding-seller#waitlist">
              <T v={common.ctaFounding} />
            </Button>
            <Button href={backHref} variant="ghost">
              <ArrowLeft size={16} className="flip-rtl" aria-hidden />
              <T v={backLabel} />
            </Button>
          </div>
        </aside>
      </Container>
    </article>
  );
}
