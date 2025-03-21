import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog-card"
import { getAllPosts, BlogPost } from "@/lib/blog"
import Link from "next/link"
import Image from "next/image"

export async function BlogPreviewSection() {
  const posts = await getAllPosts()
  // Get only the first 2 posts for the preview
  const previewPosts = posts.slice(0, 2)
  
  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          
          {/* Left side: Heading, description, and button */}
          <div className="lg:col-span-4 flex flex-col">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                <span className="text-black">
                  Landscaping Tips
                </span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Stay updated with our latest articles, seasonal gardening tips, and landscaping insights to help your outdoor space thrive.
              </p>
              
              <div className="mt-8">
                <Button asChild>
                  <Link href="/blog">
                    View All Posts
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right side: Blog cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {previewPosts.map((post: BlogPost) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
