import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.storage.*.neon.tech",
      },
      {
        protocol: "https",
        hostname: "*.neon.tech",
      },
    ],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [],
  },
});

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withPayload(withMDX(withNextIntl(nextConfig)));