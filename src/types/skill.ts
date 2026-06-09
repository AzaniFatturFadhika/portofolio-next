export type SkillCategory = "Programming Languages" | "Framework & Library" | "Database" | "DevOps" | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  level?: string; // e.g. "Intermediate", "Basic" - not using levels that are misleading
  iconName?: string; // string key for icon mapping
}
