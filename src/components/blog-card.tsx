import Link from "next/link"
import Image from "next/image"
import { BlogPost } from "@/lib/blog"
import { CalendarDays, User, ArrowRight, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getImageAltText } from "@/lib/utils"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border shadow-sm bg-card transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]">
      {/* Image Container with Overlay */}
      <div className="relative w-full">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <Image
            src={post.image || "/image-placeholder.jpg"}
            alt={getImageAltText(post.title, post.author)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category/Author Tags - Positioned at top */}
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <User className="mr-1 h-3 w-3" />
            {post.author}
          </span>
          
          {post.categories && post.categories.length > 0 && (
            <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
              <Tag className="mr-1 h-3 w-3" />
              {post.categories[0]}
            </span>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold leading-tight tracking-tight mb-3 group-hover:text-primary transition-colors duration-200">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {post.title}
          </Link>
        </h3>
        
        {/* Description */}
        <p className="line-clamp-3 text-sm text-muted-foreground mb-4 flex-grow">
          {post.excerpt || post.description}
        </p>
        
        {/* Footer: Date and Read More */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/40">
          <time dateTime={post.date} className="text-xs text-muted-foreground flex items-center">
            <CalendarDays className="mr-1.5 h-3 w-3" />
            {new Date(post.date).toLocaleDateString()}
          </time>
          
          <span className="text-sm font-medium text-primary flex items-center group-hover:translate-x-1 transition-transform duration-200">
            Read More
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </article>
  )
}
