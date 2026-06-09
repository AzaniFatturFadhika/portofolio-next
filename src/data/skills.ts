import { Skill } from "@/types/skill";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", iconName: "react" },
  { name: "Next.js", category: "Frontend", iconName: "nextjs" },
  { name: "TypeScript", category: "Frontend", iconName: "typescript" },
  { name: "JavaScript", category: "Frontend", iconName: "javascript" },
  { name: "Tailwind CSS", category: "Frontend", iconName: "tailwindcss" },
  // { name: "Framer Motion", category: "Frontend", iconName: "framer-motion" },

  // Backend
  { name: "Node.js", category: "Backend", iconName: "nodejs" },
  // { name: "Express.js", category: "Backend", iconName: "express" },
  { name: "NestJS", category: "Backend", iconName: "nestjs" },
  { name: "Python", category: "Backend", iconName: "python" },
  { name: "Laravel", category: "Backend", iconName: "laravel" },
  { name: "PHP", category: "Backend", iconName: "php" },

  // Database
  { name: "PostgreSQL", category: "Database", iconName: "postgresql" },
  { name: "MySQL", category: "Database", iconName: "mysql" },
  // { name: "MongoDB", category: "Database", iconName: "mongodb" },
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
