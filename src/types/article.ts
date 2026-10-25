export type ArticleStatus = "published" | "draft";

export interface ArticleAuthor {
  name?: string;
  picture?: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  status: ArticleStatus;
  author?: ArticleAuthor;
  coverImage?: string;
  content: string;
}

export type ArticleSummary = Omit<Article, "content" | "status">;
