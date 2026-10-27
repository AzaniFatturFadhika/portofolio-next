import matter from "gray-matter";
import type {
  Article,
  ArticleAuthor,
  ArticleStatus,
  ArticleSummary,
} from "@/types/article";

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const ARTICLES_COLLECTION = "articles";

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value.trim() : fallback;
}

function asAuthor(value: unknown): ArticleAuthor | undefined {
  if (!value || typeof value !== "object") return undefined;
  const record = value as Record<string, unknown>;
  const name = asString(record.name);
  const picture = asString(record.picture);
  if (!name && !picture) return undefined;
  return {
    name: name || undefined,
    picture: picture || undefined,
  };
}

export function normalizeStatus(value: unknown): ArticleStatus {
  return asString(value).toLowerCase() === "draft" ? "draft" : "published";
}

/**
 * Converts a stored publication value into a stable display date.
 * Uses a fixed month table so output never depends on the host locale.
 */
export function formatDisplayDate(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";

  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(trimmed);
  if (!match) return trimmed;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (month < 1 || month > 12 || day < 1 || day > 31) return trimmed;

  return `${MONTH_NAMES[month - 1]} ${day}, ${year}`;
}

/**
 * Sortable timestamp for a stored publication value. Unparseable values sort last.
 */
export function toSortTimestamp(value: string): number {
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function sortByPublishedAtDesc<T extends { publishedAt: string }>(
  articles: T[],
): T[] {
  return [...articles].sort(
    (a, b) => toSortTimestamp(b.publishedAt) - toSortTimestamp(a.publishedAt),
  );
}

export function filterPublished<T extends { status: ArticleStatus }>(
  articles: T[],
): T[] {
  return articles.filter((article) => article.status === "published");
}

export function selectLatest<T>(items: T[], count: number): T[] {
  return items.slice(0, Math.max(0, count));
}

export function toSummary(article: Article): ArticleSummary {
  const { content: _content, status: _status, ...summary } = article;
  void _content;
  void _status;
  return {
    ...summary,
    publishedAt: formatDisplayDate(article.publishedAt),
  };
}

/**
 * Parses a single MDX/Markdown article file. Returns null when the file does not
 * carry the minimum frontmatter needed to render an article.
 */
export function parseArticleFile(raw: string, fallbackSlug: string): Article | null {
  const parsed = matter(raw);
  const data = parsed.data as Record<string, unknown>;

  const title = asString(data.title);
  const slug = asString(data.slug, fallbackSlug);
  if (!title || !slug) return null;

  const content = parsed.content.trim();
  if (!content) return null;

  return {
    slug,
    title,
    excerpt: asString(data.excerpt) || asString(data.description),
    publishedAt: asString(data.publishedAt) || asString(data.date),
    readTime: asString(data.readTime),
    category: asString(data.category, "Article"),
    status: normalizeStatus(data.status),
    author: asAuthor(data.author),
    coverImage: asString(data.coverImage) || undefined,
    content,
  };
}

export function slugFromFileName(fileName: string): string {
  return fileName.replace(/\.mdx?$/i, "");
}
