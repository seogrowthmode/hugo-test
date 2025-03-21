import { BlogPost, getAllPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog-card"

interface RelatedPostsProps {
  currentPostSlug: string
}

export async function RelatedPosts({ currentPostSlug }: RelatedPostsProps) {
  // Get all posts
  const allPosts = await getAllPosts()
  
  // Filter out the current post and get the latest 3 posts
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPostSlug)
    .slice(0, 3)
  
  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="mt-16 border-t pt-12">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
