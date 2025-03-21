import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb"

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div 
      className="relative" 
      style={{ 
        backgroundColor: 'hsl(var(--primary))',
        backgroundImage: 'radial-gradient(rgba(48, 54, 177, 0.8) 0.5px, hsl(var(--primary)) 0.5px)',
        backgroundSize: '10px 10px'
      }}
      aria-label="Page header background with polka dot pattern"
      role="img"
    >
      {/* Content container */}
      <div className="container py-20 relative z-10 text-white">
        {breadcrumbs && (
          <div className="flex justify-center mb-8">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-2">{title}</h1>
          {description && (
            <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}
