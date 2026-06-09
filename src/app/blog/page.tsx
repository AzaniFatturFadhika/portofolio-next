import Link from "next/link";
import { ChevronRight, Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Blog | Fadhika Portfolio",
  description: "Read technical articles on software engineering, web development, React, and TypeScript.",
};

export default function BlogListingPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <Container>
        {/* Breadcrumb & Back button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-border/60">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-semibold">Blog</span>
          </nav>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/80 hover:text-primary dark:hover:text-secondary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>

        {/* Page Title */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Technical Blog
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Tulisan seputar rekayasa perangkat lunak, optimasi performa, dan praktik terbaik dalam menulis kode bersih (clean code).
          </p>
        </div>

        {/* Articles List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <Card className="h-full flex flex-col gap-5 p-7 group-hover:border-primary/30 transition-all duration-300">
                {/* Meta details */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="flex flex-col gap-2.5">
                  <h2 className="text-xl sm:text-2xl font-bold group-hover:text-primary dark:group-hover:text-secondary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* CTA link */}
                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary dark:text-accent mt-auto pt-2">
                  <span>Baca Selengkapnya</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
