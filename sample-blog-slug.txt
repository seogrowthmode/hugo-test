import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { TableOfContents } from "@/components/table-of-contents"
import { RelatedPosts } from "@/components/related-posts"
import { AuthorCard } from "@/components/author-card"
import { BlogNavigation } from "@/components/blog-navigation"
import { BlogPostingSchema } from "@/components/schema/blog-posting-schema"
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema"
import { generateCanonicalUrl, generateHreflangMetadata } from "@/lib/hreflang"
import { Breadcrumb } from "@/components/ui/breadcrumb"

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

// Generate static paths at build time
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const { slug } = resolvedParams
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: "Post Not Found"
    }
  }

  const pagePath = `blog/${slug}`
  const canonicalUrl = generateCanonicalUrl(pagePath)

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
      languages: generateHreflangMetadata(pagePath),
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: canonicalUrl,
      images: [
        {
          url: post.image || "/image-placeholder.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    }
  }
}

// Static page component
export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  const post = await getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div>
      <BlogPostingSchema
        title={post.title}
        description={post.excerpt}
        datePublished={post.date}
        author={post.author}
        image={post.image || "/image-placeholder.jpg"}
        url={`/blog/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: post.title, item: `/blog/${slug}` }
        ]}
      />
      <div className="relative h-[400px] mb-16">
        <Image
          src={post.image || "/image-placeholder.jpg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container absolute inset-0 flex flex-col justify-center">
          <div className="mb-4 text-center">
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: post.title, href: `/blog/${slug}`, isCurrent: true }
              ]}
              className="justify-center"
            />
          </div>
          <header className="text-white space-y-4 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
            <div className="text-sm text-white/70">
              <Link href="/about/team" className="hover:underline">
                {post.author}
              </Link>
              {" · "}
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString()}
              </time>
              {" · "}
              <span>
                {Math.ceil(post.content.replace(/<[^>]*>/g, '').length / 1500)} min read
              </span>
            </div>
          </header>
        </div>
      </div>
      <div className="container pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-8">
          <article>
            <div 
              className="prose prose-slate dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="text-sm font-medium">Tags:</span>
                {post.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <AuthorCard authorName={post.author} />
            <BlogNavigation currentPostSlug={slug} />
            <RelatedPosts currentPostSlug={slug} />
          </article>
          <aside className="hidden lg:block">
            <div className="sticky top-40">
              <TableOfContents 
                headings={post.headings} 
                title="Find What You Need" 
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

// Force this page to be static
export const dynamic = "force-static"
