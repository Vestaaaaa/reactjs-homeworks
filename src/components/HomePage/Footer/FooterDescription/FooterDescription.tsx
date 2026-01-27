import styles from "./FooterDescription.module.css";
import { useLanguageContext } from "../../../../context/LanguageContext";

export function FooterDescription() {
  const { t } = useLanguageContext();
  return (
    <div className={styles.footerDescription}>
      <img src="/src/assets/icon.png" alt="Icon" className={styles.iconImage} />
      <p className={styles.description}>{t("footer.footerDesc")}</p>
    </div>
  );
}
