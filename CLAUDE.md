# CLAUDE.md - Developer Guidelines

Quick reference guide for AI Agents (Claude/Gemini) when managing this portfolio project.

## Core Commands

* **Run Dev Server:** `pnpm dev`
* **Build Production:** `pnpm build`
* **Run Linter:** `pnpm lint`

## Development Rules

1. **Next.js 16 Version Requirements:**
   * Always use asynchronous parameters (`await params`) for dynamic routing (e.g., in `src/app/blog/[slug]/page.tsx`).
   * The middleware file name has changed to `proxy.ts` (if using Node.js runtime).
2. **Data Separation (Decoupled Content):**
   * Do not hardcode text content directly into UI components.
   * Store all data in `src/data/` (e.g., `projects.ts`, `profile.ts`, `skills.ts`, `experience.ts`, `navigation.ts`).
3. **UI Component Design:**
   * Use PascalCase for component filenames and exports (e.g., `HeroSection.tsx`, `ProjectsSection.tsx`).
   * Use camelCase for variables and functions (e.g., `navLinks`, `getIcon()`).
   * Use kebab-case for dynamic content filenames.
4. **Styling & Design Guidelines:**
   * Apply Tailwind CSS v4 styling via CSS variables in `src/app/globals.css`.
   * Use icons from `lucide-react` for category icons, but use **inline SVG** for external brand icons (such as GitHub and LinkedIn) since they have been removed in the latest Lucide versions.
