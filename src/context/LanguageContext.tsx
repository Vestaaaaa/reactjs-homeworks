import { createContext, useContext } from "react";
import { useLanguage } from "../hooks/useLanguage";

type LanguageContextType = ReturnType<typeof useLanguage>;

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const languageState = useLanguage();

  return (
    <LanguageContext.Provider value={languageState}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguageContext must be used inside LanguageProvider");
  }
  return ctx;
};
