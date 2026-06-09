"use client";

import { motion } from "framer-motion";
import { Code, BookOpen, UserCheck } from "lucide-react";
import { profile } from "@/data/profile";
import Container from "@/components/ui/Container";

export function AboutSection() {
  const { longBio, personalValues } = profile;

  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "clean code":
        return <Code className="w-6 h-6 text-primary dark:text-accent" />;
      case "continuous learning":
        return <BookOpen className="w-6 h-6 text-primary dark:text-accent" />;
      case "user-centric design":
        return <UserCheck className="w-6 h-6 text-primary dark:text-accent" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-24 bg-card/40 border-y border-border/50">
      <Container>
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-foreground">
              My Journey & Goals
            </h3>
            <div className="text-foreground/80 leading-relaxed space-y-4">
              <p>{longBio}</p>
              <p>
                Outside of code, you can find me reading technical write-ups, building side projects, or contributing to developers communities. I strive to bring positive energy and quality engineering to every team I join.
              </p>
            </div>
          </motion.div>

          {/* Right values */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              My Core Pillars
            </h3>
            <div className="flex flex-col gap-6">
              {personalValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl bg-card border border-border/80 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-3 rounded-xl bg-background border border-border/60 flex items-center justify-center h-12 w-12 shadow-sm">
                    {getIcon(value.title)}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-lg font-bold text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default AboutSection;
