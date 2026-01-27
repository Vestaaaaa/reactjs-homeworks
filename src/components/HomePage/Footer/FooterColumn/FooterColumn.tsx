import styles from "./FooterColumn.module.css";
import { useLanguageContext } from "../../../../context/LanguageContext";

interface Link {
  href: string;
  label: string;
}

interface FooterColumnProps {
  title: string;
  links: Link[];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  const { t } = useLanguageContext();
  return (
    <div className={styles.footerBlock}>
      <div className={styles.footerTitle}>{title}</div>
      {links.map(({ href, label }) => (
        <a key={href} href={href}>
          {t(label)}
        </a>
      ))}
    </div>
  );
}
