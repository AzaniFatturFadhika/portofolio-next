# Project Architecture & Code Structure

This document explains the directory structure, the data separation principles, visual configurations, and the adaptations made to conform with the Next.js 16 API updates.

---

## 1. Core Directory Structure

This portfolio website follows a standard Next.js App Router structure with a clean separation of components and data:

```txt
src/
  app/                 # Next.js App Router (Routes & Layouts)
    blog/              # Route for the Blog List Page
    blog/[slug]/       # Dynamic Route for Detailed Articles
    globals.css        # Tailwind CSS v4 Imports & Theme Variables
    layout.tsx         # Main Layout Structure & Global Metadata
    page.tsx           # Main Home Page (Composed Sections)
    robots.ts          # Dynamic robots.txt Generator
    sitemap.ts         # Dynamic sitemap.xml Generator
  components/
    layout/            # Layout Components (Navbar, Footer, MobileMenu)
      ThemeProvider.tsx# Next-Themes Provider (Client Component)
      ThemeToggle.tsx  # Light/Dark Theme Switch Button
    sections/          # Homepage Sections (Hero, About, Skills, etc.)
    ui/                # Reusable Primitive UI Components (Button, Card, Input)
  data/                # Static Data Files (Decoupled Content)
  lib/                 # Utility Functions (JSON-LD Helper, etc.)
  types/               # TypeScript Type Definitions
```

---

## 2. Data Separation Principles

The UI components are specifically designed **not to contain hardcoded text data**. All written contents, social media links, biography text, projects, technical skills, and work/education history are separated into the `src/data/` folder:

* **[profile.ts](file:///home/fadhika/Documents/GitHub/portofolio/src/data/profile.ts):** Contains profile bio, typewriter roles, tagline, and core pillars values.
* **[skills.ts](file:///home/fadhika/Documents/GitHub/portofolio/src/data/skills.ts):** Contains the complete list of technical skills mapped by category.
* **[projects.ts](file:///home/fadhika/Documents/GitHub/portofolio/src/data/projects.ts):** Contains detailed project details along with features, challenges, and solutions.
* **[experience.ts](file:///home/fadhika/Documents/GitHub/portofolio/src/data/experience.ts):** Contains work career and educational history.
* **[blog.tsx](file:///home/fadhika/Documents/GitHub/portofolio/src/data/blog.tsx):** Stores the list of blog posts and contains the JSX elements to render article contents directly.

*Benefits:* This makes updating the website content in the future extremely simple. You only need to modify these data files without risking any breakage to the React component structure (`.tsx`).

---

## 3. Next.js 16 Integration (Async Request APIs)

Next.js 16 deprecates synchronous access to dynamic route parameters (`params` & `searchParams`). To align with these standards, the dynamic blog detail route parses parameters asynchronously:

```tsx
// src/app/blog/[slug]/page.tsx
interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  // Awaiting params is required in Next.js 16 before accessing its properties
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  ...
}
```

This prevents deprecation runtime warnings and ensures fast static page rendering.

---

## 4. Tailwind CSS v4 Theme System

Tailwind CSS v4 handles configuration directly via CSS directives (`@theme`), removing the need for a separate `tailwind.config.js/ts` file.

The portfolio's theme colors (Primary, Secondary, Accent) are defined as CSS variables inside [globals.css](file:///home/fadhika/Documents/GitHub/portofolio/src/app/globals.css):

```css
:root {
  --background: #f8f9fa;
  --foreground: #0c0c1d;
  --primary: #ff00c8;
  ...
}

.dark {
  --background: #0c0c1d;
  --foreground: #eceff4;
  ...
}

@theme inline {
  --color-background: var(--background);
  --color-primary: var(--primary);
  ...
}
```

Dark and light theme transitions are triggered automatically by appending/removing the `dark` class on the root `html` element. This is managed by the `next-themes` provider to eliminate hydration flashing.
