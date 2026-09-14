import { cities, OTHER_CITY } from "@/content/data/cities";
import { categories } from "@/content/data/categories";
import { waitlistForm } from "@/content/site";
import { WaitlistFormClient, type WaitlistFormProps } from "./WaitlistFormClient";

export type Audience = "local_seller" | "reseller" | "dropshipper";

const titles = {
  local_seller: waitlistForm.title,
  reseller: waitlistForm.titleReseller,
  dropshipper: waitlistForm.titleDropshipper,
};

/**
 * Server wrapper: picks exactly the copy and options the form needs and hands them
 * to the client island, so the rest of site.ts stays out of the browser bundle.
 */
export function WaitlistForm({
  audience = "local_seller",
  source,
  compact,
}: {
  audience?: Audience;
  source: string;
  compact?: boolean;
}) {
  const props: WaitlistFormProps = {
    audience,
    source,
    compact,
    copy: { ...waitlistForm, title: titles[audience] },
    cityOptions: [...cities.map((c) => ({ value: c.slug, label: { en: c.name, ur: c.ur } })), {
      value: OTHER_CITY.slug,
      label: { en: OTHER_CITY.name, ur: OTHER_CITY.ur },
    }],
    categoryOptions: [
      ...categories.map((c) => ({ value: c.slug, label: { en: c.en, ur: c.ur } })),
      { value: "other", label: waitlistForm.otherCategory },
    ],
  };
  return <WaitlistFormClient {...props} />;
}
