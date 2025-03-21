import { TestimonialsList } from "@/components/testimonials-list"
import { PageHeader } from "@/components/page-header"
import { schemaConfig } from "@/lib/schema-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Client Testimonials | Chadix",
  description: "Discover what our valued clients have to say about their experiences working with Chadix. Real stories, real results.",
  keywords: "testimonials, client reviews, customer feedback, success stories, client satisfaction",
  alternates: {
    canonical: `${schemaConfig.seo.baseUrl}/testimonials`,
  },
  openGraph: {
    title: "Client Testimonials | Chadix",
    description: "Discover what our valued clients have to say about their experiences working with Chadix. Real stories, real results.",
    type: "website",
    locale: "en_US",
    siteName: "Chadix",
    url: `${schemaConfig.seo.baseUrl}/testimonials`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | Chadix",
    description: "Discover what our valued clients have to say about their experiences working with Chadix. Real stories, real results.",
  },
}

export default function TestimonialsPage() {
  return (
    <main>
      <PageHeader
        title="Client Testimonials"
        description="Discover what our valued clients have to say about their experiences working with us. Real stories, real results."
      />
      <TestimonialsList />
    </main>
  )
}
