import { schemaConfig } from "@/lib/schema-config";

interface BlogPostingSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  image: string;
  url: string;
  dateModified?: string;
  keywords?: string[];
}

export function BlogPostingSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  image,
  url,
  keywords,
}: BlogPostingSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image.startsWith("http") ? image : `${schemaConfig.website.baseUrl}${image}`,
    datePublished: datePublished,
    ...(dateModified && { dateModified }),
    ...(keywords && { keywords }),
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: schemaConfig.organization.name,
      logo: {
        "@type": "ImageObject",
        url: `${schemaConfig.website.baseUrl}${schemaConfig.organization.logo}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${schemaConfig.website.baseUrl}${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
