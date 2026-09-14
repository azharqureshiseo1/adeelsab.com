import type { L } from "@/lib/i18n";

/**
 * Renders a bilingual string. Both languages ship in the static HTML and CSS
 * shows the active one (see globals.css), so this works in server and client
 * components without hooks and without forcing dynamic rendering.
 */
export function T({ v }: { v: L }) {
  return (
    <>
      <span className="l-en">{v.en}</span>
      <span className="l-ur" lang="ur">
        {v.ur}
      </span>
    </>
  );
}
