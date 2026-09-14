import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <Section>
      <Logo priority />
      <h1 className="h1 mt-8">Scaffold ready</h1>
      <div className="mt-6 flex gap-3">
        <Button href="/founding-seller">Become a Founding Seller</Button>
        <Button href="/how-it-works" variant="secondary">
          How it works
        </Button>
      </div>
    </Section>
  );
}
