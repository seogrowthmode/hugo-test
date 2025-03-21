import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogPost, getAllPosts } from "@/lib/blog";

interface BlogNavigationProps {
  currentPostSlug: string;
}

export async function BlogNavigation({ currentPostSlug }: BlogNavigationProps) {
  // Get all posts
  const allPosts = await getAllPosts();
  
  // Find the index of the current post
  const currentPostIndex = allPosts.findIndex(post => post.slug === currentPostSlug);
  
  // If the post is not found, return null
  if (currentPostIndex === -1) {
    return null;
  }
  
  // Get the previous and next posts
  const previousPost = currentPostIndex < allPosts.length - 1 ? allPosts[currentPostIndex + 1] : null;
  const nextPost = currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null;
  
  // If there are no previous or next posts, return null
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <div className="mt-8 mb-8 border-t border-b border-gray-200 dark:border-gray-800 py-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {previousPost ? (
          <Link 
            href={`/blog/${previousPost.slug}`}
            className="flex items-center group text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ChevronLeft className="mr-2 h-5 w-5 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Previous Blog</div>
              <div className="font-medium">{previousPost.title}</div>
            </div>
          </Link>
        ) : (
          <div></div> // Empty div to maintain layout when there's no previous post
        )}
        
        {nextPost ? (
          <Link 
            href={`/blog/${nextPost.slug}`}
            className="flex items-center group text-right sm:ml-auto text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Next Blog</div>
              <div className="font-medium">{nextPost.title}</div>
            </div>
            <ChevronRight className="ml-2 h-5 w-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <div></div> // Empty div to maintain layout when there's no next post
        )}
      </div>
    </div>
  );
}
