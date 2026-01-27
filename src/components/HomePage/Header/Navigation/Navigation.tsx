import styles from "./Navigation.module.css";
import { NavigationLink } from "../NavigationLink/NavigationLink";
import { CartIcon } from "../CartIcon/CartIcon";
import { useLanguageContext } from "../../../../context/LanguageContext";

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  {
    href: "/",
    label: "header.home",
  },
  {
    href: "/menu",
    label: "header.menu",
  },
  {
    href: "/company",
    label: "header.company",
  },
  {
    href: "/login",
    label: "header.login",
  },
];

export function Navigation() {
  const { t } = useLanguageContext();
  return (
    <nav className={styles.navigation}>
      {links.map(({ href, label }) => (
        <NavigationLink key={href} href={href}>
          {t(label)}
        </NavigationLink>
      ))}
      <CartIcon />
    </nav>
  );
}
