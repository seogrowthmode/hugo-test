"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ServiceDetail } from "@/lib/service-area"

interface ServiceContactProps {
  serviceDetail: ServiceDetail
}

export function ServiceContact({ serviceDetail }: ServiceContactProps) {
  if (!serviceDetail.phoneNumber && !serviceDetail.email && !serviceDetail.address) {
    return null
  }

  return (
    <div className="p-6 rounded-lg border bg-card shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
      <div className="space-y-4">
        {serviceDetail.phoneNumber && (
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">{serviceDetail.phoneNumber}</p>
            </div>
          </div>
        )}
        
        {serviceDetail.email && (
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{serviceDetail.email}</p>
            </div>
          </div>
        )}
        
        {serviceDetail.address && (
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Address</p>
              <p className="font-medium">{serviceDetail.address}</p>
            </div>
          </div>
        )}
      </div>
      
      {serviceDetail.contactPageUrl && (
        <div className="mt-6">
          <Button asChild className="w-full">
            <Link href={serviceDetail.contactPageUrl}>
              Schedule a Service
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
