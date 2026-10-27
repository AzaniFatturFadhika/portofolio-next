# Detailed Features Documentation

This document explains in detail the functionality, technical implementation, and interaction design of each feature on this portfolio website.

---

## 1. Hero & Brand Section
* **Typewriter Loop Animation:** Utilizes a pure React asynchronous effect (`useEffect`) to type character-by-character, pause when a phrase is complete, backspace, and cycle to the next role continuously without overloading the client's thread.
* **Profession & Bio Summary:** Highlights the junior software engineer profile and key tagline, delivering a clear value proposition within the first 5 seconds of a recruiter's visit.
* **Border Gradient Glow:** The professional profile headshot (AI-generated) is wrapped in a glowing CSS gradient frame that tilts and blurs subtly on hover, creating a premium and modern feel.
* **Navigation Shortcuts & CV Download:** Interactive buttons that trigger smooth scroll to `#projects` or `#contact`, alongside a direct link to download the CV as a PDF.

---

## 2. About Me & Core Pillars
* **Journey Bio:** A summarized narrative of the developer's coding journey, drive to write clean code, and preferred tech stacks to establish professional connection.
* **Core Pillars Grid:** Three core developer values (Clean Code, Continuous Learning, User-Centric Design) are presented in an interactive card grid, featuring unique Lucide icons and floating shadow effects on hover.

---

## 3. Technical Skills Categorization
* **Architectural Stacks:** Technical skills are divided into 5 distinct categories to help hiring managers quickly evaluate technical compatibility:
  1. **Frontend:** HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind, Framer Motion.
  2. **Backend:** Node.js, Express, NestJS, REST APIs, GraphQL.
  3. **Database:** PostgreSQL, MySQL, MongoDB, Prisma ORM.
  4. **DevOps:** Docker, Git, GitHub Actions, Vercel.
  5. **Tools:** VS Code, Postman, Figma, Linux Bash.
* **Clean Tags UI:** Each skill is styled as a sleek badge with a harmonious color scheme and interactive hover transitions.

---

## 4. Projects Showcase & Details Modal
* **Framer Motion Layout Animations:** Filter project categories (All, Web, Mobile, API, Other) smoothly. Hiding and showing project cards is animated using Framer Motion's spring transitions for fluidity.
* **Key Features Checklist:** Details popup lists key features implemented for each project using checked list icons.
* **Technical Challenges & Solutions:** Includes dedicated "Technical Challenges" and "Solutions" sections, showcasing analytical and problem-solving capabilities to recruiters.
* **Safe External Links:** Source Code and Live Demo buttons use secure attributes (`target="_blank" rel="noopener noreferrer"`) and leverage custom inline SVGs for GitHub to avoid external asset dependency.

---

## 5. Experience Timeline
* **Vertical Split Timeline:** A clear timeline separating career history (work) and educational milestones (education) using distinct icons (Briefcase and GraduationCap).
* **Responsive Alignment:** Centered symmetrically on desktop displays (alternating left-right) and automatically aligns to the left on tablet and mobile viewports for optimal readability.

---

## 6. Dynamic Blog System (Outstatic CMS)
* **Owner Dashboard:** Authenticated content editor at `/outstatic` (GitHub OAuth, excluded from navigation and search indexing). Owners create, edit, unpublish, and delete articles with title, summary, publication date, category, reading time, cover image, and rich body.
* **Single Content Source:** The landing-page writing section, blog listing, and article detail all read from `outstatic/content/articles/` through one shared access path (`src/lib/cms.ts`), so their data cannot diverge.
* **Draft Lifecycle:** Only `published` articles are exposed publicly; drafts are unreachable from listings, sitemap, and direct addresses.
* **Static Site Generated (SSG):** Uses Next.js `generateStaticParams()` to pre-render all article slugs into static HTML files during build time. This removes runtime server processing and guarantees sub-millisecond load speeds, maximizing performance and SEO score.
* **Next.js 16 Async Request APIs:** Conforms to Next.js 16 breaking changes by parsing dynamic route parameters asynchronously (`await params`).
* **Safe Markdown Rendering:** Article bodies render via `markdown-to-jsx` (no raw HTML injection); blockquotes are styled as callouts, tables scroll horizontally at small widths, and images lazy-load.
* **Breadcrumbs:** Easy path navigation indicator `Home > Blog > Article Title` to simplify navigation.
* **Per-Article SEO:** Each article emits `BlogPosting` structured data alongside the existing Person schema, and the sitemap is generated from managed content.

---

## 7. Validated Contact Form & Spam Trap
* **Honeypot Protection:** Includes a hidden input field named `botfield`. If autofilled (a common pattern for automated spam scripts), the submission is immediately flagged and discarded.
* **Client-side Validations:** Validates fields presence and email address regex format before submission. Invalid inputs trigger visual error styling (red border) and helper warning text.
* **Interactive Status Toasts:** Submission feedback is announced via slide-up toast notifications (Success / Error) at the bottom right corner, automatically dismissing after 4 seconds.
