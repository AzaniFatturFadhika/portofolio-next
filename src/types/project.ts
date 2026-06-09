export type ProjectCategory = "Web" | "Mobile" | "API" | "Other";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: ProjectCategory;
  githubUrl: string;
  demoUrl?: string;
  image: string;
  features?: string[];
  challenges?: string;
  solutions?: string;
}
