import { schemaConfig } from "@/lib/schema-config";

interface WebsiteSchemaProps {
  name?: string;
  alternateName?: string;
  url?: string;
  description?: string;
}

export function WebsiteSchema({
  name = schemaConfig.website.name,
  alternateName = schemaConfig.website.alternateName,
  url = schemaConfig.website.baseUrl,
  description,
}: WebsiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    alternateName,
    url,
    ...(description && { description }),
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
