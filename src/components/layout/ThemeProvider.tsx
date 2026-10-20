"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (nextTheme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const STORAGE_KEY = "theme";
const DEFAULT_THEME: Theme = "system";

function resolveThemeValue(theme: Theme): "light" | "dark" {
  if (theme === "system" && typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return theme === "dark" ? "dark" : "light";
}

function applyThemeToDocument(
  resolvedTheme: "light" | "dark",
  attribute: "class" | "data-theme"
) {
  const element = document.documentElement;
  if (attribute === "class") {
    element.classList.remove("light", "dark");
    element.classList.add(resolvedTheme);
  } else {
    element.setAttribute("data-theme", resolvedTheme);
  }
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
  resolvedTheme: "light",
});

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = DEFAULT_THEME,
  enableSystem = true,
  disableTransitionOnChange = false,
}: {
  children: ReactNode;
  attribute?: "class" | "data-theme";
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return (stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : defaultTheme) as Theme;
    } catch {
      return defaultTheme;
    }
  });

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() =>
    resolveThemeValue(theme)
  );

  const setTheme = useCallback(
    (nextTheme: Theme) => {
      setThemeState(nextTheme);
      try {
        localStorage.setItem(STORAGE_KEY, nextTheme);
      } catch {
        // LocalStorage is unavailable; ignore.
      }
    },
    []
  );

  // Resolve the effective theme and apply it to the document element.
  useEffect(() => {
    const resolved = resolveThemeValue(theme);
    setResolvedTheme(resolved);
    applyThemeToDocument(resolved, attribute);
  }, [theme, attribute]);

  // Listen to system preference changes when the effective theme is "system".
  useEffect(() => {
    if (!enableSystem) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme !== "system") return;
      const resolved = media.matches ? "dark" : "light";
      setResolvedTheme(resolved);
      applyThemeToDocument(resolved, attribute);
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [enableSystem, theme, attribute]);

  // Temporarily disable CSS transitions while the theme class changes so the
  // theme switch isn't animated (mirrors next-themes' disableTransitionOnChange).
  useEffect(() => {
    if (!disableTransitionOnChange) return;
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(
      document.createTextNode(
        "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
      )
    );
    document.head.appendChild(style);
    window.getComputedStyle(document.body);
    const timeout = setTimeout(() => {
      document.head.removeChild(style);
    }, 1);
    return () => {
      clearTimeout(timeout);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [disableTransitionOnChange]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
