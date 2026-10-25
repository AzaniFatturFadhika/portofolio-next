import Markdown from "markdown-to-jsx";
import type { ReactNode } from "react";
import Callout from "@/components/mdx/Callout";
import Pre from "@/components/mdx/Pre";

interface ArticleBodyProps {
  content: string;
}

function CalloutBlockquote({ children }: { children?: ReactNode }) {
  return (
    <Callout type="note">
      <div className="[&_p]:my-1">{children}</div>
    </Callout>
  );
}

export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <Markdown
      options={{
        forceBlock: true,
        overrides: {
          pre: { component: Pre },
          blockquote: { component: CalloutBlockquote },
          table: {
            props: {
              className:
                "w-full my-6 text-sm border-collapse overflow-x-auto block",
            },
          },
          th: {
            props: {
              className:
                "border border-border bg-muted/60 px-3 py-2 text-left font-semibold",
            },
          },
          td: {
            props: { className: "border border-border px-3 py-2 align-top" },
          },
          img: {
            props: {
              className: "rounded-xl my-6 max-w-full h-auto",
              loading: "lazy",
            },
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
}

export default ArticleBody;
