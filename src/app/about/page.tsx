import { AboutSection } from "@/components/about-section"
import { MissionValuesSection } from "@/components/mission-values-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PageHeader } from "@/components/page-header"
import { AboutPageSchema } from "@/components/schema/about-page-schema"
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema"
import { generateCanonicalUrl, generateHreflangMetadata } from "@/lib/hreflang"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Chadix",
  description: "Learn more about Chadix, our mission, values, and the passionate team behind our success.",
  keywords: "about us, company mission, company values, team, company history, web development company",
  alternates: {
    canonical: generateCanonicalUrl('about'),
    languages: generateHreflangMetadata('about'),
  },
  openGraph: {
    title: "About Us | Chadix",
    description: "Learn more about Chadix, our mission, values, and the passionate team behind our success.",
    type: "website",
    locale: "en_US",
    siteName: "Chadix",
    url: generateCanonicalUrl('about'),
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Chadix",
    description: "Learn more about Chadix, our mission, values, and the passionate team behind our success.",
  },
}

export default function AboutPage() {
  return (
    <div>
      <AboutPageSchema 
        description={metadata.description as string}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about" }
        ]}
      />
      <PageHeader 
        title="About Us"
        description="Learn more about our company, our mission, and our values."
      />
      <AboutSection />
      <MissionValuesSection />
      <TestimonialsSection />
    </div>
  )
}
