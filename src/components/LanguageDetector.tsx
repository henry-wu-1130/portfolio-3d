"use client";

import { useEffect } from "react";
import { useI18n } from "@/i18n";

const SUPPORTED_LANGUAGES = ["en", "zh"] as const;

type Language = (typeof SUPPORTED_LANGUAGES)[number];

function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const browserLangs = navigator.languages || [navigator.language];
  for (const lang of browserLangs) {
    const short = lang.split("-")[0];
    if (SUPPORTED_LANGUAGES.includes(short as Language)) {
      return short as Language;
    }
  }
  return "en";
}

export default function LanguageDetector() {
  const { language, setLanguage } = useI18n();

  useEffect(() => {
    // Only set if not already set (avoid overwriting user choice)
    const stored = typeof window !== "undefined" && localStorage.getItem("language-storage");
    if (!stored) {
      const detected = detectBrowserLanguage();
      if (language !== detected) {
        setLanguage(detected);
      }
    }
  }, [language, setLanguage]);

  return null;
}
