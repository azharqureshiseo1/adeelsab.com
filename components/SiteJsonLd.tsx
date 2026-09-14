import { JsonLd } from "@/components/JsonLd";
import { facts } from "@/content/data/facts";
import { SITE_NAME } from "@/lib/seo";
import { siteUrl } from "@/lib/utils";

/** Organization + WebSite structured data. Unconfirmed facts are omitted, never guessed. */
export function SiteJsonLd() {
  const sameAs = [facts.facebook, facts.instagram, facts.tiktok, facts.linkedin, facts.youtube]
    .map((f) => f.value)
    .filter((v): v is string => Boolean(v));

  const contactPoint = [
    facts.whatsappDisplay.value && {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: facts.whatsappDisplay.value,
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
    facts.businessEmail.value && {
      "@type": "ContactPoint",
      contactType: "sales",
      email: facts.businessEmail.value,
      areaServed: "PK",
    },
  ].filter(Boolean);

  const organization: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": siteUrl("/#organization"),
    name: SITE_NAME,
    url: siteUrl(),
    logo: siteUrl("/brand/adeelsab-logo-dark.png"),
    description: "Pakistani multi-vendor marketplace for local sellers, with nationwide delivery and cash on delivery.",
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
  if (facts.officeAddress.value) {
    organization.address = { "@type": "PostalAddress", streetAddress: facts.officeAddress.value, addressCountry: "PK" };
  }
  if (contactPoint.length) organization.contactPoint = contactPoint;
  if (sameAs.length) organization.sameAs = sameAs;

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": siteUrl("/#website"),
          name: SITE_NAME,
          url: siteUrl(),
          inLanguage: ["en-PK", "ur-PK"],
          publisher: { "@id": siteUrl("/#organization") },
        }}
      />
    </>
  );
}
