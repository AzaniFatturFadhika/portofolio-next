declare module "*.mdx" {
  import type { ComponentType } from "react";
  const component: ComponentType<Record<string, unknown>>;
  export default component;
  export const metadata: {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    [key: string]: unknown;
  };
}