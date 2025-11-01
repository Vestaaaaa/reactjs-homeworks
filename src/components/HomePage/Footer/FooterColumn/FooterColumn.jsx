import styles from "./FooterColumn.module.css";

export function FooterColumn({ title, links }) {
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
