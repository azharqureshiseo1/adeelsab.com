import { Button } from "@/components/ui/Button";
import { T } from "@/components/T";
import { waitlistForm } from "@/content/site";

export type Audience = "local_seller" | "reseller" | "dropshipper";

/** Placeholder until step 5 wires the API route. */
export function WaitlistForm({ audience, source }: { audience: Audience; source: string }) {
  return (
    <div className="rounded-card bg-white p-6 shadow-lift md:p-8" data-audience={audience} data-source={source}>
      <h3 className="h4">
        <T v={waitlistForm.title} />
      </h3>
      <Button href="/founding-seller" className="mt-6">
        <T v={waitlistForm.submit} />
      </Button>
    </div>
  );
}
