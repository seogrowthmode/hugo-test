"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { BlogCard } from "./blog-card"
import { Pagination } from "./pagination"
import { Spinner } from "./ui/spinner"
import { BlogPost } from "@/lib/blog"
import { getPaginatedPosts } from "@/app/blog/actions"

interface BlogPostsProps {
  initialPosts: BlogPost[]
  initialTotalPages: number
}

export function BlogPosts({ initialPosts, initialTotalPages }: BlogPostsProps) {
  const searchParams = useSearchParams()
  const [posts, setPosts] = useState(initialPosts)
  const [totalPages, setTotalPages] = useState(initialTotalPages)
  const [isLoading, setIsLoading] = useState(false)
  const currentPage = Number(searchParams.get("page")) || 1

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true)
        const { posts: newPosts, totalPages: newTotalPages } = await getPaginatedPosts(currentPage)
        setPosts(newPosts)
        setTotalPages(newTotalPages)
        // Scroll to top smoothly when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } catch (error) {
        console.error("Error fetching posts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [currentPage])

  return (
    <div className="container space-y-8">
      <div className="relative min-h-[200px]">
        <div className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-200 ${isLoading ? 'opacity-50' : ''}`}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50">
            <Spinner />
          </div>
        )}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  )
}
