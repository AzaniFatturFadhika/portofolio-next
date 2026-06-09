"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/data/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: -10 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg bg-card border border-border text-foreground hover:bg-border/20 transition-all duration-200"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 top-[65px] bg-background/60 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-[65px] left-0 right-0 bg-card border-b border-border shadow-xl px-6 py-8 flex flex-col gap-6 z-50 overflow-hidden"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  custom={index}
                  variants={linkVariants}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="text-lg font-medium text-foreground/80 hover:text-primary dark:hover:text-accent block transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
