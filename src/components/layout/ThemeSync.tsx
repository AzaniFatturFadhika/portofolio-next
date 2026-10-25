"use client";

import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

/**
 * Outstatic bundles its own next-themes provider (storageKey "theme") and
 * writes its class straight onto <html>. Because the root provider stays
 * mounted across client navigation, its class is never re-applied when
 * leaving /outstatic, so the CMS theme leaks into the portfolio.
 *
 * While outside the CMS we re-assert the portfolio theme (and keep the
 * "theme" key in sync so Outstatic starts from the same value), including
 * reacting to late writes from Outstatic's injected script.
 */
export function ThemeSync() {
  const pathname = usePathname();
  const { theme, resolvedTheme } = useTheme();
  const desired = useRef<"light" | "dark" | null>(null);

  const isCms = pathname?.startsWith("/outstatic") ?? false;

  useEffect(() => {
    const root = document.documentElement;

    // Portfolio CSS custom properties (globals.css) are gated behind
    // data-theme="portfolio" and outrank Outstatic's global :root rules, so keep
    // the attribute on portfolio routes and drop it inside the CMS so Outstatic's
    // own theme owns :root there. This prevents the CMS theme from leaking into
    // the portfolio when navigating back to /.
    if (isCms) {
      delete root.dataset.theme;
    } else {
      root.dataset.theme = "portfolio";

      try {
        localStorage.setItem("theme", theme ?? "system");
      } catch {
        // storage unavailable
      }
    }

    desired.current =
      resolvedTheme === "dark" || resolvedTheme === "light" ? resolvedTheme : null;

    if (!desired.current || isCms) return;

    const apply = () => {
      const wantDark = desired.current === "dark";
      if (root.classList.contains("dark") !== wantDark) {
        root.classList.toggle("dark", wantDark);
      }
      if (root.style.colorScheme !== desired.current) {
        root.style.colorScheme = desired.current!;
      }
    };

    apply();

    const observer = new MutationObserver(apply);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    return () => observer.disconnect();
  }, [pathname, theme, resolvedTheme, isCms]);

  return null;
}
