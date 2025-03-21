# Hreflang Implementation Guide

This document explains how hreflang tags are implemented in the Chadix website and how to extend the implementation for additional languages in the future.

## What are hreflang tags?

Hreflang tags are HTML attributes that tell search engines which language you are using on a specific page, so they can serve the appropriate version to users searching in that language. They are particularly useful for:

- Websites with content in multiple languages
- Websites targeting different regions with the same language (e.g., English for US, UK, Australia)
- Preventing duplicate content issues across different language/region versions

## Current Implementation

The current implementation supports English (`en`) as the default language. The implementation consists of:

1. **Configuration in schema-config.ts**
   - Language settings are defined in the `languages` object
   - The default language is set to "en"
   - Supported languages are listed in an array

2. **Utility Functions in hreflang.ts**
   - `generateHreflangMetadata`: Creates hreflang metadata for a specific page
   - `generateCanonicalUrl`: Generates the canonical URL for a page

3. **Integration in Next.js Metadata**
   - The root layout includes default hreflang metadata
   - Individual pages use the utility functions to generate page-specific hreflang metadata

## How to Use

### For Static Pages

For static pages like "About Us" or "Contact", use the utility functions with the page path:

```tsx
import { generateCanonicalUrl, generateHreflangMetadata } from "@/lib/hreflang"

export const metadata: Metadata = {
  // ...other metadata
  alternates: {
    canonical: generateCanonicalUrl('about'),
    languages: generateHreflangMetadata('about'),
  },
  // ...other metadata
}
```

### For Dynamic Pages

For dynamic pages like blog posts or service pages, use the utility functions with the constructed path:

```tsx
// In a dynamic route like [slug]/page.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  
  // Construct the page path
  const pagePath = `blog/${slug}`
  
  return {
    // ...other metadata
    alternates: {
      canonical: generateCanonicalUrl(pagePath),
      languages: generateHreflangMetadata(pagePath),
    },
    // ...other metadata
  }
}
```

## Adding New Languages

To add support for additional languages:

1. **Update the schema-config.ts file**:

```typescript
// Example: Adding Spanish and French
languages: {
  default: "en",
  supported: ["en", "es", "fr"]
},
```

2. **Create translated versions of your pages**:

Depending on your URL structure strategy, you might:
- Use subdirectories: `/es/about`, `/fr/about`
- Use subdomains: `es.example.com/about`, `fr.example.com/about`
- Use different domains: `example.es/about`, `example.fr/about`

3. **Update the hreflang.ts utility**:

If you're using a different URL structure than the current one (which assumes subdirectories), you'll need to modify the `generateHreflangMetadata` function to handle your specific URL structure.

For example, if using subdomains:

```typescript
export function generateHreflangMetadata(path: string = '') {
  const { baseUrl } = schemaConfig.seo;
  const { supported } = schemaConfig.languages;
  
  const normalizedPath = path 
    ? path.startsWith('/') ? path : `/${path}`
    : '';
  
  const languages: Record<string, string> = {};
  
  supported.forEach(lang => {
    // Extract domain parts
    const urlParts = baseUrl.split('://');
    const protocol = urlParts[0];
    const domain = urlParts[1];
    
    // For default language (en), use the main domain
    if (lang === schemaConfig.languages.default) {
      languages[lang] = `${baseUrl}${normalizedPath}`;
    } else {
      // For other languages, use subdomains
      languages[lang] = `${protocol}://${lang}.${domain}${normalizedPath}`;
    }
  });
  
  return languages;
}
```

## Testing Hreflang Implementation

To verify your hreflang implementation:

1. **Inspect the HTML source** of your pages to ensure the hreflang tags are present in the `<head>` section
2. Use tools like [Google's Rich Results Test](https://search.google.com/test/rich-results) to validate your implementation
3. Check Google Search Console for any hreflang-related issues

## Best Practices

1. **Always include a self-referencing hreflang tag** for each language version
2. **Ensure bidirectional linking** between all language versions
3. **Include an x-default tag** if you have a language selection page
4. **Use consistent URL patterns** across all language versions
5. **Keep the hreflang attribute values consistent** with your HTML lang attribute

## Resources

- [Google's hreflang documentation](https://developers.google.com/search/docs/advanced/crawling/localized-versions)
- [Next.js Metadata documentation](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
