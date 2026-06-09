import { Skill } from "@/types/skill";

export const skills: Skill[] = [
  // Programming Languages
  { name: "TypeScript", category: "Programming Languages", iconName: "typescript" },
  { name: "JavaScript", category: "Programming Languages", iconName: "javascript" },
  { name: "Python", category: "Programming Languages", iconName: "python" },
  { name: "PHP", category: "Programming Languages", iconName: "php" },

  // Framework & Library
  { name: "React", category: "Framework & Library", iconName: "react" },
  { name: "Next.js", category: "Framework & Library", iconName: "nextjs" },
  { name: "Node.js", category: "Framework & Library", iconName: "nodejs" },
  { name: "NestJS", category: "Framework & Library", iconName: "nestjs" },
  { name: "Laravel", category: "Framework & Library", iconName: "laravel" },
  { name: "Tailwind CSS", category: "Framework & Library", iconName: "tailwindcss" },

  // Database
  { name: "PostgreSQL", category: "Database", iconName: "postgresql" },
  { name: "MySQL", category: "Database", iconName: "mysql" },
  { name: "Prisma ORM", category: "Database", iconName: "prisma" },
  { name: "Redis", category: "Database", iconName: "redis" },

  // DevOps
  { name: "Docker", category: "DevOps", iconName: "docker" },
  { name: "Git & GitHub", category: "DevOps", iconName: "github" },
  { name: "GitHub Actions", category: "DevOps", iconName: "github" },
  { name: "Vercel", category: "DevOps", iconName: "vercel" },

  // Tools
  { name: "VS Code", category: "Tools", iconName: "vscode" },
  { name: "Postman", category: "Tools", iconName: "postman" },
  { name: "Figma", category: "Tools", iconName: "figma" },
  { name: "Linux Bash", category: "Tools", iconName: "linux" },
];
