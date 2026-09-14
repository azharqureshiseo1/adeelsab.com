import { T } from "@/components/T";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { factText, factVars } from "@/lib/facts";
import type { L } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";

export type FaqItem = { q: L; a: L };

/** Accordion FAQ + FAQPage JSON-LD (English, with unconfirmed facts marked "to be confirmed"). */
export function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <>
      <Accordion className="mt-8">
        {items.map((item) => (
          <AccordionItem key={item.q.en} question={<T v={item.q} />}>
            <p>
              <T v={item.a} vars={factVars} />
            </p>
          </AccordionItem>
        ))}
      </Accordion>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q.en,
            acceptedAnswer: { "@type": "Answer", text: factText(item.a.en) },
          })),
        }}
      />
    </>
  );
}
