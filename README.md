# Professional Software Engineer Portfolio

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?style=flat-square)](CHANGELOG.md)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-20232a.svg?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-007acc.svg?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-3-black.svg?style=flat-square&logo=framer&logoColor=blue)](https://www.framer.com/motion)

A responsive and high-performance software engineer portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**. It features a modern dark-mode aesthetic, search engine optimizations, smooth animations, and clean decoupled architecture.

---

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack compiler)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS Variables theme engine)
- **Animations:** Framer Motion
- **Iconography:** Lucide React & Custom inline SVGs
- **Theme Switching:** Next Themes (Dark/Light mode support)
- **SEO & Metadata:** Next.js Metadata API, dynamic Sitemap/Robots, JSON-LD Structured Data

---

## ✨ Key Features

1. **Hero Section:** Dynamic typewriter loop animation, glowing animated profile image frame, fast CTAs, and a direct CV download button.
2. **About Me:** Professional career path story and interactive Core Pillars grid (Clean Code, Continuous Learning, User-Centric Design).
3. **Technical Skills:** Organized skill categorization badges (Frontend, Backend, Database, DevOps, Tools).
4. **Projects Showcase:** Interactive Category filter selectors (All, Web, Mobile, API, Other) with layout transitions and a details modal outlining features, challenges, and solutions.
5. **Experience Timeline:** Education and career history displayed on a vertical split timeline.
6. **Technical Blog:** Dynamic dynamic-params blog pages generated statically (SSG) for sub-millisecond load speeds.
7. **Contact Form:** Clients contact form integrated with Formspree, clientside field validations, and a hidden honeypot spam trap.
8. **Dark/Light Mode:** Instant theme switcher that persists setting in localStorage without initial layout flashing.

For detailed information on features, read the [Features Documentation (docs/features.md)](file:///home/fadhika/Documents/GitHub/portofolio/docs/features.md).
For codebase layout details, read the [Architecture Documentation (docs/architecture.md)](file:///home/fadhika/Documents/GitHub/portofolio/docs/architecture.md).

---

## 📅 Versioning & Changelog

This project uses SemVer (Semantic Versioning) for release versions. For a complete release history and update notes, see:

📖 [Change Log (CHANGELOG.md)](file:///home/fadhika/Documents/GitHub/portofolio/CHANGELOG.md)

---

## 🛠️ Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

Copy the template `.env.example` to `.env.local` and complete the values:

```bash
cp .env.example .env.local
```

File `.env.local`:

```env
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_FORMSPREE_KEY=your_formspree_form_id
```

### 4. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

To compile and optimize the website for production deployment:

```bash
pnpm build
pnpm start
```
