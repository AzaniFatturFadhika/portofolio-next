"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Download, Send } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { cvPath } from "@/data/socials";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export function HeroSection() {
  const { name, typewriterRoles, tagline, shortBio, profileImage } = profile;
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = typewriterRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % typewriterRoles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typewriterRoles]);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-background via-background/50 to-card/20"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-secondary/15 blur-[100px] pointer-events-none" />

      <Container className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-1 md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary dark:text-accent tracking-wider uppercase">
            🚀 Welcome to my portfolio
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I&apos;m <span className="text-primary">{name}</span>
            <div className="h-[1.2em] mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent">
              <span>{currentText}</span>
              <span className="animate-pulse ml-0.5 border-r-2 border-accent" />
            </div>
          </h1>

          <p className="text-lg font-medium text-foreground/80 max-w-lg">
            {tagline}
          </p>
          
          <p className="text-muted-foreground max-w-lg">
            {shortBio}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
            <Button href="#projects" variant="primary" size="lg" className="w-full sm:w-auto gap-2">
              Lihat Proyek Saya
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            <Button href="#contact" variant="outline" size="lg" className="w-full sm:w-auto gap-2">
              Hubungi Saya
              <Send className="w-4 h-4" />
            </Button>
          </div>

          <a
            href={cvPath}
            download
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary dark:hover:text-accent hover:underline transition-colors mt-2"
          >
            <Download className="w-4 h-4" />
            Unduh CV Lengkap (PDF)
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-1 md:col-span-5 flex justify-center"
        >
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80">
            {/* Pulsing background shadow borders */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt" />
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-border/80 bg-card group-hover:border-primary/50 transition-all duration-300 shadow-2xl">
              <Image
                src={profileImage}
                alt={name}
                fill
                priority
                sizes="(max-w-768px) 256px, 320px"
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
export default HeroSection;
