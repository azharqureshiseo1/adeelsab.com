export type Locale = "en" | "ur";

/** A bilingual string. Every user-facing string in content/site.ts has this shape. */
export type L = { readonly en: string; readonly ur: string };

export const LANG_STORAGE_KEY = "adeelsab-lang";

/**
 * Runs in <head> before first paint. Restores the saved language onto <html>
 * so CSS shows the right text immediately, and flags JS for reveal animations.
 */
export const langInitScript = `(function(){try{var d=document.documentElement;d.classList.add('js');if(localStorage.getItem('${LANG_STORAGE_KEY}')==='ur'){d.lang='ur';d.dir='rtl';d.classList.add('font-urdu')}}catch(e){}})();`;

export function pick(v: L, lang: Locale): string {
  return lang === "ur" && v.ur && !v.ur.startsWith("TODO:") ? v.ur : v.en;
}
