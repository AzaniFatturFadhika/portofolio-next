import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { BlogEmptyState } from "@/components/blog/BlogEmptyState";
import { getArticles } from "@/lib/cms";

export const metadata = {
  title: "Blog | Fadhika Portfolio",
  description:
    "Read technical articles on software engineering, web development, React, and TypeScript.",
};

export default async function BlogListingPage() {
  const articles = await getArticles();

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
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/80 hover:text-primary dark:hover:text-primary transition-colors"
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
            Tulisan seputar rekayasa perangkat lunak, optimasi performa, dan
            praktik terbaik dalam menulis kode bersih (clean code).
          </p>
        </div>

        {/* Articles List Grid */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <BlogEmptyState message="Belum ada artikel yang diterbitkan. Silakan kembali lagi nanti." />
        )}
      </Container>
    </div>
  );
}
