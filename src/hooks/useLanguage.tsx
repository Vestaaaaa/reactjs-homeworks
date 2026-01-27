import { useState, useEffect } from "react";
import translationsData from "../../src/locales/translations.json" with { type: "json" };

interface Translations {
  en: Record<string, Record<string, string>>;
  ru: Record<string, Record<string, string>>;
  by: Record<string, Record<string, string>>;
}

export const useLanguage = () => {
  const [language, setLanguage] = useState<"en" | "ru" | "by">("en");

  const translations: Translations = translationsData as Translations;

  useEffect(() => {
    const saved = localStorage.getItem("language") as "en" | "ru" | "by";
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (path: string): string => {
    try {
      const keys = path.split(".");
      let current: any = translations[language];

      for (const key of keys) {
        current = current?.[key];
        if (current === undefined || current === null) {
          return path;
        }
      }

      return String(current);
    } catch {
      return path;
    }
  };

  return {
    language,
    setLanguage,
    t,
  };
};
