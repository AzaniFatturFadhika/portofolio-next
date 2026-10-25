import { Calendar, Clock } from "lucide-react";

interface ArticleMetaProps {
  date: string;
  readTime: string;
  className?: string;
}

export function ArticleMeta({ date, readTime, className = "" }: ArticleMetaProps) {
  return (
    <div className={`flex items-center gap-4 text-xs text-muted-foreground ${className}`}>
      <span className="flex items-center gap-1.5">
        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
        {date}
      </span>
      <span className="flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
        {readTime}
      </span>
    </div>
  );
}

export default ArticleMeta;
