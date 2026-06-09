import { ExperienceEntry } from "@/types/experience";

export const experiences: ExperienceEntry[] = [
  {
    id: "exp-1",
    role: "Junior Web Developer",
    institution: "TechLabs Inc.",
    period: "2024 - Present",
    type: "work",
    description:
      "Responsible for building and maintaining customer-facing dashboards and full-stack integration APIs.",
    achievements: [
      "Refactored legacy React state containers to React Context and Redux Toolkit, decreasing re-renders by 35%.",
      "Collaborated on designing new REST endpoints using NestJS and Node.js for external vendor systems.",
      "Optimized query runtimes in PostgreSQL, improving dashboard data retrieval times.",
    ],
  },
  {
    id: "exp-2",
    role: "Web Developer Intern",
    institution: "CreativeCode Agency",
    period: "2023 - 2024",
    type: "work",
    description:
      "Assisted senior frontend engineers in translating Figma mockups into pixel-perfect, accessible React templates.",
    achievements: [
      "Built over 15 responsive website pages and UI components using Tailwind CSS and React.",
      "Added keyboard navigation accessibility support, boosting accessibility Lighthouse audit scores to 95+.",
      "Fixed UI responsive bugs on mobile viewports for 5 client websites.",
    ],
  },
  {
    id: "exp-3",
    role: "B.S. in Computer Science",
    institution: "University of Technology",
    period: "2020 - 2024",
    type: "education",
    description:
      "Graduated with a GPA of 3.8/4.0. Focused on software engineering methodologies, web technologies, and database design.",
    achievements: [
      "Completed a Capstone Project: Built an automated campus room booking portal using Next.js.",
      "Active member of the University Coding Club and participant in local hackathons.",
    ],
  },
];
