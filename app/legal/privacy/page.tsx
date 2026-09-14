import { LegalPage, legalMetadata } from "@/components/blocks/LegalPage";

export const dynamic = "force-static";

export function generateMetadata() {
  return legalMetadata("privacy");
}

export default function Page() {
  return <LegalPage slug="privacy" />;
}
