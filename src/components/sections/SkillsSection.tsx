"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { skills } from "@/data/skills";
import type { SkillCategory } from "@/types/skill";
import Container from "@/components/ui/Container";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
      duration: 0.5,
    },
  },
};

const categories: SkillCategory[] = [
  "Programming Languages",
  "Framework & Library",
  "Database",
  "DevOps",
  "Tools",
];

const categoryKey: Record<SkillCategory, string> = {
  "Programming Languages": "programmingLanguages",
  "Framework & Library": "frameworkLibrary",
  Database: "database",
  DevOps: "devops",
  Tools: "tools",
};

const categoryColor: Record<SkillCategory, string> = {
  "Programming Languages": "from-blue-500 to-indigo-500",
  "Framework & Library": "from-emerald-500 to-teal-500",
  Database: "from-amber-500 to-orange-500",
  DevOps: "from-cyan-500 to-teal-500",
  Tools: "from-violet-500 to-purple-500",
};

export function SkillsSection() {
  const tBase = useTranslations("Skills");
  const t = tBase as unknown as (key: string) => string;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  };

  const getSkillsByCategory = (category: SkillCategory) => {
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <section
      id="skills"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-card/20"
    >
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-8 w-2 h-2 rounded-full bg-primary/30 animate-pulse" />
        <div className="absolute top-3/4 right-16 w-3 h-3 rounded-full bg-accent/20 animate-pulse delay-500" />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-secondary/40 animate-pulse delay-1000" />
      </div>

      <div className="absolute top-[15%] left-[5%] w-80 h-80 rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-accent/[0.02] blur-[140px] pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-4 mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {t("titlePrefix")}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>{" "}
            {t("titleSuffix")}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed mt-1">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {categories.map((category, catIndex) => {
            const catSkills = getSkillsByCategory(category);
            const key = categoryKey[category];
            const label = t(`categories.${key}.label`);
            const description = t(`categories.${key}.description`);
            const color = categoryColor[category];
            const isRight = catIndex % 2 === 1;

            return (
              <motion.div
                key={category}
                variants={containerVariants}
                className={`flex flex-col gap-6 ${isRight ? "md:items-end" : ""}`}
              >
                <motion.div
                  variants={cardVariants}
                  style={{ transitionDelay: `${catIndex * 0.05}s` }}
                  className={`flex flex-col sm:items-end gap-3 ${isRight ? "sm:flex-row-reverse" : "sm:flex-row"}`}
                >
                  <div
                    className={`flex items-end gap-3 ${isRight ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {category === "Programming Languages" && (
                          <path d="M12 2v20M5 5h14M9 9v10" />
                        )}
                        {category === "Framework & Library" && (
                          <path d="M2 12h20M5 5l5 5-5 5M19 5l-5 5 5 5" />
                        )}
                        {category === "Database" && (
                          <path d="M3 3v18h18M9 9v12M15 9v12M21 9v12" />
                        )}
                        {category === "DevOps" && (
                          <path d="M12 2L2 7v10c0 5 5 9 10 7 5-2 10-6 10-7V7l-10-5z" />
                        )}
                        {category === "Tools" && (
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l3.6 3.6a1 1 0 0 0 1.4 0l3.6-3.6a1 1 0 0 0-1.4-1.4l-3.6 3.6a1 1 0 0 0 0 1.4L18 14a1 1 0 0 0 1.4 0l3.6-3.6a1 1 0 0 0-1.4-1.4l-3.6 3.6a1 1 0 0 0 0 1.4l-3.6-3.6a1 1 0 0 0-1.4 0z" />
                        )}
                      </svg>
                    </motion.div>

                    <div className={`flex flex-col ${isRight ? "text-right items-end" : ""}`}>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {label}
                      </h3>
                      <p className="text-xs text-muted-foreground max-w-sm mt-0.5">
                        {description}
                      </p>
                    </div>
                  </div>

                  <div className={`flex-1 h-px bg-border/40 ${isRight ? "sm:mr-12" : "sm:ml-12"}`} />
                  <span className="text-xs font-semibold text-muted-foreground bg-muted/80 px-2 py-0.5 rounded-full self-start sm:self-auto">
                    {catSkills.length}
                  </span>
                </motion.div>

                <motion.div
                  className={`flex flex-wrap gap-3 ${isRight ? "justify-end" : ""}`}
                >
                  {catSkills.map((skill, index) => (
                    <TechStackCard
                      key={skill.name}
                      skill={skill}
                      index={index}
                    />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

/* ---- Tech Stack Card ---- */

interface TechStackCardProps {
  skill: NonNullable<typeof skills>[number];
  index: number;
}

function TechStackCard({ skill, index }: TechStackCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      style={{ transitionDelay: `${index * 0.04}s` }}
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative flex flex-col items-center justify-center gap-3 p-3 sm:p-4 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-lg hover:border-primary/30 dark:hover:border-accent/30 transition-all duration-300 cursor-default select-none overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-muted/50 dark:bg-slate-100 group-hover:bg-white dark:group-hover:bg-white border border-border/40 group-hover:border-primary/30 dark:group-hover:border-accent/30 shadow-inner transition-all duration-300">
        {skill.iconName ? (
          // eslint-disable-next-line @next/next/no-img-element -- External SVG icons from devicon CDN
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.iconName}/${skill.iconName}-original.svg`}
            alt={`${skill.name} logo`}
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = "none";
            }}
          />
        ) : (
          <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm sm:text-base font-bold">
            {skill.name.charAt(0)}
          </span>
        )}
      </div>

      <span className="relative z-10 text-center text-xs sm:text-sm font-semibold text-foreground/90 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default SkillsSection;
