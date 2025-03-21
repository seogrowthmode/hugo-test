import { PageHeader } from "@/components/page-header"
import { schemaConfig } from "@/lib/schema-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Chadix",
  description: "Our commitment to protecting your privacy and personal information. Learn how we collect, use, and safeguard your data.",
  keywords: "privacy policy, data protection, personal information, GDPR, privacy rights, data security",
  alternates: {
    canonical: `${schemaConfig.seo.baseUrl}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy | Chadix",
    description: "Our commitment to protecting your privacy and personal information. Learn how we collect, use, and safeguard your data.",
    type: "website",
    locale: "en_US",
    siteName: "Chadix",
    url: `${schemaConfig.seo.baseUrl}/privacy`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Chadix",
    description: "Our commitment to protecting your privacy and personal information. Learn how we collect, use, and safeguard your data.",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader 
        title="Privacy Policy"
        description="Our commitment to protecting your privacy and personal information."
      />
      <div className="container py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p>
            At Your Company Name, we respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our 
            website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2>The Data We Collect About You</h2>
          <p>
            Personal data, or personal information, means any information about an individual from which that 
            person can be identified. It does not include data where the identity has been removed (anonymous data).
          </p>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2>How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party).</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
            used or accessed in an unauthorized way, altered or disclosed.
          </p>

          <h2>Your Legal Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:
          </p>
          <ul>
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <p>
            Email: privacy@yourcompany.com<br />
            Phone: +1 (555) 123-4567<br />
            Address: 123 Business Ave, Suite 100, City, ST 12345
          </p>
        </div>
      </div>
    </div>
  )
}
