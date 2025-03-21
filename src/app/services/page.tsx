import { ServicesSection } from "@/components/services-section"
import { PageHeader } from "@/components/page-header"
import { schemaConfig } from "@/lib/schema-config"
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | GreenScape Landscaping",
  description: "Explore our comprehensive range of professional landscaping services including landscape design, lawn maintenance, hardscaping, garden planting, and more.",
  keywords: "landscape design, lawn maintenance, hardscaping, garden planting, irrigation systems, outdoor lighting, professional landscaping services",
  alternates: {
    canonical: `${schemaConfig.seo.baseUrl}/services`,
  },
  openGraph: {
    title: "Our Services | GreenScape Landscaping",
    description: "Explore our comprehensive range of professional landscaping services including landscape design, lawn maintenance, hardscaping, garden planting, and more.",
    type: "website",
    locale: "en_US",
    siteName: "GreenScape Landscaping",
    url: `${schemaConfig.seo.baseUrl}/services`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | GreenScape Landscaping",
    description: "Explore our comprehensive range of professional landscaping services including landscape design, lawn maintenance, hardscaping, garden planting, and more.",
  },
}

export default function ServicesPage() {
  return (
    <div>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" }
        ]}
      />
      <PageHeader 
        title="Our Services"
        description="Explore our comprehensive range of professional landscaping services tailored to transform your outdoor space."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services", isCurrent: true }
        ]}
      />
      <ServicesSection showAll={true} />
    </div>
  )
}
