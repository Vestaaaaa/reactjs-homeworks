import styles from "../Footer.module.css";

export function FooterDescription() {
  return (
    <div className={styles.footerDescription}>
      <img src="/src/assets/icon.png" alt="Icon" className={styles.iconImage} />
      <p className={styles.description}>
        Takeaway & Delivery template for small - medium businesses.
      </p>
    </div>
  );
}
