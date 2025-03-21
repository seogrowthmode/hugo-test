import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema"
import { Button } from "@/components/ui/button"
import { getCityBySlug, getAllCities } from "@/lib/service-area"
import { ServiceCard } from "@/components/service-area/service-card"

interface CityServicePageProps {
  params: {
    "city-state-slug": string
  }
}

export async function generateStaticParams() {
  const cities = getAllCities()
  
  return cities.map((city) => ({
    "city-state-slug": city.cityStateSlug,
  }))
}

import { schemaConfig } from "@/lib/schema-config"

export async function generateMetadata({ params }: CityServicePageProps): Promise<Metadata> {
  const cityStateSlug = params["city-state-slug"]
  const city = getCityBySlug(cityStateSlug)
  
  if (!city) {
    return {
      title: "City Not Found",
      description: "The requested city could not be found.",
    }
  }
  
  const canonicalUrl = `${schemaConfig.seo.baseUrl}/service-area/${cityStateSlug}`
  
  return {
    title: city.title || `HVAC Services in ${city.city}, ${city.state}`,
    description: city.metaDescription || `Find reliable HVAC services in ${city.city}, ${city.state}. We offer a range of heating and cooling solutions for your home or business.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: city.title || `HVAC Services in ${city.city}, ${city.state}`,
      description: city.metaDescription || `Find reliable HVAC services in ${city.city}, ${city.state}. We offer a range of heating and cooling solutions for your home or business.`,
      type: "website",
      url: canonicalUrl,
    },
  }
}

export default function CityServicePage({ params }: CityServicePageProps) {
  const cityStateSlug = params["city-state-slug"]
  const city = getCityBySlug(cityStateSlug)
  
  if (!city) {
    notFound()
  }
  
  return (
    <div>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Service Area", item: "/service-area" },
          { name: `${city.city}, ${city.state}`, item: `/service-area/${cityStateSlug}` }
        ]}
      />
      <PageHeader 
        title={`HVAC Services in ${city.city}, ${city.state}`} 
        description={`Find reliable HVAC services for your home or business in ${city.city}, ${city.state}.`}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Service Area", href: "/service-area" },
          { name: `${city.city}, ${city.state}`, href: `/service-area/${cityStateSlug}`, isCurrent: true }
        ]}
      />
      
      <div className="container py-16">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/service-area" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to All Service Areas
            </Link>
          </Button>
        </div>
        
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Available Services in {city.city}, {city.state}
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a comprehensive range of HVAC services in {city.city}. 
            Select a service below to learn more about how we can help you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {city.services.map((service) => (
            <ServiceCard 
              key={service.slug}
              name={service.name}
              slug={service.slug}
              cityStateSlug={city.cityStateSlug}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
