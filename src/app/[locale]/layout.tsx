import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { routing } from "@/i18n/routing";
import "../globals.css";

const outfit = { variable: "font-sans" };
const firaCode = { variable: "font-mono" };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(
  props: LocaleLayoutProps,
): Promise<Metadata> {
  const { locale: rawLocale } = await props.params;
  if (!hasLocale(routing.locales, rawLocale)) notFound();
  const locale = rawLocale as (typeof routing.locales)[number];

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fadhika.vercel.app";
  const ogLocale = locale === "id" ? "id_ID" : "en_US";

  return {
    title: {
      default: t("title"),
      template: "%s | Fadhika Portfolio",
    },
    description: t("description"),
    metadataBase: new URL(baseUrl),
    authors: [{ name: "Fadhika" }],
    keywords: t.raw("keywords") as string[],
    alternates: {
      canonical: `/${locale}`,
      languages: { id: "/id", en: "/en" },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}/${locale}`,
      siteName: "Fadhika Portfolio",
      images: [
        {
          url: "/images/og/og-image.png",
          width: 1200,
          height: 1200,
          alt: "Fadhika Portfolio Brand Banner",
        },
      ],
      locale: ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/og/og-image.png"],
    },
  };
}

export default async function LocaleLayout(props: LocaleLayoutProps) {
  const { locale } = await props.params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${outfit.variable} ${firaCode.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased font-sans">
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex-1 flex flex-col">{props.children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
