export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage?: string;
}

export interface Frontmatter {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}