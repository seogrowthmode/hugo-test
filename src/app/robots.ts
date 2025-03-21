import { MetadataRoute } from 'next'
import { schemaConfig } from '@/lib/schema-config'

/**
 * Robots.txt configuration
 * 
 * This configuration:
 * 1. Explicitly allows crawling of all important content paths including dynamic routes
 *    - Static pages (home, about, contact, etc.)
 *    - Dynamic pages (blog posts, service pages, service area pages)
 * 2. Blocks crawling of non-SEO relevant paths
 *    - API endpoints
 *    - Admin pages
 *    - Next.js internal routes
 *    - Error pages
 *    - Preview/draft content
 * 3. References all sitemaps for comprehensive indexing
 * 
 * Note: The wildcard (*) in paths like '/blog/*' ensures all dynamic pages under
 * that route are crawlable.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = schemaConfig.seo.baseUrl
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/services',
          '/services/*',
          '/service-area',
          '/service-area/*',
          '/blog',
          '/blog/*',
          '/contact',
          '/team',
          '/testimonials',
          '/privacy',
          '/terms'
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/404',
          '/500',
          '/error',
          '/preview/',
          '/draft/'
        ]
      }
    ],
    host: baseUrl,
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/server-sitemap.xml`,
      `${baseUrl}/sitemap-index.xml`,
    ],
  }
}
