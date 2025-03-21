import { schemaConfig } from "@/lib/schema-config";

interface OrganizationSchemaProps {
  name?: string;
  logo?: string;
  url?: string;
  sameAs?: string[];
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    email: string;
    contactType: string;
  };
}

export function OrganizationSchema({
  name = schemaConfig.organization.name,
  logo = schemaConfig.organization.logo,
  url = schemaConfig.organization.url,
  sameAs = schemaConfig.organization.sameAs,
  address = schemaConfig.organization.address,
  contactPoint = schemaConfig.organization.contactPoint,
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo: logo.startsWith("http") ? logo : `${schemaConfig.website.baseUrl}${logo}`,
    sameAs,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    contactPoint: {
      "@type": "ContactPoint",
      ...contactPoint,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
