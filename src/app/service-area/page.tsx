import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { getCitiesByState } from "@/lib/service-area"
import { CityStateGroup } from "@/components/service-area/city-state-group"
import { schemaConfig } from "@/lib/schema-config"
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Service Areas | HVAC Services",
  description: "Find HVAC services in your area. We provide reliable heating and cooling solutions across multiple locations.",
  alternates: {
    canonical: `${schemaConfig.seo.baseUrl}/service-area`,
  },
  openGraph: {
    title: "Service Areas | HVAC Services",
    description: "Find HVAC services in your area. We provide reliable heating and cooling solutions across multiple locations.",
    type: "website",
    url: `${schemaConfig.seo.baseUrl}/service-area`,
  },
}

export default function ServiceAreaPage() {
  const citiesByState = getCitiesByState()
  const states = Object.keys(citiesByState).sort()

  return (
    <div>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Service Area", item: "/service-area" }
        ]}
      />
      <PageHeader 
        title="Service Areas" 
        description="Find HVAC services in your area. We provide reliable heating and cooling solutions across multiple locations."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Service Area", href: "/service-area", isCurrent: true }
        ]}
      />
      
      <div className="container py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Serving Communities with Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            We're proud to offer our HVAC services across multiple locations. 
            Select your city below to see the services available in your area.
          </p>
        </div>

        <div className="mt-16">
          {states.map((state) => (
            <CityStateGroup 
              key={state} 
              state={state} 
              cities={citiesByState[state]} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
