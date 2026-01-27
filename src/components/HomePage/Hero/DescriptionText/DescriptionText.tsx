import styles from "./DescriptionText.module.css";
import { useLanguageContext } from "../../../../context/LanguageContext";

export function DescriptionText() {
  const { t } = useLanguageContext();
  return <p className={styles.pHp}>{t("homePage.description")}</p>;
}
