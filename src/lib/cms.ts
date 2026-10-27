import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import {
  filterPublished,
  parseArticleFile,
  slugFromFileName,
  sortByPublishedAtDesc,
  toSummary,
} from "@/lib/articles";
import type { Article, ArticleSummary } from "@/types/article";

const CONTENT_DIR = path.join(process.cwd(), "outstatic", "content", "articles");
const ARTICLE_EXTENSIONS = [".mdx", ".md"];

/**
 * Reads every article file from the content directory. Returns an empty list when
 * the directory does not exist yet, so an uninitialised CMS never breaks a build.
 */
async function readArticleFiles(): Promise<Article[]> {
  let fileNames: string[];
  try {
    const dirents = await readdir(CONTENT_DIR, { withFileTypes: true });
    fileNames = dirents
      .filter((dirent) => dirent.isFile())
      .map((dirent) => dirent.name)
      .filter((name) => ARTICLE_EXTENSIONS.includes(path.extname(name).toLowerCase()));
  } catch {
    return [];
  }

  const parsed = await Promise.all(
    fileNames.map(async (fileName) => {
      try {
        const raw = await readFile(path.join(CONTENT_DIR, fileName), "utf8");
        return parseArticleFile(raw, slugFromFileName(fileName));
      } catch {
        return null;
      }
    }),
  );

  return parsed.filter((article): article is Article => article !== null);
}

export async function getArticles(): Promise<ArticleSummary[]> {
  const articles = await readArticleFiles();
  return sortByPublishedAtDesc(filterPublished(articles)).map(toSummary);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await readArticleFiles();
  const match = articles.find((article) => article.slug === slug);
  if (!match || match.status !== "published") return null;
  return match;
}

export async function getArticleSlugs(): Promise<string[]> {
  const articles = await readArticleFiles();
  return filterPublished(articles).map((article) => article.slug);
}
