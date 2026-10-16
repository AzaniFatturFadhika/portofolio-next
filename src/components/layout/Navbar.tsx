"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { navItems } from "@/i18n/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const t = useTranslations("Nav");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/80 py-3 shadow-sm"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/#home"
          className="text-xl font-extrabold tracking-tight group"
        >
          <span className="text-foreground transition-colors group-hover:text-primary dark:group-hover:text-accent">
            Fadhika
          </span>
          <span className="text-accent group-hover:animate-pulse">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary dark:hover:text-accent transition-colors duration-200"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
