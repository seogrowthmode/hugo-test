# Chadix Business Website Boilerplate

A modern, feature-rich Next.js boilerplate specifically designed for creating professional local business websites. Built with Next.js 14, TypeScript, and Tailwind CSS, this boilerplate provides everything you need to quickly launch a stunning business website.

🔗 **[Live Demo](https://chadix-boilerplate.vercel.app/)**

## Features

- 📱 Fully responsive design
- 🎨 Modern UI components built with Tailwind CSS
- 🏗️ Pre-built sections for common business website needs:
  - Hero section
  - Services showcase with dynamic pages
  - About section with mission and values
  - Team showcase
  - Blog preview with pagination
  - Testimonials section
  - Call-to-action (CTA)
  - Contact form
- 📄 Pre-configured pages:
  - Home (/)
  - About (/about)
  - Services (/services)
  - Team (/team)
  - Blog (/blog)
  - Testimonials (/testimonials)
  - Contact (/contact)
  - Dynamic service pages (/services/[slug])
  - Individual blog posts (/blog/[slug])
- 🔍 SEO optimized with:
  - Proper metadata
  - Schema.org structured data
  - Canonical URLs
  - Hreflang tags for internationalization
- ♿ Accessibility compliant with proper alt text implementation
- ⚡ Fast performance with Next.js 14
- 📝 TypeScript for better development experience
- 📚 Markdown support for blog posts
- 🧩 Additional UI components:
  - Navigation menu
  - Table of contents
  - Loading spinner
  - Pagination
  - Buttons and common UI elements

## Getting Started

1. Clone this repository:
```bash
git clone [your-repo-url]
cd your-project-name
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see your website.

## Customizing Your Website

### Basic Configuration

1. Update site metadata in `src/app/layout.tsx`:
```typescript
// Modify the metadata object
export const metadata = {
  title: 'Your Business Name',
  description: 'Your business description'
}
```

2. Customize colors and branding in `tailwind.config.ts`

### Components

The boilerplate includes the following pre-built components that you can customize:

#### Header & Navigation
- `src/components/site-header.tsx`: Main navigation and branding
- `src/components/ui/navigation-menu.tsx`: Navigation menu structure

#### Home Page Sections
- `src/components/hero-section.tsx`: Main hero banner
- `src/components/services-section.tsx`: Services showcase
- `src/components/about-section.tsx`: About section
- `src/components/blog-preview-section.tsx`: Blog preview grid
- `src/components/testimonials-section.tsx`: Customer testimonials
- `src/components/cta-section.tsx`: Call-to-action section
- `src/components/contact-section.tsx`: Contact form

#### Common Components
- `src/components/page-header.tsx`: Consistent page headers
- `src/components/site-footer.tsx`: Site footer with links and info
- `src/components/ui/button.tsx`: Reusable button component
- `src/components/ui/spinner.tsx`: Loading spinner
- `src/components/ui/navigation-menu.tsx`: Navigation menu
- `src/components/table-of-contents.tsx`: Dynamic table of contents
- `src/components/pagination.tsx`: Pagination for blog posts

### Pages

Each page is located in its respective directory under `src/app`:

- `src/app/page.tsx`: Home page
- `src/app/about/page.tsx`: About page with mission and values
- `src/app/services/page.tsx`: Services listing page
- `src/app/services/[slug]/page.tsx`: Dynamic service detail pages
- `src/app/team/page.tsx`: Team members showcase
- `src/app/blog/page.tsx`: Blog listing with pagination
- `src/app/blog/[slug]/page.tsx`: Individual blog post pages
- `src/app/testimonials/page.tsx`: Customer testimonials page
- `src/app/contact/page.tsx`: Contact page

Modify these files to add your business-specific content and customize the layout as needed.

## Development Tips

1. **Component Customization**
   - Each component is built with Tailwind CSS for easy styling
   - Modify the JSX and Tailwind classes to match your design needs
   - Components are TypeScript-based for better type safety

2. **Adding New Pages**
   - Create a new directory in `src/app/`
   - Add a `page.tsx` file in the new directory
   - Use the `PageHeader` component for consistent styling

3. **Styling**
   - Global styles are in `src/app/globals.css`
   - Utility functions are available in `src/lib/utils.ts`
   - Tailwind CSS classes can be customized in `tailwind.config.ts`

## Accessibility

This boilerplate is built with accessibility in mind, following WCAG 2.1 guidelines. Key accessibility features include:

1. **Proper Alt Text Implementation**
   - All content images have descriptive alt text
   - Decorative images use empty alt attributes
   - Background images have appropriate ARIA attributes
   - Icons include screen reader text

2. **Accessibility Guidelines**
   - Detailed accessibility guidelines are available in `docs/accessibility-guidelines.md`
   - Follow these guidelines when adding new content to maintain accessibility compliance

3. **Keyboard Navigation**
   - All interactive elements are keyboard accessible
   - Focus states are clearly visible

4. **Semantic HTML**
   - Proper heading hierarchy
   - Semantic elements used throughout

Refer to the accessibility guidelines document for detailed information on maintaining accessibility when extending this boilerplate.

## Internationalization

This boilerplate includes support for hreflang tags, which help search engines understand which language you are using on a specific page.

### Current Implementation

- The site is configured with English (`en`) as the default language
- Hreflang tags are implemented in the metadata of each page
- Utility functions in `src/lib/hreflang.ts` make it easy to generate hreflang metadata

### Adding More Languages

To add support for additional languages:

1. Update the language configuration in `src/lib/schema-config.ts`
2. Create translated versions of your pages
3. Update the URL structure as needed

For detailed information on the hreflang implementation and how to extend it, see the [Hreflang Implementation Guide](docs/hreflang-implementation.md).

## Deployment

1. Build your website:
```bash
npm run build
# or
yarn build
# or
pnpm build
```

2. Deploy to your preferred hosting platform. We recommend [Vercel](https://vercel.com) for the best Next.js deployment experience:
   - Connect your repository to Vercel
   - Configure your deployment settings
   - Deploy with a single click

## Support

For issues and feature requests, please file an issue in the GitHub repository.

## License

MIT License - feel free to use this boilerplate for any business website project.
