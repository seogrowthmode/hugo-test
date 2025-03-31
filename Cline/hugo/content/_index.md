---
title: Home
# Front matter data remains the same for now
client_logos:
  - name: "Customer 1"
    logo: "/images/logos/customer-1.png"
  - name: "Customer 2"
    logo: "/images/logos/customer-2.png"
  - name: "Customer 3"
    logo: "/images/logos/customer-3.png"
  - name: "Customer 4"
    logo: "/images/logos/customer-4.png"
  - name: "Customer 5"
    logo: "/images/logos/customer-5.png"
testimonials:
  - name: "John Smith"
    title: "CTO at TechStartup"
    avatar: "/images/testimonial-1.svg"
    quote: "We built our SaaS website in record time. The performance is incredible, and our users love the modern, clean design."
  - name: "Sarah Johnson"
    title: "Founder at WebFlow"
    avatar: "/images/testimonial-1.svg"
    quote: "The combination of Hugo and TailwindCSS delivers lightning-fast performance. Our website loads instantly, which has significantly improved our conversion rates."
  - name: "Michael Chen"
    title: "Lead Developer at CloudTech"
    avatar: "/images/testimonial-1.svg"
    quote: "This theme made it easy to create a professional SaaS website. The build times are incredibly fast, and the code is clean and maintainable."
---

<!-- 1. Hero Section -->
{{< hero 
    headline="Build Your SaaS Website"
    sub_headline="Create stunning, responsive websites that load instantly. Built with Hugo and TailwindCSS for maximum performance and flexibility."
    primary_button_text="Get Started Free"
    primary_button_url="#"
    secondary_button_text="View Demo" 
    secondary_button_url="#"
    hero_image="/images/hero-dashboard.svg"
    gradient-from="#dbeafe"
    gradient-to="#f3e8ff"
    gradient-angle="180"
>}}

<!-- 2. Trust Indicators Section -->
## Trust Indicators Headline Placeholder
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  <div>
    {{< client-logos animate="true" >}}
  </div>
  <div>
    <!-- Placeholder for Stats/Metrics -->
    <p>Stats/Metrics Placeholder - Need shortcode or content here.</p>
    <!-- Example using potential 'stat' shortcode if available -->
    <!-- {{< stat value="99%" label="Uptime" >}} -->
    <!-- {{< stat value="10k+" label="Users" >}} -->
  </div>
</div>

<!-- 3. Problem-Solution Section -->
## Problem-Solution Headline Placeholder
<p>Pain Point/Benefit Text Placeholder</p>
<p>Visual Element Placeholder</p>
<p>Secondary CTA Button Placeholder</p>
<!-- Placeholder - Need shortcode or content here. Maybe adapt 'feature'? -->
<!-- {{< feature title="Solve Your Problem" description="..." image="..." buttonText="Learn How" buttonLink="#" imagePosition="right" >}} -->

<!-- 4. Key Features Section -->
{{< features-section 
    title="Key Features Headline Placeholder"
    description="Discover how our theme helps you build fast, beautiful SaaS websites with ease."
>}}
{{< feature
    title="Feature 1 Title"
    description="Feature 1 Text Placeholder"
    image="/images/feature-1.svg" 
    # Removed badge, button, features list for simplicity based on wireframe
>}}
{{< feature
    title="Feature 2 Title"
    description="Feature 2 Text Placeholder"
    image="/images/feature-2.svg" 
>}}
{{< feature
    title="Feature 3 Title"
    description="Feature 3 Text Placeholder"
    image="/images/feature-3.svg" 
>}}
{{< /features-section >}}

<!-- 5. Case Studies Section -->
## Case Studies Headline Placeholder
<!-- Placeholder - Need shortcode or content here. Maybe 'case-study-card' or 'testimonials'? -->
<p>Image/Visual Placeholder</p>
<p>Reviews/Stats Placeholder (using testimonials data?)</p>
<!-- {{< testimonials title="" description="" >}} --> 
<!-- Or maybe {{< case-study-card ... >}} -->

<!-- 6. Integrations & Partners Section -->
## Integrations & Partners Headline Placeholder
<!-- Placeholder - Need shortcode or content here. Maybe reuse 'client-logos'? -->
<p>Integration Logos Row Placeholder</p>
<p>Partner/Cert. Badges Row Placeholder</p>
<!-- {{< client-logos title="Integrations" >}} -->
<!-- {{< client-logos title="Partners" >}} -->

<!-- 7. Primary Call to Action Section -->
## Primary Call to Action Headline Placeholder
<!-- Using existing CTA shortcode, might need parameter adjustments -->
{{< cta 
    headline="Ready to Get Started?" 
    sub_headline="Risk Reducer Text Placeholder" 
    primary_button_text="Primary CTA Btn Placeholder" 
    primary_button_url="#" 
>}}

<!-- 8. FAQ Section -->
## FAQ Headline Placeholder
<!-- Placeholder - Need shortcode or content here. Maybe 'faq'? -->
<p>Question/Answer 1 Placeholder</p>
<p>Question/Answer 2 Placeholder</p>
<!-- {{< faq >}} -->
<!-- {{< faqitem question="Q1?" answer="A1" >}} -->
<!-- {{< faqitem question="Q2?" answer="A2" >}} -->
<!-- {{< /faq >}} -->

<!-- 9. Next Steps / Final Contact -->
<!-- Placeholder - Might belong in footer partial -->
<p>Next steps Text Placeholder</p>
<p>CONTACT Btn Placeholder</p>
