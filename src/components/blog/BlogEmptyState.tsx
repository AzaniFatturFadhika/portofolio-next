import Link from "next/link";
import { BookOpen } from "lucide-react";

interface BlogEmptyStateProps {
  message?: string;
}

export function BlogEmptyState({
  message = "Belum ada artikel yang diterbitkan.",
}: BlogEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
        <BookOpen className="w-6 h-6" aria-hidden="true" />
      </span>
      <p className="text-muted-foreground text-sm sm:text-base max-w-md">{message}</p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border/80 hover:border-primary/30 text-foreground font-bold rounded-full text-sm hover:shadow-md transition-all duration-300"
      >
        Lihat Semua Artikel
      </Link>
    </div>
  );
}

export default BlogEmptyState;
