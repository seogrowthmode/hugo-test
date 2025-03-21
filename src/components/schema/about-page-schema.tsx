import { schemaConfig } from "@/lib/schema-config";

interface AboutPageSchemaProps {
  url?: string;
  description?: string;
}

export function AboutPageSchema({
  url = `${schemaConfig.website.baseUrl}/about`,
  description = `About ${schemaConfig.organization.name}`,
}: AboutPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url,
    description,
    mainEntity: {
      "@type": "Organization",
      name: schemaConfig.organization.name,
      url: schemaConfig.organization.url,
      logo: `${schemaConfig.website.baseUrl}${schemaConfig.organization.logo}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
