import { getPaginatedPosts } from "./actions"
import { PageHeader } from "@/components/page-header"
import { BlogPosts } from "@/components/blog-posts"
import { Suspense } from "react"
import { Spinner } from "@/components/ui/spinner"
import { schemaConfig } from "@/lib/schema-config"
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Chadix",
  description: "Read our latest blog posts and articles about web development, design, and technology.",
  keywords: "blog, articles, web development, design, technology, tutorials, insights, industry news",
  alternates: {
    canonical: `${schemaConfig.seo.baseUrl}/blog`,
  },
  openGraph: {
    title: "Blog | Chadix",
    description: "Read our latest blog posts and articles about web development, design, and technology.",
    type: "website",
    locale: "en_US",
    siteName: "Chadix",
    url: `${schemaConfig.seo.baseUrl}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Chadix",
    description: "Read our latest blog posts and articles about web development, design, and technology.",
  },
}

export default async function BlogPage() {
  const { posts, totalPages } = await getPaginatedPosts(1)

  return (
    <div>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" }
        ]}
      />
      <PageHeader
        title="Blog"
        description="Read our latest blog posts and articles about web development, design, and technology."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog", isCurrent: true }
        ]}
      />
      <Suspense fallback={
        <div className="container py-12 flex items-center justify-center min-h-[200px]">
          <Spinner />
        </div>
      }>
        <div className="py-12">
          <BlogPosts initialPosts={posts} initialTotalPages={totalPages} />
        </div>
      </Suspense>
    </div>
  )
}
