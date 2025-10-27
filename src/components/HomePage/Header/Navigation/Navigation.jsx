import styles from "../Header.module.css";
import { NavigationLink } from "../NavigationLink/NavigationLink";
import { CartIcon } from "../CartIcon/CartIcon";

const links = [
  {
    href: "/",
    label: "Home",
    style: { color: "#00bec1", textDecoration: "none" },
  },
  {
    href: "/menu",
    label: "Menu",
    style: { color: "#222", textDecoration: "none" },
  },
  {
    href: "/company",
    label: "Company",
    style: { color: "#222", textDecoration: "none" },
  },
  {
    href: "/login",
    label: "Login",
    style: { color: "#222", textDecoration: "none" },
  },
];

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      {links.map(({ href, label, style }) => (
        <NavigationLink key={href} href={href} style={style}>
          {label}
        </NavigationLink>
      ))}
      <CartIcon />
    </nav>
  );
}
