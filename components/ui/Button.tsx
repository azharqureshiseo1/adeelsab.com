import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "whatsapp";
type Size = "md" | "lg";

const base =
  "group relative inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[background,color,box-shadow,border-color] duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Primary: flat brand-500, gradient on hover (one of the ≤3 gradient uses per page).
  primary:
    "bg-brand-500 text-white shadow-[0_6px_18px_rgba(251,83,1,.25)] hover:bg-[image:var(--brand-gradient)] hover:shadow-[0_10px_24px_rgba(230,62,0,.3)]",
  secondary: "border border-ink-200 bg-white text-ink-900 hover:border-ink-400 hover:bg-ink-50",
  ghost: "text-ink-900 hover:bg-ink-100",
  onDark: "border border-ink-700 bg-transparent text-white hover:border-ink-400 hover:bg-ink-800",
  whatsapp: "bg-success text-white hover:bg-[#0e7a3f]",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-[17px]",
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
