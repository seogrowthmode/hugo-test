import { schemaConfig } from "./schema-config";

/**
 * Generates hreflang metadata for a specific page
 * 
 * @param path - The path of the page (e.g., '/about', '/blog/post-1')
 * @returns An object with language codes as keys and full URLs as values
 */
export function generateHreflangMetadata(path: string = '') {
  const { baseUrl } = schemaConfig.seo;
  const { supported } = schemaConfig.languages;
  
  // Normalize path to ensure it starts with a slash but doesn't end with one
  // unless it's the homepage (empty path)
  const normalizedPath = path 
    ? path.startsWith('/') ? path : `/${path}`
    : '';
  
  // Create a languages object with the supported languages
  const languages: Record<string, string> = {};
  
  // For now, we only have English, but this structure allows for easy expansion
  supported.forEach(lang => {
    languages[lang] = `${baseUrl}${normalizedPath}`;
  });
  
  return languages;
}

/**
 * Generates the canonical URL for a specific page
 * 
 * @param path - The path of the page (e.g., '/about', '/blog/post-1')
 * @returns The canonical URL for the page
 */
export function generateCanonicalUrl(path: string = '') {
  const { baseUrl } = schemaConfig.seo;
  
  // Normalize path to ensure it starts with a slash but doesn't end with one
  // unless it's the homepage (empty path)
  const normalizedPath = path 
    ? path.startsWith('/') ? path : `/${path}`
    : '';
  
  return `${baseUrl}${normalizedPath}`;
}
