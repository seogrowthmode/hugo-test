import { schemaConfig } from "@/lib/schema-config";

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  image?: string;
  telephone?: string;
  email?: string;
  priceRange?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  sameAs?: string[];
}

export function LocalBusinessSchema({
  name = schemaConfig.organization.name,
  description,
  url = schemaConfig.organization.url,
  logo = schemaConfig.organization.logo,
  image,
  telephone = schemaConfig.organization.contactPoint.telephone,
  email = schemaConfig.organization.contactPoint.email,
  priceRange = "$$",
  address = schemaConfig.organization.address,
  geo,
  openingHours,
  sameAs = schemaConfig.organization.sameAs,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    ...(description && { description }),
    url: url.startsWith("http") ? url : `${schemaConfig.website.baseUrl}${url}`,
    logo: logo.startsWith("http") ? logo : `${schemaConfig.website.baseUrl}${logo}`,
    ...(image && {
      image: image.startsWith("http") ? image : `${schemaConfig.website.baseUrl}${image}`,
    }),
    telephone,
    email,
    priceRange,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    ...(geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    ...(openingHours && { openingHoursSpecification: openingHours }),
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
