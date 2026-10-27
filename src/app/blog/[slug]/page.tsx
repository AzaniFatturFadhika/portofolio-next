import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleMeta } from "@/components/blog/ArticleMeta";
import { formatDisplayDate } from "@/lib/articles";
import { getArticleBySlug, getArticleSlugs } from "@/lib/cms";
import { getBlogPostingSchema } from "@/lib/jsonld";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: BlogPostPageProps) {
  const { slug } = await props.params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Not Found | Fadhika Blog" };
  }

  return {
    title: `${article.title} | Fadhika Blog`,
    description: article.excerpt,
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const { slug } = await props.params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const postingSchema = getBlogPostingSchema({
    ...article,
    publishedAt: article.publishedAt,
  });

  return (
    <div className="py-12 bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }}
      />
      <Container className="max-w-4xl">
        {/* Breadcrumb & Back button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-border/60">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-semibold line-clamp-1">
              {article.title}
            </span>
          </nav>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/80 hover:text-primary dark:hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="flex flex-col gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
              {article.category}
            </span>
            <ArticleMeta
              date={formatDisplayDate(article.publishedAt)}
              readTime={article.readTime}
            />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-foreground">
            {article.title}
          </h1>
        </header>

        {/* Article Content Body */}
        <main className="p-6 sm:p-10 rounded-2xl bg-card border border-border/80 shadow-sm leading-relaxed text-foreground/90 prose prose-slate dark:prose-invert max-w-none">
          <ArticleBody content={article.content} />
        </main>
      </Container>
    </div>
  );
}
