export type NavKey =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "blog"
  | "contact";

export const navItems: { key: NavKey; href: string }[] = [
  { key: "home", href: "/#home" },
  { key: "about", href: "/#about" },
  { key: "skills", href: "/#skills" },
  { key: "projects", href: "/#projects" },
  { key: "experience", href: "/#experience" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/#contact" },
];
