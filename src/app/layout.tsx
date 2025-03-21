import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { OrganizationSchema } from "@/components/schema/organization-schema"
import { WebsiteSchema } from "@/components/schema/website-schema"
import { schemaConfig } from "@/lib/schema-config"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chadix | Modern Web Solutions for Growing Businesses",
  description: "Transform your business with Chadix's cutting-edge web development, digital marketing, and business solutions. Get expert services tailored for modern enterprises.",
  keywords: "web development, digital marketing, business solutions, modern enterprise, professional services",
  icons: {
    icon: [
      { url: '/next.svg', type: 'image/svg+xml' }
    ]
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: `${schemaConfig.seo.baseUrl}`,
    languages: {
      'en': `${schemaConfig.seo.baseUrl}`,
    },
  },
  openGraph: {
    title: "Chadix | Modern Web Solutions for Growing Businesses",
    description: "Transform your business with Chadix's cutting-edge web development, digital marketing, and business solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Chadix",
    url: `${schemaConfig.seo.baseUrl}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chadix | Modern Web Solutions",
    description: "Transform your business with Chadix's cutting-edge web development and digital solutions.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <WebsiteSchema description={metadata.description as string} />
      </head>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            {children}
            <CTASection />
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
