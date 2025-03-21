"use client"

import React, { useEffect, useState, useRef } from "react"
import { ChevronRight } from "lucide-react"

interface TableOfContentsProps {
  headings: Array<{
    text: string
    level: number
    id: string
  }>
  title?: string // Optional title with default value
}

export function TableOfContents({ headings, title = "On this page" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")
  const tocRef = useRef<HTMLUListElement>(null)
  const activeItemRef = useRef<HTMLLIElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Debug logging to check headings
  useEffect(() => {
    console.log("Headings from props:", headings.map(h => h.id));
    const domHeadings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    console.log("DOM headings:", Array.from(domHeadings).map(el => el.id));
  }, [headings]);

  // Detect active heading using Intersection Observer
  useEffect(() => {
    // Small delay to ensure content is fully rendered
    const timer = setTimeout(() => {
      // Disconnect previous observer if it exists
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Create new observer with simpler configuration
      observerRef.current = new IntersectionObserver(
        (entries) => {
          // Find the first visible heading
          const visibleHeading = entries.find(entry => entry.isIntersecting);
          if (visibleHeading && visibleHeading.target.id) {
            setActiveId(visibleHeading.target.id);
          }
        },
        { 
          // Detect when heading is near the top of viewport
          rootMargin: "-10% 0% -80% 0%",
          threshold: 0.1 // Trigger when at least 10% of the heading is visible
        }
      );

      const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      headingElements.forEach((element) => {
        if (observerRef.current) {
          observerRef.current.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Fallback: Add scroll-based detection
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = Array.from(
        document.querySelectorAll("h1, h2, h3, h4, h5, h6")
      ) as HTMLElement[];
      
      // Find the heading that's closest to the top of the viewport
      const closestHeading = headingElements.reduce((closest: HTMLElement | null, current: HTMLElement) => {
        const rect = current.getBoundingClientRect();
        // Consider headings that are above the middle of the viewport or just below the top
        if (rect.top < window.innerHeight / 2 && rect.top > -100) {
          if (!closest || Math.abs(rect.top) < Math.abs(closest.getBoundingClientRect().top)) {
            return current;
          }
        }
        return closest;
      }, null);
      
      if (closestHeading && closestHeading.id) {
        setActiveId(closestHeading.id);
      }
    };
    
    // Initial check
    handleScroll();
    
    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll the table of contents to keep the active heading visible
  useEffect(() => {
    if (activeId && tocRef.current && activeItemRef.current) {
      // Get the container's dimensions
      const container = tocRef.current;
      const containerHeight = container.clientHeight;
      const containerScrollTop = container.scrollTop;
      const containerScrollBottom = containerScrollTop + containerHeight;
      
      // Get the active item's dimensions
      const activeItem = activeItemRef.current;
      const activeItemTop = activeItem.offsetTop;
      const activeItemHeight = activeItem.clientHeight;
      const activeItemBottom = activeItemTop + activeItemHeight;
      
      // Check if the active item is outside the visible area
      if (activeItemTop < containerScrollTop || activeItemBottom > containerScrollBottom) {
        // Scroll the container to center the active item
        container.scrollTo({
          top: activeItemTop - (containerHeight / 2) + (activeItemHeight / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [activeId]);

  // Set initial active heading if none is set
  useEffect(() => {
    if (!activeId && headings.length > 0) {
      setActiveId(headings[0].id);
    }
  }, [activeId, headings]);

  return (
    <div className="rounded-lg border border-border p-6 shadow-sm">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <nav className="border-t pt-4">
        <ul 
          ref={tocRef} 
          className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--border) transparent'
          }}
        >
          {headings.map((heading) => {
            // Determine styling based on heading level
            const levelStyles = {
              // Font weight decreases with depth
              fontWeight: heading.level === 2 ? '500' : 
                          heading.level === 3 ? '450' : 
                          heading.level === 4 ? '400' : '400',
              // Font size decreases with depth
              fontSize: heading.level === 2 ? '0.9rem' : 
                        heading.level === 3 ? '0.85rem' : 
                        heading.level === 4 ? '0.8rem' : '0.8rem',
            };
            
            // Determine if this item has a connector line (level 3+)
            const hasConnector = heading.level > 2;
            
            return (
              <li
                key={heading.id}
                ref={activeId === heading.id ? activeItemRef : null}
                className={`group relative ${activeId === heading.id ? 'bg-muted/40 rounded-md' : ''}`}
              >
                {/* Connector line for nested items */}
                {hasConnector && (
                  <div className="absolute left-[0.6rem] top-0 h-full w-px bg-border/50" />
                )}
                
                <a
                  href={`#${heading.id}`}
                  style={{
                    ...levelStyles,
                    paddingLeft: `${(heading.level - 1)}rem`,
                  }}
                  className={`flex items-center relative py-1.5 px-2 rounded-md transition-all duration-200 ${
                    activeId === heading.id
                      ? `text-primary font-medium border-l-2 border-primary pl-[calc(${heading.level-1}rem+0.25rem)]`
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                  }`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const target = document.getElementById(heading.id)
                    e.preventDefault()
                    if (target) {
                      target.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  {/* Bullet point for level 3+ */}
                  {hasConnector && (
                    <div className={`absolute left-[0.5rem] w-1.5 h-1.5 rounded-full ${
                      activeId === heading.id ? "bg-primary" : "bg-border"
                    }`} />
                  )}
                  
                  {/* Chevron only for level 2 */}
                  {heading.level === 2 && (
                    <ChevronRight
                      className={`w-3 h-3 transition-opacity duration-200 ${
                        activeId === heading.id ? "opacity-100 text-primary" : "opacity-50 group-hover:opacity-100"
                      }`}
                    />
                  )}
                  
                  <span className={`${
                    activeId === heading.id ? "translate-x-1" : "group-hover:translate-x-1"
                  } transition-transform duration-200`}>
                    {heading.text}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  )
}
