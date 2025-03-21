import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServiceAreaNotFound() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-4xl font-bold mb-6">Service Area Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        We couldn&apos;t find the service area you&apos;re looking for. It may have been moved or doesn&apos;t exist.
      </p>
      <Button asChild>
        <Link href="/service-area">
          View All Service Areas
        </Link>
      </Button>
    </div>
  )
}
