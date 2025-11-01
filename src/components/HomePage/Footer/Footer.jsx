import styles from "./Footer.module.css";
import backgroundDots from "../../../assets/background-dots.png";
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
      { href: "https://www.google.com/", label: "Style Guide" },
      { href: "https://www.google.com/", label: "Changelog" },
      { href: "https://www.google.com/", label: "Licence" },
      { href: "https://www.google.com/", label: "Webflow University" },
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
        src={backgroundDots}
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
