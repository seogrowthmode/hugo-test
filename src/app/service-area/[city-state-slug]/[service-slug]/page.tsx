import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema"
import { Button } from "@/components/ui/button"
import { 
  getCityBySlug, 
  getServiceDetails, 
  getAllCityServicePaths
} from "@/lib/service-area"
import { ServiceDetailComponent } from "@/components/service-area/service-detail"
import { ServiceTestimonials } from "@/components/service-area/service-testimonials"
import { ServiceContact } from "@/components/service-area/service-contact"

interface ServiceDetailPageProps {
  params: {
    "city-state-slug": string
    "service-slug": string
  }
}

export async function generateStaticParams() {
  const paths = getAllCityServicePaths()
  
  return paths.map((path) => ({
    "city-state-slug": path.cityStateSlug,
    "service-slug": path.serviceSlug,
  }))
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const cityStateSlug = params["city-state-slug"]
  const serviceSlug = params["service-slug"]
  
  const city = getCityBySlug(cityStateSlug)
  if (!city) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    }
  }
  
  const serviceDetail = getServiceDetails(cityStateSlug, serviceSlug)
  if (!serviceDetail) {
    return {
      title: `Service Not Found in ${city.city}, ${city.state}`,
      description: `The requested service in ${city.city}, ${city.state} could not be found.`,
    }
  }
  
  return {
    title: serviceDetail.title || `${serviceDetail.service} in ${serviceDetail.city}, ${serviceDetail.state}`,
    description: serviceDetail.metaDescription || `Professional ${serviceDetail.service} services in ${serviceDetail.city}, ${serviceDetail.state}. Fast, reliable, and efficient service.`,
    openGraph: {
      title: serviceDetail.title || `${serviceDetail.service} in ${serviceDetail.city}, ${serviceDetail.state}`,
      description: serviceDetail.metaDescription || `Professional ${serviceDetail.service} services in ${serviceDetail.city}, ${serviceDetail.state}. Fast, reliable, and efficient service.`,
      type: "website",
    },
    alternates: {
      canonical: serviceDetail.canonicalUrl || undefined,
    },
  }
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const cityStateSlug = params["city-state-slug"]
  const serviceSlug = params["service-slug"]
  
  const city = getCityBySlug(cityStateSlug)
  if (!city) {
    notFound()
  }
  
  const serviceDetail = getServiceDetails(cityStateSlug, serviceSlug)
  if (!serviceDetail) {
    notFound()
  }
  
  
  return (
    <div>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Service Area", item: "/service-area" },
          { name: `${serviceDetail.city}, ${serviceDetail.state}`, item: `/service-area/${cityStateSlug}` },
          { name: serviceDetail.service, item: `/service-area/${cityStateSlug}/${serviceSlug}` }
        ]}
      />
      <PageHeader 
        title={`${serviceDetail.service} in ${serviceDetail.city}, ${serviceDetail.state}`} 
        description={`Professional ${serviceDetail.service} services in ${serviceDetail.city}, ${serviceDetail.state}. Fast, reliable, and efficient service.`}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Service Area", href: "/service-area" },
          { name: `${serviceDetail.city}, ${serviceDetail.state}`, href: `/service-area/${cityStateSlug}` },
          { name: serviceDetail.service, href: `/service-area/${cityStateSlug}/${serviceSlug}`, isCurrent: true }
        ]}
      />
      
      <div className="container py-16">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href={`/service-area/${cityStateSlug}`} className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to {city.city} Services
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                {serviceDetail.service} in {serviceDetail.city}, {serviceDetail.state}
              </h1>
              <p className="text-xl text-muted-foreground">
                Professional {serviceDetail.service.toLowerCase()} services tailored to the unique needs of {serviceDetail.city} residents.
              </p>
            </div>
            
            <ServiceDetailComponent serviceDetail={serviceDetail} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <ServiceContact serviceDetail={serviceDetail} />
              
              {/* Testimonials */}
              <ServiceTestimonials 
                testimonials={serviceDetail.testimonials} 
                cityName={serviceDetail.city}
                serviceName={serviceDetail.service}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
