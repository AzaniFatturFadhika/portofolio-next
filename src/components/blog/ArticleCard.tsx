import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Card from "@/components/ui/Card";
import { ArticleMeta } from "@/components/blog/ArticleMeta";
import type { ArticleSummary } from "@/types/article";

interface ArticleCardProps {
  article: ArticleSummary;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/blog/${article.slug}`} className="block h-full group">
      <Card className="h-full flex flex-col justify-between gap-5 p-7 hover:border-primary/30 group-hover:shadow-md transition-all duration-300">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
              {article.category}
            </span>
            <ArticleMeta date={article.publishedAt} readTime={article.readTime} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary dark:group-hover:text-primary transition-colors leading-snug">
              {article.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-border/40 mt-auto">
          <span className="text-xs text-muted-foreground">{article.publishedAt}</span>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-primary dark:text-accent">
            Baca Post
            <ChevronRight
              className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            />
          </span>
        </div>
      </Card>
    </Link>
  );
}

export default ArticleCard;
