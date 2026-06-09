import React from "react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage?: string;
  content: React.ComponentType; // React component rendering the rich-text blog post body
}
