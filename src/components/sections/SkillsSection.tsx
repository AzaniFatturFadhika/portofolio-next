"use client";

import { motion } from "framer-motion";
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
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Tools",
];

const categoryMeta: Record<
  SkillCategory,
  { color: string; description: string }
> = {
  Frontend: {
    color: "from-pink-500 to-rose-500",
    description: "User interfaces, frameworks, and modern web experiences",
  },
  Backend: {
    color: "from-indigo-500 to-blue-500",
    description: "Server-side logic, APIs, and microservices",
  },
  Database: {
    color: "from-amber-500 to-orange-500",
    description: "Data modeling, ORMs, and query optimization",
  },
  DevOps: {
    color: "from-cyan-500 to-teal-500",
    description: "Cloud platforms, CI/CD, and containerization",
  },
  Tools: {
    color: "from-violet-500 to-purple-500",
    description: "Development tools and productivity software",
  },
};

export function SkillsSection() {
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
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-8 w-2 h-2 rounded-full bg-primary/30 animate-pulse" />
        <div className="absolute top-3/4 right-16 w-3 h-3 rounded-full bg-accent/20 animate-pulse delay-500" />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-secondary/40 animate-pulse delay-1000" />
      </div>

      {/* Large blurred orbs for depth */}
      <div className="absolute top-[15%] left-[5%] w-80 h-80 rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-accent/[0.02] blur-[140px] pointer-events-none" />

      <Container>
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-4 mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills
            </span>{" "}
            & Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed mt-1">
            Technologies and tools I use to create clean, performant applications.
          </p>
        </motion.div>

        {/* Skill Categories as Tabs/Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-24"
        >
          {categories.map((category, catIndex) => {
            const catSkills = getSkillsByCategory(category);
            const meta = categoryMeta[category];

            return (
              <motion.div
                key={category}
                variants={containerVariants}
                className="flex flex-col gap-8"
              >
                {/* Category Header */}
                <motion.div
                  variants={cardVariants}
                  style={{ transitionDelay: `${catIndex * 0.05}s` }}
                  className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-5"
                >
                  <div className="flex items-end gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${meta.color} flex items-center justify-center shadow-lg`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {category === "Frontend" && (
                          <path d="M9 18h6M10 22h4M12 2a7 7 0 1 0 7 7 7 7 0 0 0-7-7z" />
                        )}
                        {category === "Backend" && (
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

                    <div className="flex flex-col">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground capitalize">
                        {category}
                      </h3>
                      <p className="text-xs text-muted-foreground sm:max-w-sm mt-0.5">
                        {meta.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 h-px bg-border/40 sm:ml-16" />
                  <span className="text-xs font-semibold text-muted-foreground bg-muted/80 px-3 py-1 rounded-full self-start sm:self-auto">
                    {catSkills.length} skills
                  </span>
                </motion.div>

                {/* Tech Stack Cards Grid */}
                <motion.div
                  className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8`}
                >
                  {catSkills.map((skill, index) => (
                    <TechStackCard
                      key={skill.name}
                      skill={skill}
                      index={index}
                      colorClass={meta.color}
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
  colorClass: string;
}

function TechStackCard({
  skill,
  index,
  colorClass,
}: TechStackCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      style={{ transitionDelay: `${index * 0.04}s` }}
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative flex flex-col items-center justify-center gap-5 p-8 sm:p-9 rounded-3xl bg-card border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/40 dark:hover:border-accent/40 transition-all duration-300 cursor-default select-none overflow-hidden"
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Tech Icon */}
      <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-2xl bg-muted/50 group-hover:bg-white/80 dark:group-hover:bg-white/5 border border-border/40 group-hover:border-primary/30 dark:group-hover:border-accent/30 shadow-inner transition-all duration-300">
        {skill.iconName ? (
          // eslint-disable-next-line @next/next/no-img-element -- External SVG icons from devicon CDN
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.iconName}/${skill.iconName}-original.svg`}
            alt={`${skill.name} logo`}
            className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = "none";
            }}
          />
        ) : (
          <span className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
            {skill.name.charAt(0)}
          </span>
        )}
      </div>

      {/* Skill Name */}
      <span className="relative z-10 text-center text-sm font-semibold text-foreground/90 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-tight">
        {skill.name}
      </span>

      {/* Accent dot indicator */}
      <motion.div
        className={`absolute bottom-3 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 500 }}
      />
    </motion.div>
  );
}

export default SkillsSection;