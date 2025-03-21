"use client"

import { MapPin } from "lucide-react"
import Link from "next/link"
import { City } from "@/lib/service-area"
import { cn } from "@/lib/utils"

interface CityCardProps {
  city: City
  className?: string
}

export function CityCard({ city, className }: CityCardProps) {
  return (
    <Link 
      href={`/service-area/${city.cityStateSlug}`}
      className={cn(
        "block p-4 rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-200",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-full bg-primary/10 text-primary">
          <MapPin className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-medium text-lg">{city.city}, {city.state}</h3>
          <p className="text-sm text-muted-foreground">
            {city.services.length} Services Available
          </p>
        </div>
      </div>
    </Link>
  )
}
