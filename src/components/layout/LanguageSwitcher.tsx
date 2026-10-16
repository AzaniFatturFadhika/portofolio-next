"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter, routing } from "@/i18n/routing";
import { useParams } from "next/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const switchLocale = (nextLocale: (typeof routing.locales)[number]) => {
    if (nextLocale === locale) return;
    router.replace(
      // @ts-expect-error -- dynamic pathname passthrough preserves params
      { pathname, params },
      { locale: nextLocale },
    );
  };

  return (
    <div
      className="flex items-center rounded-lg bg-card border border-border overflow-hidden"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          aria-pressed={l === locale}
          className={`px-2.5 py-2 text-xs font-bold uppercase tracking-wide transition-colors cursor-pointer ${
            l === locale
              ? "bg-primary text-white"
              : "text-foreground/70 hover:bg-border/20"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
