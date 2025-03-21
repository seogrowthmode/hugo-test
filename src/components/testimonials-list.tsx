"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "./ui/button"

const testimonials = [
  {
    id: 1,
    quote: "Working with this landscaping team has transformed our property. Their attention to detail and dedication to quality have been invaluable.",
    author: "Sarah Johnson",
    role: "Homeowner, Suburban Residence",
    rating: 5,
    image: "/avatar-placeholder.png"
  },
  {
    id: 2,
    quote: "The expertise and professionalism they bring to every project is outstanding. Our garden has never looked more beautiful.",
    author: "Michael Chen",
    role: "Owner, Local Restaurant",
    rating: 5,
    image: "/avatar-placeholder.png"
  },
  {
    id: 3,
    quote: "Their creative designs and attention to detail have completely transformed our outdoor living space. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Homeowner, Family Estate",
    rating: 5,
    image: "/avatar-placeholder.png"
  },
  {
    id: 4,
    quote: "The level of horticultural knowledge and landscaping expertise they bring is exceptional. They've helped us create a sustainable garden beyond our expectations.",
    author: "David Smith",
    role: "Property Manager, Community HOA",
    rating: 5,
    image: "/avatar-placeholder.png"
  },
  {
    id: 5,
    quote: "Outstanding service and results! They truly understand our vision and deliver landscapes that exceed expectations.",
    author: "Lisa Wong",
    role: "Owner, Boutique Hotel",
    rating: 5,
    image: "/avatar-placeholder.png"
  },
  {
    id: 6,
    quote: "A game-changer for our commercial property. Their landscape design has improved our curb appeal and received countless compliments.",
    author: "James Miller",
    role: "Manager, Office Complex",
    rating: 5,
    image: "/avatar-placeholder.png"
  }
]

export function TestimonialsList() {
  const [visibleCount, setVisibleCount] = useState(3)
  const visibleTestimonials = testimonials.slice(0, visibleCount)
  const hasMore = visibleCount < testimonials.length

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, testimonials.length))
  }

  return (
    <div className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto flow-root max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative flex flex-col justify-between rounded-xl bg-card p-6 shadow-md border border-border/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-4 right-4 bg-primary/10 rounded-full p-1.5">
                  <div className="flex gap-x-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 flex-none text-primary"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-4xl text-primary/20 font-serif leading-none">"</div>
                  <div className="text-base leading-7 text-muted-foreground italic">
                    {testimonial.quote}
                  </div>
                  <div className="text-4xl text-primary/20 font-serif leading-none text-right">"</div>
                </div>
                <div className="pt-4 border-t border-border/60">
                  <div className="flex items-center gap-x-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-primary/10 ring-2 ring-primary/20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm leading-6 text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {hasMore && (
            <div className="mt-10 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={handleLoadMore}
              >
                Load More Testimonials
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
