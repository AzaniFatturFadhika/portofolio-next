export type ExperienceType =
  | "work"
  | "education"
  | "internship"
  | "freelance"
  | "volunteer"
  | "other";

export interface ExperienceEntry {
  id: string;
  role: string;
  institution: string; // company or school
  period: string; // e.g. "2023 - Present"
  type: ExperienceType;
  description: string;
  achievements?: string[];
}
