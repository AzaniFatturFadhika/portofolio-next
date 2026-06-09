"use client";

import { Layout, Server, Database, Cloud, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { SkillCategory } from "@/types/skill";
import Container from "@/components/ui/Container";

export function SkillsSection() {
  const categories: { name: SkillCategory; icon: React.ReactNode }[] = [
    {
      name: "Frontend",
      icon: <Layout className="w-5 h-5 text-primary dark:text-accent" />,
    },
    {
      name: "Backend",
      icon: <Server className="w-5 h-5 text-primary dark:text-accent" />,
    },
    {
      name: "Database",
      icon: <Database className="w-5 h-5 text-primary dark:text-accent" />,
    },
    {
      name: "DevOps",
      icon: <Cloud className="w-5 h-5 text-primary dark:text-accent" />,
    },
    {
      name: "Tools",
      icon: <Wrench className="w-5 h-5 text-primary dark:text-accent" />,
    },
  ];

  const getSkillsByCategory = (category: SkillCategory) => {
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <section id="skills" className="py-24 bg-background">
      <Container>
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
          <p className="text-muted-foreground text-sm max-w-md mt-2">
            My technology stack and developer tools mapped by specialized
            engineering layers.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat, catIndex) => {
            const catSkills = getSkillsByCategory(cat.name);
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="flex flex-col p-6 rounded-2xl bg-card border border-border/80 shadow-sm hover:shadow-md transition-all duration-300 h-full hover:border-primary/20"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                  <div className="p-2 rounded-xl bg-background border border-border/50 flex items-center justify-center shadow-inner">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-lg text-foreground">
                    {cat.name}
                  </h3>
                </div>

                {/* Badges list */}
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {catSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-xl bg-background border border-border/60 text-xs font-semibold text-foreground/90 shadow-sm hover:bg-primary/5 hover:text-primary dark:hover:text-accent dark:hover:bg-accent/5 transition-all duration-200"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
export default SkillsSection;
