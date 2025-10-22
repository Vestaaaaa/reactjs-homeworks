import styles from "./Footer.module.css";
import { FooterColumn } from "./FooterColumn/FooterColumn";
import { FooterDescription } from "./FooterDescription/FooterDescription";
import { FooterEnding } from "./FooterEnding/FooterEnding";

const columnsData = [
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/order", label: "Order" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Template",
    links: [
      { href: "/", label: "Style Guide" },
      { href: "/", label: "Changelog" },
      { href: "/", label: "Licence" },
      { href: "/", label: "Webflow University" },
    ],
  },
  {
    title: "Flowbase",
    links: [{ href: "/", label: "More Cloneables" }],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        className={styles.backgroundDots}
        src="/src/assets/background-dots.png"
        alt="Background Dots"
      />
      <div className={styles.mainContainer}>
        <FooterDescription />

        <div className={styles.footerColumns}>
          {columnsData.map(({ title, links }) => (
            <FooterColumn key={title} title={title} links={links} />
          ))}
        </div>
      </div>

      <img src="/src/assets/line.png" alt="Line" className={styles.line} />

      <FooterEnding />
    </footer>
  );
}
