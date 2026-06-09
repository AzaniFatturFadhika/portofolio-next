import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fadhika.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Fadhika | Junior Software Engineer Portfolio",
    template: "%s | Fadhika Portfolio",
  },
  description: "Portfolio of Fadhika, a Junior Software Engineer showcasing frontend, backend, database, and devops projects and tech articles.",
  metadataBase: new URL(baseUrl),
  authors: [{ name: "Fadhika" }],
  keywords: ["Software Engineer", "Junior Developer", "Portfolio", "Web Developer", "React", "Next.js", "TypeScript"],
  openGraph: {
    title: "Fadhika | Junior Software Engineer Portfolio",
    description: "Portfolio of Fadhika, a Junior Software Engineer showcasing frontend, backend, database, and devops projects and tech articles.",
    url: baseUrl,
    siteName: "Fadhika Portfolio",
    images: [
      {
        url: "/images/og/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Fadhika Portfolio Brand Banner",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fadhika | Junior Software Engineer Portfolio",
    description: "Portfolio of Fadhika, a Junior Software Engineer showcasing frontend, backend, database, and devops projects.",
    images: ["/images/og/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${firaCode.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
