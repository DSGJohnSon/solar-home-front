# Solar Home 37 – Frontend Guidelines

## Naming convention
- The company name is always **"Solar Home 37"** — never just "Solar Home". Apply this in all content, metadata, `alt` texts, SEO copy, comments, and any user-facing string.

## Page layout & structure

Every new page must follow this structure and style, modelled on `app/(services)/films-vitrages/page.tsx`:

### File convention
- `page.tsx` is a **server component** (no `"use client"`) — it exports `metadata` and renders static sections.
- If the page has interactive UI (sliders, state, animations), extract it into a sibling `*-client.tsx` or named component with `"use client"` at the top, and import it into `page.tsx`.

### Section anatomy
A page is a `<main>` element containing sections in this order:
1. **Hero** — full-bleed, dark background, centered content
2. **Content sections** — alternating `bg-white` / `bg-zinc-50`
3. **SEO local** — `bg-zinc-50 border-t border-border`, centered text
4. **ContactCTA** — always last, imported from `@/components/sections/contact-cta/contact-cta`

### Spacing & padding (mobile-first)
All sections use **horizontal padding via `px-4`** on the section element, with an inner `max-w-6xl mx-auto` container:

```tsx
<section className="py-16 md:py-24 px-4">
  <div className="max-w-6xl mx-auto">
    {/* content */}
  </div>
</section>
```

- **Never** use horizontal padding wider than `px-4` directly on sections — let the `max-w-*` container handle centering.
- Vertical rhythm: `py-16 md:py-24` for main content sections, `py-12 md:py-16` for secondary sections (SEO, etc.).
- Hero: `pt-36 pb-20` on the inner container (leaves room for the fixed header).

### Typography
- Titles: `font-title font-bold uppercase` with `fontSize: "clamp(20px, 3vw, 34px)"` inline style.
- Hero H1: `clamp(28px, 5vw, 60px)`.
- Section intros / secondary: `text-sm md:text-base text-zinc-600 leading-relaxed`.
- Decorative accent line before titles: `<span className="block w-12 h-1 bg-primary mb-6" />`.

### Responsive grid
- Always start with `grid-cols-1` and scale up: `lg:grid-cols-2`, etc.
- Use `gap-10 lg:gap-16` for two-column content layouts.
- Images: `relative aspect-4/3 w-full overflow-hidden` container with `<Image fill className="object-cover" />`.

### Colors
- Primary accent: CSS var `--color-primary` (gold `#be9c52`) — use `bg-primary`, `text-primary`, `border-primary`.
- Text hierarchy: `text-zinc-950` (headings) → `text-zinc-700` → `text-zinc-600` (body) → `text-zinc-500` (secondary).
- Backgrounds: `bg-white` / `bg-zinc-50` alternating; hero sections `bg-zinc-950`.
