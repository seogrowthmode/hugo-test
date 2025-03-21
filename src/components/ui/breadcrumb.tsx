import Link from "next/link"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  name: string
  href: string
  isCurrent?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol className="flex items-center flex-wrap bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-muted-foreground/50" aria-hidden="true">/</span>
            )}
            {item.isCurrent ? (
              <span 
                className="font-medium text-primary" 
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <Link 
                href={item.href} 
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:underline underline-offset-4"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
