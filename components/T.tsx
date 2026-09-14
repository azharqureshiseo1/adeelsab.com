import { Fragment } from "react";
import type { L } from "@/lib/i18n";

type Vars = Record<string, React.ReactNode>;

function interpolate(text: string, vars?: Vars): React.ReactNode {
  if (!vars) return text;
  return text.split(/(\{\w+\})/g).map((part, i) => {
    const key = part.match(/^\{(\w+)\}$/)?.[1];
    return <Fragment key={i}>{key && key in vars ? vars[key] : part}</Fragment>;
  });
}

/**
 * Renders a bilingual string. Both languages ship in the static HTML and CSS
 * shows the active one (see globals.css), so this works in server and client
 * components without hooks and without forcing dynamic rendering.
 *
 * `vars` fills `{tokens}` in the copy, e.g. <T v={copy.x} vars={{ days: <Fact f={facts.payoutCycleDays} /> }} />
 */
export function T({ v, vars }: { v: L; vars?: Vars }) {
  return (
    <>
      <span className="l-en">{interpolate(v.en, vars)}</span>
      <span className="l-ur" lang="ur">
        {interpolate(v.ur, vars)}
      </span>
    </>
  );
}
