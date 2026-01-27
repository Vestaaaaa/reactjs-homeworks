import { useState, useEffect, useRef } from "react";
import styles from "./LanguageToggle.module.css";
import { useLanguageContext } from "../../../../context/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", name: "EN", flag: "🇺🇸" },
    { code: "ru", name: "RU", flag: "🇷🇺" },
    { code: "by", name: "BY", flag: "🇧🇾" },
  ];

  const currentLang = languages.find((l) => l.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.languageDropdown} ref={dropdownRef}>
      <button
        className="language-toggle theme-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentLang?.flag} {currentLang?.name}
      </button>

      {isOpen && (
        <div className={styles.languageMenu}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.languageItem} ${lang.code === language ? styles.active : ""}`}
              onClick={() => {
                setLanguage(lang.code as "en" | "ru" | "by");
                setIsOpen(false);
              }}
            >
              {lang.flag} {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
