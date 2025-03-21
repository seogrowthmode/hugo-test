import { AboutSection } from "@/components/about-section"
import { BlogPreviewSection } from "@/components/blog-preview-section"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { generateCanonicalUrl, generateHreflangMetadata } from "@/lib/hreflang"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chadix | Modern Web Solutions for Growing Businesses",
  description: "Transform your business with Chadix's cutting-edge web development, digital marketing, and business solutions. Get expert services tailored for modern enterprises.",
  keywords: "web development, digital marketing, business solutions, modern enterprise, professional services",
  alternates: {
    canonical: generateCanonicalUrl(),
    languages: generateHreflangMetadata(),
  },
  openGraph: {
    title: "Chadix | Modern Web Solutions for Growing Businesses",
    description: "Transform your business with Chadix's cutting-edge web development, digital marketing, and business solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Chadix",
    url: generateCanonicalUrl(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Chadix | Modern Web Solutions",
    description: "Transform your business with Chadix's cutting-edge web development and digital solutions.",
  },
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <BlogPreviewSection />
    </>
  )
}
