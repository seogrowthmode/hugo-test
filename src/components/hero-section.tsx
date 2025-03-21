"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image - Different for mobile/tablet vs desktop */}
        {/* Mobile/Tablet Background (with Overlay) */}
        <div className="absolute inset-0 -z-10 block lg:hidden">
          <Image 
            src="/hero-image.webp" 
            alt="Hero Background" 
            fill 
            priority
            className="object-cover"
          />
          {/* Gradient overlay of primary color and black */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-black/90 mix-blend-multiply"></div>
        </div>
        
        {/* Desktop Background (Using same image as mobile) */}
        <div className="absolute inset-0 -z-10 hidden lg:block">
          <Image 
            src="/hero-image.webp" 
            alt="Hero Background" 
            fill 
            priority
            className="object-cover"
          />
          {/* Gradient overlay of primary color and black for desktop */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-black/90 mix-blend-multiply"></div>
        </div>
        
        <div className="container py-16 sm:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content column */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
                  Transform Your Outdoor Space into a <span className="text-secondary">
                    Natural Paradise
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-xl drop-shadow">
                  We help homeowners and businesses create beautiful, sustainable landscapes
                  that enhance property value and provide enjoyment for years to come.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/services">
                  <Button size="lg" variant="secondary" className="font-medium shadow-lg hover:shadow-xl transition-shadow">
                    Learn More
                  </Button>
                </Link>
                <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white/70 bg-white/10 backdrop-blur-sm hover:bg-white/20">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Contact Form column */}
            <div className="bg-primary rounded-xl shadow-2xl p-6 md:p-12">
              <h2 className="text-2xl font-bold mb-6 text-left text-primary-foreground">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-primary-foreground">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-primary-foreground/20 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-primary-foreground">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-primary-foreground/20 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-primary-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-primary-foreground/20 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-primary-foreground">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-primary-foreground/20 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-lg border border-primary-foreground/20 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Button 
                    type="submit" 
                    className="w-full px-4 bg-secondary text-secondary-foreground hover:bg-secondary/90" 
                    size="lg"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
