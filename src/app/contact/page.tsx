import { ContactSection } from "@/components/contact-section"
import { PageHeader } from "@/components/page-header"
import { ContactPageSchema } from "@/components/schema/contact-page-schema"
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema"
import { schemaConfig } from "@/lib/schema-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Chadix",
  description: "Get in touch with our team. We're here to help and answer any questions you might have about our services.",
  keywords: "contact us, get in touch, contact form, business inquiry, support, customer service",
  alternates: {
    canonical: `${schemaConfig.seo.baseUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us | Chadix",
    description: "Get in touch with our team. We're here to help and answer any questions you might have about our services.",
    type: "website",
    locale: "en_US",
    siteName: "Chadix",
    url: `${schemaConfig.seo.baseUrl}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Chadix",
    description: "Get in touch with our team. We're here to help and answer any questions you might have about our services.",
  },
}

export default function ContactPage() {
  return (
    <div>
      <ContactPageSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Contact Us", item: "/contact" }
        ]}
      />
      <PageHeader 
        title="Contact Us"
        description="Get in touch with our team. We're here to help and answer any questions you might have."
      />
      <ContactSection />
    </div>
  )
}
