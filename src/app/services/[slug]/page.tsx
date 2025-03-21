import { notFound } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { Lightbulb, BarChart3, Users, Palette, Smartphone, Cloud } from "lucide-react"
import { TableOfContents } from "@/components/table-of-contents"
import { ContactCard } from "@/components/contact-card"
import { extractHeadings, parseMarkdown } from "@/lib/services"
import Image from "next/image"
import type { Metadata } from "next"
import { ServiceSchema } from "@/components/schema/service-schema"
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema"

const services = [
  {
    slug: "landscape-design",
    name: "Landscape Design",
    description:
      "Custom landscape design services that transform your outdoor space into a beautiful, functional environment tailored to your specific needs and preferences.",
    icon: Lightbulb,
    image: "/placeholder.jpg",
    content: `## Landscape Design Solutions

Our landscape design service creates beautiful, functional outdoor spaces that enhance your property's value and your quality of life. We combine artistic vision with practical knowledge to create exceptional outdoor environments.

### What We Offer

- Custom residential landscape design
- Commercial landscape planning
- Outdoor living space design
- Sustainable landscape solutions
- 3D visualization and planning

### Design Elements We Incorporate

- Native and adaptive plant selections
- Hardscape features (patios, walkways, walls)
- Water features and irrigation planning
- Outdoor lighting design
- Seasonal interest planning

### Our Design Process

We follow a structured approach to deliver high-quality landscape designs:

1. Site Analysis & Client Consultation
2. Concept Development
3. Detailed Design & Plant Selection
4. Material Specifications
5. Implementation Planning & Support`,
  },
  {
    slug: "lawn-maintenance",
    name: "Lawn Maintenance",
    description:
      "Comprehensive lawn care services including mowing, fertilization, weed control, and seasonal clean-ups to keep your property looking its best year-round.",
    icon: BarChart3,
    image: "/placeholder.jpg",
    content: `## Lawn Maintenance Solutions

Our lawn maintenance services help homeowners and businesses maintain healthy, vibrant lawns throughout the year. We create comprehensive care programs tailored to your specific lawn conditions.

### Core Services

- Professional lawn mowing
- Fertilization programs
- Weed control treatments
- Aeration and overseeding
- Seasonal clean-ups

### Benefits

- Consistent, professional appearance
- Healthier, more resilient turf
- Reduced weed and pest problems
- Time savings for property owners
- Environmentally responsible practices

### Our Approach

We implement a science-based approach to lawn care:

1. Lawn Assessment & Soil Testing
2. Customized Maintenance Plan
3. Regular Service Implementation
4. Monitoring & Adjustments
5. Seasonal Treatments & Special Care`,
  },
  {
    slug: "hardscaping",
    name: "Hardscaping",
    description:
      "Expert installation of patios, walkways, retaining walls, and other hardscape features that add structure, functionality, and value to your outdoor living spaces.",
    icon: Users,
    image: "/placeholder.jpg",
    content: `## Hardscaping Solutions

Our hardscaping services provide durable, beautiful structural elements that enhance your outdoor living space and solve practical problems. We work with quality materials and proven installation techniques.

### Areas of Expertise

- Patio and walkway installation
- Retaining and decorative walls
- Outdoor kitchens and fire features
- Driveway design and installation
- Steps and stone staircases

### Key Benefits

- Increased property value
- Extended outdoor living space
- Reduced maintenance areas
- Improved drainage and erosion control
- Enhanced outdoor aesthetics

### Installation Process

Our comprehensive approach ensures lasting results:

1. Site Evaluation & Design
2. Material Selection
3. Proper Base Preparation
4. Expert Installation
5. Final Detailing & Clean-up`,
  },
  {
    slug: "garden-planting",
    name: "Garden Planting",
    description:
      "Professional planting services featuring carefully selected trees, shrubs, flowers, and native plants that thrive in your specific environment and soil conditions.",
    icon: Palette,
    image: "/placeholder.jpg",
    content: `## Garden Planting Solutions

Our planting services focus on creating beautiful, sustainable plant compositions that thrive in your specific environment. We select and install the right plants in the right places for long-term success.

### Planting Services

- Tree and shrub installation
- Perennial and annual flower gardens
- Native plant gardens
- Edible landscapes and herb gardens
- Seasonal color rotations

### Plant Selection Principles

- Climate and site-appropriate choices
- Four-season interest planning
- Layered planting design
- Pollinator and wildlife support
- Water-wise groupings

### Our Planting Process

We follow a comprehensive approach to ensure plant success:

1. Site Analysis & Soil Testing
2. Plant Selection & Design
3. Proper Soil Preparation
4. Expert Installation Techniques
5. Initial Care & Establishment Support`,
  },
  {
    slug: "irrigation-systems",
    name: "Irrigation Systems",
    description:
      "Custom irrigation system design and installation to ensure your landscape receives the right amount of water efficiently, saving you time and reducing water waste.",
    icon: Smartphone,
    image: "/placeholder.jpg",
    content: `## Irrigation System Solutions

Our irrigation team designs and installs efficient watering systems that keep your landscape healthy while conserving water. We focus on delivering precise amounts of water exactly where and when it's needed.

### System Options

- Drip irrigation for beds and gardens
- Spray systems for lawns
- Smart controller installation
- Rainwater harvesting integration
- System maintenance and upgrades

### Technical Features

- Zone-specific programming
- Weather-based adjustments
- Soil moisture sensors
- Water-saving nozzles and emitters
- Leak detection technology

### Installation Process

Our proven installation process ensures quality:

1. Site Analysis & Water Audit
2. System Design & Planning
3. Professional Installation
4. Programming & Calibration
5. Maintenance & Seasonal Adjustments`,
  },
  {
    slug: "outdoor-lighting",
    name: "Outdoor Lighting",
    description:
      "Professionally designed landscape lighting that enhances the beauty and security of your property while extending your outdoor enjoyment into the evening hours.",
    icon: Cloud,
    image: "/placeholder.jpg",
    content: `## Outdoor Lighting Solutions

Our landscape lighting services help homeowners extend their enjoyment of outdoor spaces while enhancing safety, security, and property aesthetics. We create custom lighting designs for each unique landscape.

### Lighting Applications

- Architectural highlighting
- Path and step lighting
- Tree and garden accent lighting
- Security lighting
- Water feature illumination

### Technology Options

- LED energy-efficient fixtures
- Smart lighting controls
- Solar-powered options
- Color-changing capabilities
- Automated timing systems

### Implementation Process

Our structured approach to lighting design:

1. Evening Site Assessment
2. Lighting Plan Development
3. Quality Fixture Selection
4. Professional Installation
5. Programming & Adjustments`,
  },
]

