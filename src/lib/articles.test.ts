import { describe, expect, it } from "vitest";
import {
  filterPublished,
  formatDisplayDate,
  normalizeStatus,
  parseArticleFile,
  selectLatest,
  slugFromFileName,
  sortByPublishedAtDesc,
  toSortTimestamp,
  toSummary,
} from "@/lib/articles";
import type { Article } from "@/types/article";

function makeArticle(overrides: Partial<Article> = {}): Article {
  return {
    slug: "sample",
    title: "Sample",
    excerpt: "Excerpt",
    publishedAt: "2026-06-01",
    readTime: "5 min read",
    category: "TypeScript",
    status: "published",
    content: "Body",
    ...overrides,
  };
}

describe("normalizeStatus", () => {
  it("treats draft case-insensitively", () => {
    expect(normalizeStatus("Draft")).toBe("draft");
    expect(normalizeStatus(" DRAFT ")).toBe("draft");
  });

  it("defaults unknown or missing values to published", () => {
    expect(normalizeStatus("published")).toBe("published");
    expect(normalizeStatus("anything-else")).toBe("published");
    expect(normalizeStatus(undefined)).toBe("published");
  });
});

describe("formatDisplayDate", () => {
  it("formats ISO dates without depending on host locale", () => {
    expect(formatDisplayDate("2026-06-01")).toBe("June 1, 2026");
    expect(formatDisplayDate("2026-05-20")).toBe("May 20, 2026");
  });

  it("passes through non-ISO values and empty strings", () => {
    expect(formatDisplayDate("June 1, 2026")).toBe("June 1, 2026");
    expect(formatDisplayDate("")).toBe("");
  });
});

describe("toSortTimestamp", () => {
  it("returns zero for unparseable values so they sort last", () => {
    expect(toSortTimestamp("not-a-date")).toBe(0);
    expect(toSortTimestamp("2026-06-01")).toBeGreaterThan(0);
  });
});

describe("sortByPublishedAtDesc", () => {
  it("orders newest first and does not mutate the input", () => {
    const input = [
      makeArticle({ slug: "old", publishedAt: "2026-05-20" }),
      makeArticle({ slug: "new", publishedAt: "2026-06-05" }),
    ];
    const sorted = sortByPublishedAtDesc(input);
    expect(sorted.map((a) => a.slug)).toEqual(["new", "old"]);
    expect(input[0].slug).toBe("old");
  });
});

describe("filterPublished", () => {
  it("excludes drafts", () => {
    const articles = [
      makeArticle({ slug: "live" }),
      makeArticle({ slug: "wip", status: "draft" }),
    ];
    expect(filterPublished(articles).map((a) => a.slug)).toEqual(["live"]);
  });
});

describe("selectLatest", () => {
  it("limits to the requested count and clamps negatives", () => {
    const articles = [makeArticle({ slug: "a" }), makeArticle({ slug: "b" })];
    expect(selectLatest(articles, 1)).toHaveLength(1);
    expect(selectLatest(articles, -1)).toHaveLength(0);
  });
});

describe("toSummary", () => {
  it("drops content and status and formats the date", () => {
    const summary = toSummary(makeArticle({ publishedAt: "2026-06-01" }));
    expect(summary).not.toHaveProperty("content");
    expect(summary).not.toHaveProperty("status");
    expect(summary.publishedAt).toBe("June 1, 2026");
  });
});

describe("parseArticleFile", () => {
  it("parses frontmatter and body", () => {
    const raw = `---
title: "Hello"
excerpt: "World"
publishedAt: "2026-06-01"
readTime: "3 min read"
category: "Next.js"
status: "published"
slug: "hello"
---

Body text here.
`;
    const article = parseArticleFile(raw, "fallback");
    expect(article).toMatchObject({
      slug: "hello",
      title: "Hello",
      excerpt: "World",
      publishedAt: "2026-06-01",
      readTime: "3 min read",
      category: "Next.js",
      status: "published",
      content: "Body text here.",
    });
  });

  it("falls back to the file name slug and defaults", () => {
    const raw = `---
title: "No Slug"
---

Body.
`;
    const article = parseArticleFile(raw, "from-file");
    expect(article?.slug).toBe("from-file");
    expect(article?.status).toBe("published");
    expect(article?.category).toBe("Article");
  });

  it("rejects files without title, slug, or body", () => {
    expect(parseArticleFile("---\ntitle: x\n---\n", "s")).toBeNull();
    expect(parseArticleFile("---\nslug: s\n---\n", "s")).toBeNull();
    expect(parseArticleFile("---\ntitle: x\nslug: s\n---\n", "s")).toBeNull();
  });
});

describe("slugFromFileName", () => {
  it("strips md and mdx extensions", () => {
    expect(slugFromFileName("hello.mdx")).toBe("hello");
    expect(slugFromFileName("hello.md")).toBe("hello");
  });
});
