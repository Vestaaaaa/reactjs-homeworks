import styles from "./Header.module.css";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { ThemeToggle } from "./ThemeToggle/ThemeToggle";
import { LanguageToggle } from "./LanguageToggle/LanguageToggle";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Navigation />
      <ThemeToggle />
      <LanguageToggle />
    </div>
  );
};