interface ServicePageProps {
  params: {
    slug: string
  }
}

import { schemaConfig } from "@/lib/schema-config"

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  
  if (!service) {
    return {
      title: "Service Not Found | GreenScape Landscaping"
    }
  }

  const canonicalUrl = `${schemaConfig.seo.baseUrl}/services/${params.slug}`

  return {
    title: `${service.name} | GreenScape Landscaping`,
    description: service.description,
    keywords: `${service.name.toLowerCase()}, professional landscaping, ${service.slug}, landscaping services`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.name} | GreenScape Landscaping`,
      description: service.description,
      type: "website",
      locale: "en_US",
      siteName: "GreenScape Landscaping",
      url: canonicalUrl,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.name,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | GreenScape Landscaping`,
      description: service.description,
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const headings = extractHeadings(service.content)
  const content = parseMarkdown(service.content)

  return (
    <div>
      <ServiceSchema
        name={service.name}
        description={service.description}
        image={service.image}
        url={`/services/${params.slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
          { name: service.name, item: `/services/${params.slug}` }
        ]}
      />
      <PageHeader 
        title={service.name}
        description={service.description}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${params.slug}`, isCurrent: true }
        ]}
      />
      <div className="container py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <service.icon className="h-8 w-8 text-primary" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-bold">{service.name}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          <article>
            <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div 
              className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24
                prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-8
                prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-6
                prose-p:text-base prose-p:leading-7 prose-p:mb-4
                prose-ul:my-6 prose-li:my-2
                prose-ol:my-6 prose-ol:list-decimal"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
          <aside className="hidden lg:block">
            <div className="sticky top-40">
              <TableOfContents 
                headings={headings} 
                title={`${service.name} Services Overview`} 
              />
              <ContactCard />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
