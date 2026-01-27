import styles from "./Footer.module.css";
import backgroundDots from "../../../assets/background-dots.png";
import { FooterColumn } from "./FooterColumn/FooterColumn";
import { FooterDescription } from "./FooterDescription/FooterDescription";
import { FooterEnding } from "./FooterEnding/FooterEnding";
import { useLanguageContext } from "../../../context/LanguageContext";

interface Link {
  href: string;
  label: string;
}

interface ColumnData {
  title: string;
  links: Link[];
}

const columnsData: ColumnData[] = [
  {
    title: "footer.company",
    links: [
      { href: "/", label: "footer.home" },
      { href: "/order", label: "footer.order" },
      { href: "/faq", label: "footer.faq" },
      { href: "/contact", label: "footer.contact" },
    ],
  },
  {
    title: "footer.template",
    links: [
      { href: "https://www.google.com/", label: "footer.styleGuide" },
      { href: "https://www.google.com/", label: "footer.changelog" },
      { href: "https://www.google.com/", label: "footer.licence" },
      { href: "https://www.google.com/", label: "footer.webflowUniversity" },
    ],
  },
  {
    title: "footer.flowbase",
    links: [{ href: "/", label: "footer.moreCloneables" }],
  },
];

export function Footer() {
  const { t } = useLanguageContext();
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
            <FooterColumn key={title} title={t(title)} links={links} />
          ))}
        </div>
      </div>

      <img src="/src/assets/line.png" alt="Line" className={styles.line} />

      <FooterEnding />
    </footer>
  );
}
