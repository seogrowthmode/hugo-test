import { getServices } from "@/lib/services"
import Image from "next/image"

interface ServicesSectionProps {
  showAll?: boolean
}

export function ServicesSection({ showAll = false }: ServicesSectionProps) {
  return (
    <div className="py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side: Heading, description, and button */}
          <div className={`lg:col-span-4 flex flex-col ${showAll ? 'lg:sticky lg:top-40 lg:self-start lg:h-fit' : ''}`}>
            <div>
              {/* Services Info - Card style only on services page */}
              {showAll ? (
                <div className="overflow-hidden rounded-xl border bg-gradient-to-br from-card to-card/95 shadow-sm">
                  <div className="relative p-6">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                      <div className="absolute rotate-45 bg-secondary w-32 h-32 -right-16 -top-16"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 rounded-full bg-secondary/20 text-secondary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-checks">
                            <path d="m3 17 2 2 4-4"/>
                            <path d="m3 7 2 2 4-4"/>
                            <path d="M13 6h8"/>
                            <path d="M13 12h8"/>
                            <path d="M13 18h8"/>
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold">Our Services</h2>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">
                        Professional landscaping solutions designed to enhance the beauty and value of your property.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    <span className="text-black">
                      Our Services
                    </span>
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Professional landscaping solutions designed to enhance the beauty and value of your property.
                  </p>
                  
                  <div className="mt-8">
                    <a 
                      href="/services" 
                      className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 shadow-md hover:shadow-lg"
                    >
                      View All Services
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              )}
              
              {showAll && (
                <div className="mt-6 overflow-hidden rounded-xl border bg-gradient-to-br from-primary/5 to-primary/10 shadow-sm">
                  <div className="relative p-6">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                      <div className="absolute rotate-45 bg-primary w-32 h-32 -right-16 -top-16"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 opacity-10">
                      <div className="absolute rotate-45 bg-primary w-24 h-24 -left-12 -bottom-12"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 rounded-full bg-primary/20 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-more">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            <path d="M8 10h.01"/>
                            <path d="M12 10h.01"/>
                            <path d="M16 10h.01"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">Need Expert Advice?</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">
                        Our specialists can help you choose the perfect services for your specific landscape needs and budget.
                      </p>
                      
                      <a 
                        href="/contact" 
                        className="inline-flex w-full items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 shadow-md hover:shadow-lg"
                      >
                        Get in Touch
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                          <path d="M5 12h14"/>
                          <path d="m12 5 7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right side: Service cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {(showAll ? getServices() : getServices().slice(0, 2)).map((service) => (
                <div 
                  key={service.name} 
                  className="group relative flex flex-col overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md bg-gradient-to-br from-card to-card/95 border-t border-l border-r border-b border-primary/5"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute rotate-45 bg-primary/10 text-primary w-28 h-28 -right-14 -top-14"></div>
                  </div>
                  
                  {/* Icon positioned at top-right corner */}
                  <div className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-secondary shadow-md transition-transform group-hover:scale-110">
                    <service.icon className="h-6 w-6 text-secondary-foreground" aria-hidden="true" />
                  </div>
                  
                  {/* Image with overlay gradient */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold leading-tight text-foreground">
                      <a 
                        href={`/services/${service.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {service.name}
                      </a>
                    </h3>
                    <div className="w-12 h-1 bg-secondary my-3 rounded-full transition-all duration-300 group-hover:w-20"></div>
                    <p className="flex-grow text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
