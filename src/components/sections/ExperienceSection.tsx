"use client";

import { useTranslations } from "next-intl";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import Container from "@/components/ui/Container";

export function ExperienceSection() {
  const t = useTranslations("Experience");
  const tBase = useTranslations("Experience.items");
  const tItems = tBase as unknown as (key: string) => string;
  const tRaw = tBase.raw as unknown as (key: string) => string[];

  return (
    <section id="experience" className="py-24 bg-background border-t border-border/40">
      <Container>
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t("title")}
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
          <p className="text-muted-foreground text-sm max-w-md mt-2">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-border -translate-x-1/2 pointer-events-none" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {experiences.map((exp, index) => {
              const isWork = exp.type === "work";
              const isEven = index % 2 === 0;
              let achievements: string[] = [];
              try {
                achievements = tRaw(`${exp.id}.achievements`);
              } catch {
                achievements = [];
              }

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start sm:justify-between w-full ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-card border-2 border-primary shadow-sm">
                    {isWork ? (
                      <Briefcase className="w-4 h-4 text-primary dark:text-accent" />
                    ) : (
                      <GraduationCap className="w-4.5 h-4.5 text-primary dark:text-accent" />
                    )}
                  </div>

                  <div className="hidden sm:block w-[45%]" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-full sm:w-[45%] pl-12 sm:pl-0"
                  >
                    <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                      <span className="inline-flex text-[10px] font-extrabold tracking-wider bg-primary/10 text-primary dark:text-accent px-2.5 py-1 rounded-full uppercase mb-4">
                        {exp.period}
                      </span>

                      <h3 className="text-xl font-bold leading-snug">
                        {tItems(`${exp.id}.role`)}
                      </h3>
                      <p className="text-sm font-semibold text-accent mb-3">
                        {exp.institution}
                      </p>

                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {tItems(`${exp.id}.description`)}
                      </p>

                      {achievements.length > 0 && (
                        <ul className="flex flex-col gap-2 border-t border-border/50 pt-4 text-xs text-foreground/80 list-disc list-inside">
                          {achievements.map((ach, i) => (
                            <li key={i} className="leading-relaxed pl-1">
                              {ach}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ExperienceSection;
