import { TeamSection } from "@/components/team-section"
import { PageHeader } from "@/components/page-header"
import { schemaConfig } from "@/lib/schema-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team | Chadix",
  description: "Meet the passionate professionals behind Chadix. Our team of experts is dedicated to delivering exceptional results for our clients.",
  keywords: "team members, company team, experts, professionals, leadership, web development team",
  alternates: {
    canonical: `${schemaConfig.seo.baseUrl}/team`,
  },
  openGraph: {
    title: "Our Team | Chadix",
    description: "Meet the passionate professionals behind Chadix. Our team of experts is dedicated to delivering exceptional results for our clients.",
    type: "website",
    locale: "en_US",
    siteName: "Chadix",
    url: `${schemaConfig.seo.baseUrl}/team`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Chadix",
    description: "Meet the passionate professionals behind Chadix. Our team of experts is dedicated to delivering exceptional results for our clients.",
  },
}

export default function TeamPage() {
  return (
    <div>
      <PageHeader 
        title="Meet Our Team"
        description="Get to know the passionate professionals behind our success."
      />
      <TeamSection />
    </div>
  )
}
