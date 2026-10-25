# Changelog

All notable changes to the **Software Engineer Portfolio** project will be documented in this file. This format is based on [Keep a Changelog](https://keepachangelog.com/en/0.1.0/) and this release adheres to [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

### Added

- **Outstatic CMS:** Embedded content dashboard at `/outstatic` (GitHub OAuth) with an `articles` collection. Landing-page writing section, blog listing, and article detail all read from `outstatic/content/articles/` through a shared access path (`src/lib/cms.ts`).
- **Shared Blog Layer:** New `src/components/blog/` components (`ArticleBody`, `ArticleCard`, `ArticleMeta`, `BlogEmptyState`) so all three public surfaces render identical metadata and cards.
- **Safe Markdown Rendering:** Article bodies render via `markdown-to-jsx` with callout-styled blockquotes, responsive tables, and lazy-loaded images; no raw HTML injection.
- **Per-Article SEO:** `BlogPosting` structured data on article pages; sitemap generated from managed content; dashboard and API paths disallowed in `robots.txt`.
- **Automated Tests:** Vitest runner (`pnpm test`) with 16 tests covering article transforms, filtering, sorting, summary mapping, and markdown safety.

### Changed

- **Blog Content Migration:** The three existing articles moved from `src/content/blog/*.mdx` + `src/data/blog.tsx` to `outstatic/content/articles/*.mdx` with unchanged slugs, titles, summaries, dates, and categories.
- **Tailwind CSS:** Pinned to `4.1.10` to satisfy the Outstatic peer requirement.

### Removed

- **Legacy Blog Sources:** Deleted `src/data/blog.tsx` and `src/content/blog/` (superseded by managed content).

## [0.1.0] - 2026-06-09

### Added

- **Project Setup:** Initialization of Next.js 16 + TypeScript + Tailwind CSS v4 + ESLint with the Turbopack compiler.
- **Global Layout & Theme Engine:** Sticky glassmorphic scroll-triggered Navbar design, responsive Footer with social media icons, and ThemeProvider for instant Light/Dark Mode toggle.
- **Hero Section:** Asynchronous typewriter loop animation, smooth-scroll CTA buttons, CV download, and a glowing gradient-bordered professional headshot profile image.
- **About & Pillars Section:** Bio page for the developer profile and 3 Core Pillars cards for software engineering values with unique icons.
- **Skills Section:** Technical skills organized into 5 architectural blocks (Frontend, Backend, Database, DevOps, Tools) with clean, modern badges.
- **Projects Showcase:** Interactive Framer Motion category filtering, AI-generated thumbnail mockups, and a detail specification modal highlighting key features, technical challenges & solutions.
- **Experience Section:** Vertical split timeline separating career and education history with Briefcase/GraduationCap icon indicators.
- **Blog System:** Blog list route and dynamic slug-based article reader rendered statically (SSG) for sub-millisecond speeds, fully compatible with Next.js 16 Async Request APIs.
- **Contact Form:** Client input form validation, spam-trap honeypot (`botfield`), feedback status via Toast notifications, and Formspree API integration.
- **SEO & Metadata:** Integration of dynamic `sitemap.xml`, `robots.txt`, global Open Graph / Twitter meta tags, and JSON-LD Person schema markup.
- **Separate Documentation:** Structured documentation including [README.md](README.md), [features.md](docs/features.md), and [architecture.md](docs/architecture.md).
