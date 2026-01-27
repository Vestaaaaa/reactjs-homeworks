import { useTheme } from "../../../../context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const currentTheme = theme;

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Переключить на ${currentTheme === "light" ? "тёмную" : "светлую"} тему`}
    >
      {currentTheme === "light" ? "🌙" : "☀️"}
    </button>
  );
};
