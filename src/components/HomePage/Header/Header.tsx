import styles from "./Header.module.css";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { useTheme } from "../../../context/ThemeContext";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const currentTheme = theme;

  return (
    <div className={styles.header}>
      <Logo />
      <Navigation />
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label={`Переключить на ${currentTheme === "light" ? "тёмную" : "светлую"} тему`}
      >
        {currentTheme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
};
