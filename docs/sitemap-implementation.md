# XML Sitemap Implementation

This document explains how the XML sitemap is implemented in this project and how to maintain it.

## Overview

The sitemap implementation consists of several components:

1. **Static Sitemap**: Generated for static routes using Next.js built-in sitemap generation.
2. **Dynamic Sitemap**: Generated for dynamic routes (blog posts, service pages, service area pages) using a server-side route.
3. **Sitemap Index**: Combines all sitemaps into a single index file.
4. **Robots.txt**: Directs search engines to the sitemaps.

## Files

- `src/app/sitemap.ts`: Generates the static sitemap for fixed routes.
- `src/app/server-sitemap.xml/route.ts`: Generates the dynamic sitemap for programmatically generated pages.
- `src/app/sitemap-index.xml/route.ts`: Generates the sitemap index file.
- `src/app/robots.ts`: Generates the robots.txt file.
- `next-sitemap.config.js`: Configuration for the next-sitemap package.

## How It Works

### Static Sitemap

The `src/app/sitemap.ts` file defines all static routes in the application. When the application is built, Next.js automatically generates a sitemap.xml file based on this configuration.

### Dynamic Sitemap

The `src/app/server-sitemap.xml/route.ts` file generates a sitemap for all dynamic routes:

- Blog posts from Markdown files
- Service pages
- Service area pages (cities)
- Service-specific pages for each city

This file uses the data fetching functions from the application to get all the dynamic routes and generate a sitemap for them.

### Sitemap Index

The `src/app/sitemap-index.xml/route.ts` file generates a sitemap index file that references all the individual sitemaps. This is useful when the site grows and has multiple sitemaps.

### Robots.txt

The `src/app/robots.ts` file generates a robots.txt file that directs search engines to the sitemaps and controls which parts of the site should be crawled.

The robots.txt configuration:
1. **Explicitly allows crawling** of all important content paths including dynamic routes:
   - Static pages (home, about, contact, etc.)
   - Dynamic pages (blog posts, service pages, service area pages)
2. **Blocks crawling** of non-SEO relevant paths:
   - API endpoints
   - Admin pages
   - Next.js internal routes
   - Error pages
   - Preview/draft content
3. **References all sitemaps** for comprehensive indexing

The wildcard (*) in paths like '/blog/*' ensures all dynamic pages under that route are crawlable.

## Maintenance

### Adding New Static Routes

To add new static routes to the sitemap, update the `staticRoutes` array in `src/app/sitemap.ts`.

### Adding New Dynamic Routes

If you add new types of dynamic routes to the application, update the `src/app/server-sitemap.xml/route.ts` file to include these routes in the sitemap.

### Updating the Sitemap Index

If you add new sitemaps, update the `sitemaps` array in `src/app/sitemap-index.xml/route.ts` to include these sitemaps in the index.

### Updating the Robots.txt

When updating the robots.txt configuration in `src/app/robots.ts`, consider the following:

1. **Adding New Sitemaps**: If you add new sitemaps, update the `sitemap` array to include these sitemaps.

2. **Adding New Routes to Allow**: If you add new sections or features to the site that should be crawled:
   - Add the base path to the `allow` array (e.g., `/new-section`)
   - For dynamic routes, include the wildcard pattern (e.g., `/new-section/*`)

3. **Adding New Routes to Disallow**: If you add new sections that should not be crawled:
   - Add the path to the `disallow` array (e.g., `/internal-tools/`)
   - Use trailing slashes for directories to block all contents

4. **User-Agent Specific Rules**: If you need different rules for different crawlers:
   - Add a new object to the `rules` array with the specific `userAgent`
   - Define allow/disallow rules specific to that user agent

## Submission to Search Engines

After deploying the application, submit the sitemap to search engines:

1. Google Search Console: Add the site and submit the sitemap.xml URL.
2. Bing Webmaster Tools: Add the site and submit the sitemap.xml URL.
3. Other search engines: Follow their specific instructions for sitemap submission.

## SEO Best Practices for Robots.txt

When configuring robots.txt, follow these best practices to optimize for search engines:

1. **Be Specific with Allow/Disallow Rules**:
   - Use specific paths rather than overly broad patterns
   - For dynamic content, use wildcards carefully (e.g., `/blog/*`)
   - Consider the crawl budget implications of your rules

2. **Regularly Audit Your Rules**:
   - Review your robots.txt configuration periodically
   - Check Google Search Console for crawl errors related to robots.txt
   - Ensure new site sections are properly included/excluded

3. **Balance Crawlability and Efficiency**:
   - Allow crawling of all SEO-valuable content
   - Block crawling of duplicate, thin, or non-valuable content
   - Consider blocking faceted navigation or filtered views that create duplicate content

4. **Coordinate with Other SEO Elements**:
   - Ensure robots.txt rules align with your sitemap entries
   - Consider using meta robots tags for more granular control
   - Use canonical URLs to manage duplicate content

5. **Testing Your Configuration**:
   - Use Google Search Console's robots.txt tester
   - Verify that important pages are not accidentally blocked
   - Check that search engines can access your sitemaps

## Troubleshooting

If the sitemap is not being generated correctly:

1. Check that the `next-sitemap` package is installed.
2. Check that the `postbuild` script is defined in `package.json`.
3. Check that the `next-sitemap.config.js` file is correctly configured.
4. Check that the dynamic routes are being correctly generated in `src/app/server-sitemap.xml/route.ts`.
5. Check that the sitemap index is correctly referencing all sitemaps in `src/app/sitemap-index.xml/route.ts`.
6. Check that the robots.txt file is correctly referencing all sitemaps in `src/app/robots.ts`.

If you encounter issues with search engine crawling:

1. Verify your robots.txt syntax using Google Search Console's robots.txt tester
2. Check that important pages are not accidentally blocked
3. Ensure all dynamic routes are properly allowed with wildcard patterns
4. Monitor crawl stats in Google Search Console to identify potential issues
