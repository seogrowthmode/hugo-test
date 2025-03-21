# Accessibility Guidelines for Chadix Boilerplate

## Image Alt Text Best Practices

### Why Alt Text Matters

Alt text (alternative text) is essential for:
- Screen reader users who cannot see images
- Users with slow connections where images might not load
- Search engine optimization (SEO)
- Compliance with accessibility standards (WCAG 2.1)

### Alt Text Implementation in This Boilerplate

This boilerplate implements alt text in several ways:

1. **Content Images**: All content images use the Next.js `<Image>` component with descriptive alt text
2. **Decorative Images**: Purely decorative images use empty alt text (`alt=""`)
3. **Background Images**: CSS background images include appropriate ARIA attributes
4. **Icon Accessibility**: Icons include screen reader text using `<span className="sr-only">`

### Guidelines for Adding New Images

When adding new images to this boilerplate, follow these guidelines:

#### For Content Images

```jsx
<Image 
  src="/path/to/image.jpg" 
  alt="Descriptive text about the image content" 
  width={300} 
  height={200} 
/>
```

- Make alt text descriptive but concise (generally 125 characters or less)
- Focus on the purpose and content of the image
- Don't start with "Image of..." or "Picture of..." as screen readers already announce it's an image
- Include any text that appears in the image

#### For Decorative Images

```jsx
<Image 
  src="/path/to/decorative-element.svg" 
  alt="" 
  width={50} 
  height={50} 
/>
```

- Use empty alt text (`alt=""`) for purely decorative images
- This tells screen readers to skip the image

#### For Background Images

```jsx
<div 
  className="bg-cover bg-center" 
  style={{ backgroundImage: "url('/path/to/background.jpg')" }}
  aria-label="Description of the background if meaningful"
  role="img"
>
  Content goes here
</div>
```

- If the background image conveys meaning, include `aria-label` and `role="img"`
- If purely decorative, use `aria-hidden="true"` instead

#### For Icons

```jsx
<Link href="/social-link">
  <span className="sr-only">Follow us on Twitter</span>
  <TwitterIcon className="h-5 w-5" />
</Link>
```

- Always include screen reader text for icons, especially for interactive elements
- Use `sr-only` class to hide text visually while keeping it available to screen readers

### Dynamic Alt Text

For dynamic content, generate meaningful alt text:

```jsx
<Image
  src={post.image}
  alt={post.title} // Using the post title as alt text
  width={800}
  height={600}
/>
```

### Testing Alt Text

Regularly test your site's accessibility:
- Use screen readers (NVDA, VoiceOver, JAWS)
- Disable images in your browser
- Use accessibility audit tools (Lighthouse, axe)

## Other Accessibility Considerations

- Ensure sufficient color contrast
- Provide keyboard navigation
- Use semantic HTML
- Implement proper focus states
- Add ARIA attributes where appropriate
- Ensure form elements have labels

By following these guidelines, you'll maintain the high accessibility standards established in this boilerplate.
