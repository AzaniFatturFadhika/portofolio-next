# 06 — Project Structure

Struktur folder yang disarankan untuk project Next.js portfolio.

```txt
portfolio-junior-se/
  public/
    cv/
      cv-fadhika.pdf
    images/
      profile/
        profile.jpg
      projects/
        project-1.png
        project-2.png
        project-3.png
      og/
        og-image.png

  src/
    app/
      layout.tsx
      page.tsx
      globals.css

      blog/
        page.tsx
        [slug]/
          page.tsx

      projects/
        page.tsx
        [slug]/
          page.tsx

      sitemap.ts
      robots.ts

    components/
      layout/
        Navbar.tsx
        Footer.tsx
        MobileMenu.tsx
        ThemeToggle.tsx

      sections/
        HeroSection.tsx
        AboutSection.tsx
        SkillsSection.tsx
        ProjectsSection.tsx
        ExperienceSection.tsx
        BlogSection.tsx
        ContactSection.tsx

      ui/
        Button.tsx
        Card.tsx
        Badge.tsx
        SectionHeading.tsx
        Container.tsx
        Input.tsx
        Textarea.tsx
        Toast.tsx

    data/
      profile.ts
      skills.ts
      projects.ts
      experience.ts
      socials.ts
      navigation.ts

    content/
      blog/
        artikel-1.mdx
        artikel-2.mdx

    lib/
      utils.ts
      seo.ts
      email.ts
      constants.ts
      jsonld.ts

    types/
      project.ts
      skill.ts
      experience.ts
      blog.ts

  .env.example
  .gitignore
  eslint.config.mjs
  next.config.ts
  package.json
  postcss.config.mjs
  tailwind.config.ts
  tsconfig.json
  README.md
```

---

## Folder Explanation

### `public/`

Menyimpan file statis:

- CV PDF.
- Foto profil.
- Thumbnail project.
- OG image.

### `src/app/`

Routing utama Next.js App Router.

### `src/components/layout/`

Komponen layout global:

- Navbar.
- Footer.
- Mobile menu.
- Theme toggle.

### `src/components/sections/`

Komponen section homepage:

- Hero.
- About.
- Skills.
- Projects.
- Experience.
- Blog.
- Contact.

### `src/components/ui/`

Komponen UI kecil dan reusable.

### `src/data/`

Data statis yang mudah diedit tanpa mengubah UI.

### `src/content/blog/`

Artikel blog berbasis MDX.

### `src/lib/`

Utility function dan konfigurasi non-UI.

### `src/types/`

TypeScript type untuk data project.

---

## Naming Rules

Gunakan PascalCase untuk component:

```txt
HeroSection.tsx
ProjectCard.tsx
ThemeToggle.tsx
```

Gunakan kebab-case untuk file content:

```txt
membuat-rest-api-dengan-nextjs.mdx
belajar-authentication-basic.mdx
```

Gunakan camelCase untuk variable dan function:

```ts
const projectList = []
function getFeaturedProjects() {}
```

---

## Data Separation Rule

Jangan hardcode data project langsung di component.

Contoh benar:

```ts
// src/data/projects.ts
export const projects = [
  {
    title: "Portfolio Website",
    category: "Web",
    techStack: ["Next.js", "Tailwind CSS"],
  },
]
```

Component hanya menerima data dan merender UI.
