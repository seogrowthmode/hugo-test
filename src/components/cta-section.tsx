import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="rounded-2xl bg-primary shadow-xl overflow-hidden">
          <div className="px-8 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div className="lg:max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to Transform Your Outdoor Space?
              </h2>
              <p className="mt-4 text-lg leading-8 text-primary-foreground/90">
                Take the first step towards a beautiful landscape. Let&apos;s discuss how we can enhance your property.
              </p>
            </div>
            <div className="mt-8 flex flex-shrink-0 flex-col sm:flex-row gap-4 lg:mt-0 lg:ml-8">
              <Link href="/contact">
              <Button 
                  size="lg" 
                  variant="default"
                  className="w-full sm:w-auto font-semibold px-8 shadow-lg bg-secondary text-black hover:bg-secondary hover:shadow-xl transition-all duration-200"
                >
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
