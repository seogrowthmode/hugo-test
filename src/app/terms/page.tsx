import { PageHeader } from "@/components/page-header"
import { schemaConfig } from "@/lib/schema-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Chadix",
  description: "Please read these terms and conditions carefully before using our services. Learn about the rules and regulations for using Chadix's website and services.",
  keywords: "terms of service, terms and conditions, legal terms, user agreement, service terms, website terms",
  alternates: {
    canonical: `${schemaConfig.seo.baseUrl}/terms`,
  },
  openGraph: {
    title: "Terms of Service | Chadix",
    description: "Please read these terms and conditions carefully before using our services. Learn about the rules and regulations for using Chadix's website and services.",
    type: "website",
    locale: "en_US",
    siteName: "Chadix",
    url: `${schemaConfig.seo.baseUrl}/terms`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Chadix",
    description: "Please read these terms and conditions carefully before using our services. Learn about the rules and regulations for using Chadix's website and services.",
  },
}

export default function TermsPage() {
  return (
    <div>
      <PageHeader 
        title="Terms of Service"
        description="Please read these terms and conditions carefully before using our services."
      />
      <div className="container py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p>
            These terms and conditions outline the rules and regulations for the use of Your Company Name's website.
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use
            Your Company Name's website if you do not accept all of the terms and conditions stated on this page.
          </p>

          <h2>License to Use Website</h2>
          <p>
            Unless otherwise stated, Your Company Name and/or its licensors own the intellectual property rights
            for all material on this website. All intellectual property rights are reserved. You may view and/or
            print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <p>
            You must not:
          </p>
          <ul>
            <li>Republish material from this website</li>
            <li>Sell, rent or sub-license material from this website</li>
            <li>Reproduce, duplicate or copy material from this website</li>
            <li>Redistribute content from this website</li>
          </ul>

          <h2>User Content</h2>
          <p>
            In these terms and conditions, "User Content" means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose.
          </p>
          <p>
            You grant to Your Company Name a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your User Content in any existing or future media. You also grant to Your Company Name the right to sub-license these rights, and the right to bring an action for infringement of these rights.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            The materials on Your Company Name's website are provided on an 'as is' basis. Your Company Name makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            In no event shall Your Company Name or its suppliers be liable for any consequential loss suffered or incurred by you or any third party arising from the use or inability to use this website or the materials on this website, even if Your Company Name or an authorized representative has been notified, orally or in writing, of the possibility of such damage.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State] and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            Your Company Name reserves the right to modify these terms and conditions at any time. We do so by posting modified terms and conditions on this page. Your continued use of the website after any such changes constitutes your acceptance of the new terms and conditions.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p>
            Email: legal@yourcompany.com<br />
            Phone: +1 (555) 123-4567<br />
            Address: 123 Business Ave, Suite 100, City, ST 12345
          </p>
        </div>
      </div>
    </div>
  )
}
