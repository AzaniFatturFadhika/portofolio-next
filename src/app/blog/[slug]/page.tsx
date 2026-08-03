import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Calendar, Clock, ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";

import { blogPosts } from "@/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: BlogPostPageProps) {
  const { slug } = await props.params;

  try {
    const { metadata } = await import(`@/content/blog/${slug}.mdx`);
    return {
      title: `${metadata.title} | Fadhika Blog`,
      description: metadata.excerpt,
    };
  } catch {
    return { title: "Not Found | Fadhika Blog" };
  }
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const { slug } = await props.params;

  let Post;
  let metadata;

  try {
    const postModule = await import(`@/content/blog/${slug}.mdx`);
    Post = postModule.default;
    metadata = postModule.metadata;
  } catch {
    notFound();
  }

  return (
    <div className="py-12 bg-background min-h-screen">
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
              {metadata.title}
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
              {metadata.category}
            </span>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {metadata.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {metadata.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-foreground">
            {metadata.title}
          </h1>
        </header>

        {/* Article Content Body */}
        <main className="p-6 sm:p-10 rounded-2xl bg-card border border-border/80 shadow-sm leading-relaxed text-foreground/90 prose prose-slate dark:prose-invert max-w-none">
          <Post />
        </main>
      </Container>
    </div>
  );
}