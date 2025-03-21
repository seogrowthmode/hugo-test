/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://example.com', // Using the baseUrl from schema-config.ts
  generateRobotsTxt: false, // Disabled as we're using Next.js App Router's robots.ts
  sitemapSize: 7000, // Split into multiple sitemaps if needed
  exclude: ['/server-sitemap.xml'], // Exclude the dynamic sitemap URL
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://example.com/server-sitemap.xml', // Dynamic sitemap URL
      'https://example.com/sitemap-index.xml', // Sitemap index URL
    ],
  },
  // Default transformation function for each URL
  transform: async (config, url) => {
    return {
      loc: url,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }
  },
}
