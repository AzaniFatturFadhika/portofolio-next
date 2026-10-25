"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { BlogEmptyState } from "@/components/blog/BlogEmptyState";
import type { ArticleSummary } from "@/types/article";

interface BlogSectionProps {
  articles: ArticleSummary[];
}

export function BlogSection({ articles }: BlogSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  } as const;

  return (
    <section
      id="blog"
      className="py-24 bg-card/40 border-y border-border/50 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Title Block */}
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3 py-1 rounded-full flex items-center gap-1.5 w-fit">
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            Writing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-foreground">
            Latest Articles
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mt-1" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mt-2">
            Catatan teknis seputar web development, tips rekayasa perangkat
            lunak, dan eksplorasi teknologi modern.
          </p>
        </div>

        {/* Grid of Articles */}
        {articles.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14"
          >
            {articles.map((article) => (
              <motion.div
                key={article.slug}
                variants={cardVariants}
                className="h-full"
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="mb-14">
            <BlogEmptyState />
          </div>
        )}

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border/80 hover:border-primary/30 text-foreground font-bold rounded-full text-sm hover:shadow-md hover:bg-border/10 transition-all duration-300 group cursor-pointer"
          >
            Lihat Semua Artikel
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform text-primary dark:text-accent" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default BlogSection;
