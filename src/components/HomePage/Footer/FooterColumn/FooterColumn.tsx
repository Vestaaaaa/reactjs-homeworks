import styles from "./FooterColumn.module.css";

interface Link {
  href: string;
  label: string;
}

interface FooterColumnProps {
  title: string;
  links: Link[];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className={styles.footerBlock}>
      <div className={styles.footerTitle}>{title}</div>
      {links.map(({ href, label }) => (
        <a key={href} href={href}>
          {label}
        </a>
      ))}
    </div>
  );
}
