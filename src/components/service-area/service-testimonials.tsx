"use client"

import { Star, Quote } from "lucide-react"

interface ServiceTestimonialsProps {
  testimonials: Array<{
    quote: string
  }>
  cityName: string
  serviceName: string
}

export function ServiceTestimonials({ testimonials, cityName, serviceName }: ServiceTestimonialsProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <div className="p-6 rounded-lg border bg-card shadow-sm">
      <h3 className="font-semibold text-lg mb-4">What Our Customers Say</h3>
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`${index !== testimonials.length - 1 ? "mb-4 pb-4 border-b border-primary/10" : ""}`}
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="flex-shrink-0 mt-1">
                <Quote className="h-4 w-4 text-primary" />
              </div>
              <p className="text-sm italic text-muted-foreground">
                {testimonial.quote}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold">
                {serviceName} Customer in {cityName}
              </p>
              <div className="flex gap-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 flex-none text-primary"
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
