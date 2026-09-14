import Image from "next/image";
import { cn } from "@/lib/utils";

const RATIO = 2170 / 725; // supplied lockup is 2170 × 725 px (2.99 : 1)

type Props = {
  variant?: "dark" | "orange";
  height?: number;
  className?: string;
  priority?: boolean;
};

/** dark = black "Adeel" + orange "Sab" (light backgrounds). orange = all-orange (dark backgrounds only). */
export function Logo({ variant = "dark", height = 36, className, priority }: Props) {
  const width = Math.round(height * RATIO);
  return (
    <Image
      src={variant === "dark" ? "/brand/adeelsab-logo-dark.png" : "/brand/adeelsab-logo-orange.png"}
      alt="AdeelSab"
      width={width}
      height={height}
      priority={priority}
      className={cn("block h-auto max-w-none", className)}
      style={{ width, height }}
    />
  );
}
