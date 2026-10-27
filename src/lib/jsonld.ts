import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socials";
import { skills } from "@/data/skills";
import type { ArticleSummary } from "@/types/article";

export function getPersonSchema() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://fadhika.vercel.app";
  const sameAsUrls = socialLinks.map((link) => link.url);
  const skillNames = skills.map((skill) => skill.name);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: baseUrl,
    image: `${baseUrl}${profile.profileImage}`,
    sameAs: sameAsUrls,
    description: profile.tagline,
    knowsAbout: skillNames,
    worksFor: {
      "@type": "Organization",
      name: "TechLabs Inc.",
    },
  };
}

export function getBlogPostingSchema(article: ArticleSummary) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://fadhika.vercel.app";

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: profile.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${article.slug}`,
    },
    ...(article.coverImage ? { image: `${baseUrl}${article.coverImage}` } : {}),
  };
}
