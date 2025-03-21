import { schemaConfig } from "@/lib/schema-config";

interface ContactPoint {
  telephone: string;
  email: string;
  contactType: string;
}

interface ContactPageSchemaProps {
  contactPoints?: ContactPoint[];
  url?: string;
}

export function ContactPageSchema({
  contactPoints = [schemaConfig.organization.contactPoint],
  url = `${schemaConfig.website.baseUrl}/contact`,
}: ContactPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url,
    mainEntity: {
      "@type": "Organization",
      name: schemaConfig.organization.name,
      contactPoint: contactPoints.map(point => ({
        "@type": "ContactPoint",
        ...point,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
