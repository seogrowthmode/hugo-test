export const schemaConfig = {
  organization: {
    name: "Chadix",
    logo: "/logo-placeholder.webp",
    url: "https://example.com",
    sameAs: [
      "https://facebook.com/chadix",
      "https://twitter.com/chadix",
      "https://linkedin.com/company/chadix"
    ],
    address: {
      streetAddress: "123 Main St",
      addressLocality: "Anytown",
      addressRegion: "ST",
      postalCode: "12345",
      addressCountry: "US"
    },
    contactPoint: {
      telephone: "+1-234-567-8900",
      email: "contact@example.com",
      contactType: "customer service"
    }
  },
  website: {
    name: "Chadix | Modern Web Solutions",
    alternateName: "Chadix Web Solutions",
    baseUrl: "https://example.com"
  },
  // SEO configuration
  seo: {
    baseUrl: "https://example.com", // Used for canonical URLs
    defaultLocale: "en-US"
  },
  // Language configuration
  languages: {
    default: "en",
    // For future expansion, add additional languages here
    // Example: supported: ["en", "es", "fr"]
    supported: ["en"]
  },
  // Add other configurable schema data as needed
}
