import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const features = [
  "Custom landscape designs tailored to your property",
  "Sustainable planting and maintenance practices",
  "Expert hardscaping and outdoor living spaces",
  "Seasonal care and ongoing maintenance services",
]

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column - Now on the left */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image 
              src="/placeholder.jpg" 
              alt="Our team collaborating on digital solutions" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          
          {/* Content Column - Now on the right */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Transforming Outdoor Spaces into <span className="text-primary">
                  Natural Retreats
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                At our core, we believe in the power of thoughtful landscaping to transform properties and create meaningful outdoor experiences. 
                Our passionate team of landscape designers, horticulturists, and installation experts work together to bring your vision to life with 
                precision and creativity.
              </p>
            </div>
            
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <Link href="/about">
                <Button size="lg">
                  Discover Our Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
