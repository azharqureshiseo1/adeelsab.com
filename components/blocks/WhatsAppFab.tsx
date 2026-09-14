import { whatsappFab } from "@/content/site";
import { whatsappLink } from "@/lib/utils";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";

/** Fixed WhatsApp button on every page. In this market it converts better than any form. */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(whatsappFab.prefill)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsappFab.label.en}
      data-event="whatsapp_click"
      className="fixed end-4 bottom-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-success text-white shadow-[0_8px_24px_rgba(18,140,74,.35)] transition-transform hover:scale-105 md:end-6 md:bottom-6"
    >
      <WhatsAppGlyph className="size-7" />
    </a>
  );
}
