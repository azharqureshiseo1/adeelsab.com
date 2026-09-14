"use client";

import { Languages } from "lucide-react";
import { useLang } from "./LangProvider";
import { cn } from "@/lib/utils";

export function LangToggle({ className, dark }: { className?: string; dark?: boolean }) {
  const { lang, setLang } = useLang();
  const next = lang === "en" ? "ur" : "en";
  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={lang === "en" ? "اردو میں دیکھیں — Switch to Urdu" : "Switch to English"}
      className={cn(
        "latin inline-flex min-h-11 items-center gap-1.5 rounded-full border px-3.5 text-sm font-semibold transition-colors",
        dark
          ? "border-ink-700 text-ink-100 hover:border-ink-400"
          : "border-ink-200 text-ink-700 hover:border-ink-400 hover:text-ink-900",
        className,
      )}
    >
      <Languages size={16} strokeWidth={1.75} aria-hidden />
      <span className={cn(lang === "ur" && "opacity-50")} style={{ fontFamily: "var(--font-urdu)", lineHeight: 1.4 }}>
        اردو
      </span>
      <span aria-hidden className="opacity-40">
        /
      </span>
      <span className={cn(lang === "en" && "opacity-50")}>EN</span>
    </button>
  );
}
