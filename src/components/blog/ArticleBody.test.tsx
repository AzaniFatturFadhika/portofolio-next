import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { ArticleBody } from "@/components/blog/ArticleBody";

describe("ArticleBody", () => {
  it("renders markdown without injecting raw HTML", () => {
    const html = renderToStaticMarkup(
      <ArticleBody content={"# Hello\n\n<script>alert(1)</script>\n"} />,
    );
    expect(html).toContain("Hello");
    expect(html).not.toContain("<script>");
  });

  it("renders code blocks and tables", () => {
    const html = renderToStaticMarkup(
      <ArticleBody
        content={
          "```ts\nconst a = 1;\n```\n\n| H |\n| - |\n| V |\n"
        }
      />,
    );
    expect(html).toContain("<code");
    expect(html).toContain("<table");
  });

  it("renders blockquotes as callouts", () => {
    const html = renderToStaticMarkup(
      <ArticleBody content={"> A helpful note.\n"} />,
    );
    expect(html).toContain("A helpful note.");
  });
});
