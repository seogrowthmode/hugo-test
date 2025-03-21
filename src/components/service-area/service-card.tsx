"use client"

import { Wrench } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  name: string
  slug: string
  cityStateSlug: string
  className?: string
}

export function ServiceCard({ name, slug, cityStateSlug, className }: ServiceCardProps) {
  return (
    <Link 
      href={`/service-area/${cityStateSlug}/${slug}`}
      className={cn(
        "block p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-200",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-full bg-primary/10 text-primary">
          <Wrench className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            View service details
          </p>
        </div>
      </div>
    </Link>
  )
}
