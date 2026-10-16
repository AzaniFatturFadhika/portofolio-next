"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ExternalLink, X, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Project, ProjectCategory } from "@/types/project";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export function ProjectsSection() {
  const t = useTranslations("Projects");
  const tItems = useTranslations("Projects.items");
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | "All"
  >("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: (ProjectCategory | "All")[] = [
    "All",
    "Web",
    "Mobile",
    "API",
    "Other",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const dyn = tItems as unknown as (key: string) => string;
  const rawDyn = tItems.raw as unknown as (key: string) => string[];
  const textOf = (id: string, field: string): string => {
    try {
      return dyn(`${id}.${field}`);
    } catch {
      return "";
    }
  };

  const listOf = (id: string, field: string): string[] => {
    try {
      return rawDyn(`${id}.${field}`);
    } catch {
      return [];
    }
  };

  return (
    <section id="projects" className="py-24 bg-card/20 relative">
      <Container>
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t("title")}
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
          <p className="text-muted-foreground text-sm max-w-md mt-2">
            {t("subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                  : "bg-background border-border text-foreground hover:bg-border/20"
              }`}
            >
              {category === "All" ? t("all") : category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  onClick={() => setActiveProject(project)}
                  className="flex flex-col h-full hover:border-primary/30 group p-0 relative"
                >
                  <div className="relative w-full h-48 bg-card border-b border-border/60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={textOf(project.id, "title") || project.title}
                      fill
                      sizes="(max-w-768px) 100vw, 350px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="bg-background/95 text-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-border/80">
                        {t("viewDetail")}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold group-hover:text-primary dark:group-hover:text-primary transition-colors leading-tight">
                      {textOf(project.id, "title")}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {textOf(project.id, "description")}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-semibold bg-background border border-border/60 px-2 py-1 rounded-md text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative bg-card border border-border w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl overflow-y-auto z-10"
              >
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background border border-border hover:bg-border/20 text-foreground transition-all duration-200 z-20 cursor-pointer"
                  aria-label={t("closeModal")}
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="relative w-full h-56 sm:h-72 bg-background border-b border-border">
                  <Image
                    src={activeProject.image}
                    alt={textOf(activeProject.id, "title")}
                    fill
                    sizes="(max-w-768px) 100vw, 768px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
                    <div className="flex flex-col gap-1 text-white">
                      <span className="text-[10px] uppercase font-bold text-accent bg-accent/25 backdrop-blur-md px-3 py-1 rounded-full w-fit">
                        {activeProject.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
                        {textOf(activeProject.id, "title")}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <p className="text-foreground/90 leading-relaxed text-sm sm:text-base">
                      {textOf(activeProject.id, "longDescription")}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-2">
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-background border border-border rounded-full text-sm font-semibold hover:bg-border/20 text-foreground transition-all duration-200 shadow-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4.5 h-4.5"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        {t("sourceCode")}
                      </a>

                      {activeProject.demoUrl && (
                        <a
                          href={activeProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/95 transition-all duration-200 shadow-md shadow-primary/10"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t("liveDemo")}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h4 className="text-md font-bold text-foreground">
                      {t("technologiesUsed")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-semibold bg-background border border-border/80 px-3 py-1.5 rounded-full text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h4 className="text-md font-bold text-foreground">
                      {t("keyFeatures")}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      {listOf(activeProject.id, "features").map((feat) => (
                        <li
                          key={feat}
                          className="flex gap-2.5 items-start text-foreground/85"
                        >
                          <span className="p-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border/50 text-sm">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold text-foreground">
                        {t("challenge")}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {textOf(activeProject.id, "challenges")}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold text-primary dark:text-accent">
                        {t("solution")}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {textOf(activeProject.id, "solutions")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}

export default ProjectsSection;
