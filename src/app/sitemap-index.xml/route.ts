import { getServerSideSitemapIndex } from 'next-sitemap'
import { schemaConfig } from '@/lib/schema-config'

export async function GET() {
  const baseUrl = schemaConfig.seo.baseUrl
  
  // Define the sitemaps to include in the index
  const sitemaps = [
    `${baseUrl}/sitemap.xml`,
    `${baseUrl}/server-sitemap.xml`,
  ]
  
  return getServerSideSitemapIndex(sitemaps)
}
