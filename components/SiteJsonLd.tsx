import { JsonLd } from "@/components/JsonLd";
import { facts } from "@/content/data/facts";
import { SITE_NAME } from "@/lib/seo";
import { siteUrl } from "@/lib/utils";

/** Organization + WebSite structured data. Unconfirmed facts are omitted, never guessed. */
export function SiteJsonLd() {
  const sameAs = [facts.facebook, facts.instagram, facts.tiktok, facts.threads]
    .map((f) => f.value)
    .filter((v): v is string => Boolean(v));

  const contactPoint = [
    (facts.supportEmail.value || facts.whatsappDisplay.value) && {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: facts.supportEmail.value ?? undefined,
      telephone: facts.whatsappDisplay.value?.replace(/\s/g, "") ?? undefined,
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
    facts.landlineTel.value && {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: facts.landlineTel.value,
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
  ].filter(Boolean);

  const organization: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": siteUrl("/#organization"),
    name: SITE_NAME,
    legalName: facts.legalName.value ?? undefined,
    url: siteUrl(),
    logo: siteUrl("/brand/adeelsab-logo-dark.png"),
    description: "Pakistani multi-vendor marketplace for local sellers, with nationwide delivery and cash on delivery.",
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
  if (facts.officeAddress.value) {
    organization.address = {
      "@type": "PostalAddress",
      streetAddress: "Office No 20, First floor, Takbeer Plaza, Al Faisal Town",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    };
    organization.identifier = [
      facts.secpNumber.value && { "@type": "PropertyValue", propertyID: "SECP", value: facts.secpNumber.value },
      facts.ntn.value && { "@type": "PropertyValue", propertyID: "FBR", value: facts.ntn.value },
    ].filter(Boolean);
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
