import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ChevronRight, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/routing";
import { blogPosts } from "@/data/blog";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

interface BlogListingProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(
  props: BlogListingProps,
): Promise<Metadata> {
  const { locale: rawLocale } = await props.params;
  if (!hasLocale(routing.locales, rawLocale)) notFound();
  const locale = rawLocale as (typeof routing.locales)[number];
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("blogTitle"), description: t("blogDescription") };
}

export default async function BlogListingPage(props: BlogListingProps) {
  const { locale: rawLocale } = await props.params;
  if (!hasLocale(routing.locales, rawLocale)) notFound();
  const locale = rawLocale as (typeof routing.locales)[number];
  setRequestLocale(locale);
  const t = await getTranslations("Blog");
  const tItemsBase = await getTranslations("Blog.items");
  const tItems = tItemsBase as unknown as (key: string) => string;

  return (
    <div className="py-12 bg-background min-h-screen">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-border/60">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              {t("home")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-semibold">{t("blog")}</span>
          </nav>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/80 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backHome")}
          </Link>
        </div>

        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {t("pageTitle")}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            {t("pageSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <Card className="h-full flex flex-col gap-5 p-7 group-hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h2 className="text-xl sm:text-2xl font-bold group-hover:text-primary dark:group-hover:text-primary transition-colors leading-snug">
                    {tItems(`${post.slug}.title`)}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tItems(`${post.slug}.excerpt`)}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary dark:text-accent mt-auto pt-2">
                  <span>{t("readMore")}</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
