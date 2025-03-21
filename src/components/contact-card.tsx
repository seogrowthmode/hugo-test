"use client"

import React from "react"

export function ContactCard() {
  return (
    <div className="mt-6 rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="relative p-6">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
          <div className="absolute rotate-45 bg-primary w-32 h-32 -right-16 -top-16"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-16 h-16 opacity-10">
          <div className="absolute rotate-45 bg-primary w-24 h-24 -left-12 -bottom-12"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <div className="p-1.5 rounded-full bg-primary/20 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-more">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                <path d="M8 10h.01"/>
                <path d="M12 10h.01"/>
                <path d="M16 10h.01"/>
              </svg>
            </div>
            Need Expert Advice?
          </h4>
          
          <p className="text-muted-foreground mb-6 text-[0.9rem]">
            Our specialists can help you choose the perfect services for your specific needs and budget.
          </p>
          
          <a 
            href="/contact" 
            className="inline-flex w-full items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 shadow-sm hover:shadow-md"
          >
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
