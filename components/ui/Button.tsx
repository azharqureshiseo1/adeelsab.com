import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "whatsapp";
type Size = "md" | "lg";

const base =
  "group relative inline-flex min-h-10 max-w-full items-center justify-center gap-2 rounded-full text-center font-semibold leading-snug sm:whitespace-nowrap transition-[background,color,box-shadow,border-color] duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-60 [&>svg]:shrink-0";

const variants: Record<Variant, string> = {
  // Primary: flat brand-650, gradient on hover (one of the ≤3 gradient uses per page).
  // Both carry white text at AA — brand-500 is only 3.31:1 and cannot.
  primary:
    "bg-brand-650 text-white shadow-[0_6px_18px_rgba(214,56,0,.25)] hover:bg-[image:var(--brand-gradient-strong)] hover:shadow-[0_10px_24px_rgba(176,47,0,.3)]",
  secondary: "border border-ink-200 bg-white text-ink-900 hover:border-ink-400 hover:bg-ink-50",
  ghost: "text-ink-900 hover:bg-ink-100",
  onDark: "border border-ink-700 bg-transparent text-white hover:border-ink-400 hover:bg-ink-800",
  whatsapp: "bg-[#0F7A40] text-white hover:bg-[#0B6634]",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2 text-[15px]",
  lg: "px-6 py-3 text-base",
};

type Common = { variant?: Variant; size?: Size; className?: string; children: React.ReactNode };
type LinkProps = Common & { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;
type ButtonProps = Common & { href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({ variant = "primary", size = "md", className, children, ...props }: LinkProps | ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (typeof props.href === "string") {
    const { href, ...rest } = props as Omit<LinkProps, keyof Common>;
    if (/^(https?:|mailto:|tel:)/.test(href)) {
      const external = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as Omit<ButtonProps, keyof Common>;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
