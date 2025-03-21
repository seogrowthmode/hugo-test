"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { getServices } from "@/lib/services"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [aboutDropdown, setAboutDropdown] = useState(false)
  const [careerDropdown, setCareerDropdown] = useState(false)
  const [serviceAreasDropdown, setServiceAreasDropdown] = useState(false)

  const services = getServices()

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top Tier - White background with logo, contact info and buttons (hidden on mobile) */}
      <div className="w-full bg-white text-primary hidden md:block border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between min-h-16 py-2">
          {/* Logo (Left) */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-48 h-auto min-h-16 max-h-20 overflow-hidden">
                <Image 
                  src="/logo-placeholder.webp" 
                  alt="Empire State Gardens" 
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>
          
          {/* Buttons (Right) */}
          <div className="flex items-center space-x-4">
            <a href="tel:8324791211">
              <Button className="bg-primary text-white hover:bg-primary/90 font-bold py-2 px-4 rounded-md text-sm transition-colors">
                <Phone size={16} className="mr-2" />
                (832) 479-1211
              </Button>
            </a>
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-2 px-4 rounded-md text-sm transition-colors">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Tier - White background with navigation and social icons */}
      <div className="bg-white">
        <div className="container mx-auto flex items-center justify-between h-16 py-3">
          {/* Mobile Menu Button and Logo */}
          <div className="relative w-full flex items-center justify-center md:hidden">
            {/* Menu Button (Left) */}
            <button
              className="absolute left-0 p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            
            {/* Centered Logo */}
            <Link href="/" className="flex items-center justify-center">
              <div className="relative w-20 h-16 max-h-16 overflow-hidden">
                <Image 
                  src="/logo-placeholder.webp" 
                  alt="Empire State Gardens" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          
          {/* Left Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="justify-start">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[400px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-accent-foreground"
                          href="/about"
                        >
                          <div className="text-sm font-medium leading-none">About Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn more about our company and mission
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-accent-foreground"
                          href="/team"
                        >
                          <div className="text-sm font-medium leading-none">Meet Our Team</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Get to know the people behind our success
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-accent-foreground"
                          href="/testimonials"
                        >
                          <div className="text-sm font-medium leading-none">Testimonials</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            See what our clients say about us
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex select-none items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-accent-foreground"
                            href={`/services/${service.slug}`}
                          >
                            <div>
                              <div className="text-sm font-medium leading-none">{service.name}</div>
                              <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description || "Professional service tailored to your needs"}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li className="md:col-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex w-full select-none items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground p-4 no-underline outline-none transition-all hover:bg-primary/90 focus:shadow-md"
                          href="/services"
                        >
                          <div className="text-sm font-medium">View All Services</div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/service-area" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Service Area
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* Right Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[64px] z-50 max-h-[calc(100vh-56px)] overflow-y-auto bg-background transition-all duration-150 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-2 opacity-0 pointer-events-none"
        )}
      >
        <div className="container py-2">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              className="flex w-full items-center justify-start rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setAboutDropdown(!aboutDropdown)
                }}
                className="flex w-full items-start justify-start gap-2 rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary"
              >
                <span className="flex-1 text-left">About Us</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={`transform transition-transform duration-200 ${aboutDropdown ? 'rotate-90' : ''}`}
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
              <div className={`pl-4 overflow-hidden transition-all duration-200 ${aboutDropdown ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <Link href="/about" className="block py-2 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                <Link href="/team" className="block py-2 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Meet Our Team</Link>
                <Link href="/testimonials" className="block py-2 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setServicesDropdown(!servicesDropdown)
                }}
                className="flex w-full items-start justify-start gap-2 rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary"
              >
                <span className="flex-1 text-left">Services</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={`transform transition-transform duration-200 ${servicesDropdown ? 'rotate-90' : ''}`}
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
              <div className={`pl-4 overflow-hidden transition-all duration-200 ${servicesDropdown ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {services.map((service) => (
                  <Link 
                    key={service.slug}
                    href={`/services/${service.slug}`} 
                    className="block py-2 text-sm hover:text-primary" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link 
                  href="/services" 
                  className="block py-2 text-sm font-medium text-secondary hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  View All Services
                </Link>
              </div>
            </div>

            <Link
              href="/service-area"
              className="flex w-full items-center justify-start rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Service Area
            </Link>
            
            <Link
              href="/blog"
              className="flex w-full items-center justify-start rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="flex w-full items-center justify-start rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="px-4 pt-2 space-y-2">
              <a href="tel:8324791211" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  className="w-full mb-2 bg-primary text-white hover:bg-primary/90 font-bold py-2 px-4 rounded-md text-sm transition-colors"
                >
                  <Phone size={16} className="mr-2" />
                  (832) 479-1211
                </Button>
              </a>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-2 px-4 rounded-md text-sm transition-colors"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
