import styles from "./Navigation.module.css";
import { NavigationLink } from "../NavigationLink/NavigationLink";
import { CartIcon } from "../CartIcon/CartIcon";

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/menu",
    label: "Menu",
  },
  {
    href: "/company",
    label: "Company",
  },
  {
    href: "/login",
    label: "Login",
  },
];

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      {links.map(({ href, label }) => (
        <NavigationLink key={href} href={href}>
          {label}
        </NavigationLink>
      ))}
      <CartIcon />
    </nav>
  );
}
