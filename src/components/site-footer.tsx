import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { getServices } from "@/lib/services"

const navigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
  contact: [
    {
      icon: Mail,
      text: "contact@company.com",
      href: "mailto:contact@company.com",
    },
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      text: "123 Business Ave, Suite 100, City, ST 12345",
      href: "#",
    },
  ],
}

export async function SiteFooter() {
  const services = getServices().map(service => ({
    name: service.name,
    href: `/services/${service.slug}`
  }))

  const navigationWithServices = {
    ...navigation,
    services
  }
  return (
    <footer className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-8">
          {/* Company Info */}
          <div className="mb-10 md:mb-0 md:max-w-xs">
            <Image 
              src="/logo-placeholder.webp" 
              alt="Chadix Logo" 
              width={150} 
              height={50} 
              className="mb-4"
            />
            <p className="text-sm text-muted-foreground mb-6">
              Automate Your SEO With High-Quality AI Content
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {navigationWithServices.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={item.name === 'Facebook' || item.name === 'Twitter' 
                    ? "text-muted-foreground hover:text-primary transition-colors" 
                    : "text-muted-foreground hover:text-secondary transition-colors"}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex-1">
            <div>
              <h3 className="text-sm font-medium text-foreground">Services</h3>
              <ul role="list" className="mt-4 space-y-2">
                {navigationWithServices.services.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-xs text-muted-foreground hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground">Company</h3>
              <ul role="list" className="mt-4 space-y-2">
                {navigationWithServices.company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-xs text-muted-foreground hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-sm font-medium text-foreground mt-8">Legal</h3>
              <ul role="list" className="mt-4 space-y-2">
                {navigationWithServices.legal.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-xs text-muted-foreground hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground">Contact</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigationWithServices.contact.map((item) => (
                  <li key={item.text}>
                    <Link
                      href={item.href}
                      className="text-xs text-muted-foreground hover:underline flex items-start gap-2"
                    >
                      <item.icon className="h-4 w-4 text-secondary flex-shrink-0" aria-hidden="true" />
                      <span className="flex-1">{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 border-t border-secondary/10 pt-6">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
