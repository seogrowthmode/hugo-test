import { schemaConfig } from "@/lib/schema-config";

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: {
    name: string;
    url: string;
  };
  image?: string;
  url?: string;
  areaServed?: string;
}

export function ServiceSchema({
  name,
  description,
  provider = {
    name: schemaConfig.organization.name,
    url: schemaConfig.organization.url,
  },
  image,
  url,
  areaServed,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider.name,
      url: provider.url.startsWith("http") ? provider.url : `${schemaConfig.website.baseUrl}${provider.url}`,
    },
    ...(image && {
      image: image.startsWith("http") ? image : `${schemaConfig.website.baseUrl}${image}`,
    }),
    ...(url && {
      url: url.startsWith("http") ? url : `${schemaConfig.website.baseUrl}${url}`,
    }),
    ...(areaServed && { areaServed }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
