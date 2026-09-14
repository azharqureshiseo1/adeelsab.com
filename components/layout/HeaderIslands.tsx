"use client";

/**
 * Small client islands for the header. Copy is rendered on the server and passed
 * in as children, so content/site.ts never ships in client bundles.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { L } from "@/lib/i18n";
import { useLang } from "./LangProvider";

export function HeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-white transition-shadow duration-200",
        scrolled ? "border-ink-200 shadow-[0_4px_20px_rgba(16,24,32,.06)]" : "border-transparent",
      )}
    >
      {children}
    </header>
  );
}

export function NavLink({
  href,
  children,
  className,
  activeClassName = "text-brand-600",
  inactiveClassName = "text-ink-700",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(className, active ? activeClassName : inactiveClassName)}
    >
      {children}
    </Link>
  );
}

export function SellDropdown({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const active = pathname.startsWith("/sell") || pathname === "/founding-seller";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="sell-menu"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "inline-flex min-h-11 items-center gap-1 rounded-full px-3.5 font-semibold transition-colors hover:text-ink-900",
          active ? "text-brand-600" : "text-ink-700",
        )}
      >
        {label}
        <ChevronDown size={16} className={cn("transition-transform", open && "rotate-180")} aria-hidden />
      </button>
      <div
        id="sell-menu"
        hidden={!open}
        className="absolute start-0 top-full mt-2 w-[380px] rounded-card border border-ink-200 bg-white p-2 shadow-lift"
      >
        {children}
      </div>
    </div>
  );
}

export function MobileDrawer({
  logo,
  children,
  footer,
  labels,
}: {
  logo: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
  labels: { open: L; close: L };
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLang();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t(labels.open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="inline-flex size-11 items-center justify-center rounded-full text-ink-900 hover:bg-ink-100 lg:hidden"
      >
        <Menu size={24} strokeWidth={1.75} aria-hidden />
      </button>
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label={t(labels.open)}
        hidden={!open}
        className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white lg:hidden"
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-ink-200 px-5">
          {logo}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t(labels.close)}
            className="inline-flex size-11 items-center justify-center rounded-full hover:bg-ink-100"
          >
            <X size={24} strokeWidth={1.75} aria-hidden />
          </button>
        </div>
        <div className="flex-1 px-5 py-6">{children}</div>
        <div className="space-y-3 border-t border-ink-200 px-5 py-5">{footer}</div>
      </div>
    </>
  );
}
