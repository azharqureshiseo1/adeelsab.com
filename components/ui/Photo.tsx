import Image from "next/image";
import type { L } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type PhotoData = { src: string; width: number; height: number; alt: L };

/** Rounded, bordered site photo from `photos` in content/site.ts. */
export function Photo({
  photo,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
}: {
  photo: PhotoData;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt.en}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      priority={priority}
      className={cn("h-auto w-full rounded-card border border-ink-200 object-cover shadow-soft", className)}
    />
  );
}
