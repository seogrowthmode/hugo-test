"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { Button } from "./ui/button"

interface PaginationProps {
  totalPages: number
}

export function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  // Function to determine which page numbers to show
  const getPageNumbers = () => {
    const MAX_VISIBLE_PAGES = 7; // Maximum number of page buttons to show
    const SIBLINGS = 1; // Number of siblings on each side of current page

    // If we have 7 or fewer pages, show all pages
    if (totalPages <= MAX_VISIBLE_PAGES) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Calculate the start and end of the visible range
    let startPage = Math.max(1, currentPage - SIBLINGS);
    let endPage = Math.min(totalPages, currentPage + SIBLINGS);

    // Adjust the range to show more pages if we're at the start or end
    if (currentPage <= SIBLINGS + 2) {
      // Near the start, show more pages at the beginning
      endPage = MAX_VISIBLE_PAGES - 2; // -2 for the ellipsis and last page
    } else if (currentPage >= totalPages - SIBLINGS - 1) {
      // Near the end, show more pages at the end
      startPage = totalPages - MAX_VISIBLE_PAGES + 3; // +3 for the first page and ellipsis
    }

    // Create the array of page numbers to display
    const pages: (number | string)[] = [];

    // Always add the first page
    pages.push(1);

    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pages.push("...");
    } else if (startPage === 2) {
      pages.push(2);
    }

    // Add the pages around the current page
    for (let i = Math.max(2, startPage); i <= Math.min(totalPages - 1, endPage); i++) {
      pages.push(i);
    }

    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      pages.push("...");
    } else if (endPage === totalPages - 1) {
      pages.push(totalPages - 1);
    }

    // Always add the last page if it's not already included
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-wrap justify-center gap-2 py-8">
      {currentPage <= 1 ? (
        <Button variant="outline" disabled>
          Previous
        </Button>
      ) : (
        <Button variant="outline" asChild>
          <Link href={createPageURL(currentPage - 1)}>Previous</Link>
        </Button>
      )}
      
      {pageNumbers.map((page, index) => (
        page === "..." ? (
          <Button key={`ellipsis-${index}`} variant="outline" disabled className="cursor-default">
            ...
          </Button>
        ) : (
          <Button
            key={`page-${page}`}
            variant={currentPage === page ? "default" : "outline"}
            asChild={typeof page === "number"}
            disabled={typeof page !== "number"}
          >
            {typeof page === "number" ? (
              <Link href={createPageURL(page)}>{page}</Link>
            ) : (
              page
            )}
          </Button>
        )
      ))}

      {currentPage >= totalPages ? (
        <Button variant="outline" disabled>
          Next
        </Button>
      ) : (
        <Button variant="outline" asChild>
          <Link href={createPageURL(currentPage + 1)}>Next</Link>
        </Button>
      )}
    </div>
  )
}
