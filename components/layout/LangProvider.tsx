"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { LANG_STORAGE_KEY, pick, type L, type Locale } from "@/lib/i18n";

type Ctx = { lang: Locale; setLang: (l: Locale) => void; t: (v: L) => string };

const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (v) => v.en });

function applyToDocument(lang: Locale) {
  const d = document.documentElement;
  d.lang = lang;
  d.dir = lang === "ur" ? "rtl" : "ltr";
  d.classList.toggle("font-urdu", lang === "ur");
}

/**
 * Language state: React context + localStorage. No routing change, so every page
 * stays statically rendered. Visible text switches through CSS (see <T>); the
 * context is for strings that live in attributes (placeholder, aria-label, alt).
 */
export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>("en");

  useEffect(() => {
    // The <head> script has already applied the stored language to <html>.
    if (document.documentElement.lang === "ur") setLangState("ur");
  }, []);

  const setLang = useCallback((l: Locale) => {
    setLangState(l);
    applyToDocument(l);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, l);
    } catch {
      /* private mode — language still switches for this page view */
    }
  }, []);

  const t = useCallback((v: L) => pick(v, lang), [lang]);

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
