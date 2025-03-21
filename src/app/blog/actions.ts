"use server"

import { getAllPosts, getTotalPages } from "@/lib/blog"

const POSTS_PER_PAGE = 6

export async function getPaginatedPosts(page: number = 1) {
  const currentPage = Math.max(1, page)
  const posts = await getAllPosts(currentPage, POSTS_PER_PAGE)
  const totalPages = await getTotalPages(POSTS_PER_PAGE)

  return {
    posts,
    totalPages,
    currentPage,
  }
}
