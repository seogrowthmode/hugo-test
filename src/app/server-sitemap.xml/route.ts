import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { getAllPosts } from '@/lib/blog'
import { getAllCities, getAllCityServicePaths } from '@/lib/service-area'
import { schemaConfig } from '@/lib/schema-config'

export async function GET() {
  const baseUrl = schemaConfig.seo.baseUrl

  // Get all blog posts
  const posts = await getAllPosts()
  const blogUrls = posts.map((post) => ({
    loc: `${baseUrl}/blog/${post.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly' as const,
    priority: 0.8,
  }))

  // Get all service area cities
  const cities = getAllCities()
  const cityUrls = cities.map((city) => ({
    loc: `${baseUrl}/service-area/${city.cityStateSlug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly' as const,
    priority: 0.7,
  }))

  // Get all city-service combinations
  const cityServicePaths = getAllCityServicePaths()
  const cityServiceUrls = cityServicePaths.map((path) => ({
    loc: `${baseUrl}/service-area/${path.cityStateSlug}/${path.serviceSlug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly' as const,
    priority: 0.6,
  }))

  // Get all service pages
  const serviceUrls = [
    'landscape-design',
    'lawn-maintenance',
    'hardscaping',
    'garden-planting',
    'irrigation-systems',
    'outdoor-lighting'
  ].map((slug) => ({
    loc: `${baseUrl}/services/${slug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly' as const,
    priority: 0.8,
  }))

  // Combine all URLs
  const allUrls: ISitemapField[] = [...blogUrls, ...cityUrls, ...cityServiceUrls, ...serviceUrls]

  return getServerSideSitemap(allUrls)
}
