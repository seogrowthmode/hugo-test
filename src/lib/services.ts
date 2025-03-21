import MarkdownIt from 'markdown-it'
import slugify from 'slugify'
import { Lightbulb, BarChart3, Users, Palette, Smartphone, Cloud } from "lucide-react"

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})

// Add IDs to headings
md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
  const token = tokens[idx]
  const title = tokens[idx + 1].content
  const slug = slugify(title, { lower: true, strict: true })
  token.attrSet('id', slug)
  return self.renderToken(tokens, idx, options)
}

// Function to extract headings from markdown content
export function extractHeadings(content: string) {
  const headings: Array<{ text: string; level: number; id: string }> = []
  const tokens = md.parse(content, {})

  tokens.forEach((token, idx) => {
    if (token.type === 'heading_open') {
      const level = parseInt(token.tag.slice(1))
      const text = tokens[idx + 1].content
      const id = slugify(text, { lower: true, strict: true })
      headings.push({ text, level, id })
    }
  })

  return headings
}

// Function to parse markdown content
export function parseMarkdown(content: string) {
  return md.render(content)
}

// Services data
const services = [
  {
    slug: "landscape-design",
    name: "Landscape Design",
    description:
      "Custom landscape design services that transform your outdoor space into a beautiful, functional environment tailored to your specific needs and preferences.",
    icon: Lightbulb,
    image: "/placeholder.jpg"
  },
  {
    slug: "lawn-maintenance",
    name: "Lawn Maintenance",
    description:
      "Comprehensive lawn care services including mowing, fertilization, weed control, and seasonal clean-ups to keep your property looking its best year-round.",
    icon: BarChart3,
    image: "/placeholder.jpg"
  },
  {
    slug: "hardscaping",
    name: "Hardscaping",
    description:
      "Expert installation of patios, walkways, retaining walls, and other hardscape features that add structure, functionality, and value to your outdoor living spaces.",
    icon: Users,
    image: "/placeholder.jpg"
  },
  {
    slug: "garden-planting",
    name: "Garden Planting",
    description:
      "Professional planting services featuring carefully selected trees, shrubs, flowers, and native plants that thrive in your specific environment and soil conditions.",
    icon: Palette,
    image: "/placeholder.jpg"
  },
  {
    slug: "irrigation-systems",
    name: "Irrigation Systems",
    description:
      "Custom irrigation system design and installation to ensure your landscape receives the right amount of water efficiently, saving you time and reducing water waste.",
    icon: Smartphone,
    image: "/placeholder.jpg"
  },
  {
    slug: "outdoor-lighting",
    name: "Outdoor Lighting",
    description:
      "Professionally designed landscape lighting that enhances the beauty and security of your property while extending your outdoor enjoyment into the evening hours.",
    icon: Cloud,
    image: "/placeholder.jpg"
  },
]

// Function to get all services
export function getServices() {
  return services
}

// Function to get a service by slug
export function getServiceBySlug(slug: string) {
  return services.find(service => service.slug === slug)
}
