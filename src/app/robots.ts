import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://fadhika.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/outstatic", "/api/outstatic"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
