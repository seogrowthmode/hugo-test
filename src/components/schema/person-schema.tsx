import { schemaConfig } from "@/lib/schema-config";

interface PersonSchemaProps {
  name: string;
  jobTitle?: string;
  image?: string;
  url?: string;
  description?: string;
  email?: string;
  telephone?: string;
  sameAs?: string[];
  worksFor?: {
    name: string;
    url: string;
  };
}

export function PersonSchema({
  name,
  jobTitle,
  image,
  url,
  description,
  email,
  telephone,
  sameAs,
  worksFor = {
    name: schemaConfig.organization.name,
    url: schemaConfig.organization.url,
  },
}: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    ...(jobTitle && { jobTitle }),
    ...(image && {
      image: image.startsWith("http") ? image : `${schemaConfig.website.baseUrl}${image}`,
    }),
    ...(url && {
      url: url.startsWith("http") ? url : `${schemaConfig.website.baseUrl}${url}`,
    }),
    ...(description && { description }),
    ...(email && { email }),
    ...(telephone && { telephone }),
    ...(sameAs && { sameAs }),
    ...(worksFor && {
      worksFor: {
        "@type": "Organization",
        name: worksFor.name,
        url: worksFor.url.startsWith("http") ? worksFor.url : `${schemaConfig.website.baseUrl}${worksFor.url}`,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
