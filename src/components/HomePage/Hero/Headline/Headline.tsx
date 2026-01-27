import styles from "./Headline.module.css";
import { useLanguageContext } from "../../../../context/LanguageContext";

export function Headline() {
  const { t } = useLanguageContext();
  return (
    <h1 className={styles.h1Hp}>
      {t("homePage.title1")}{" "}
      <span className={styles.highlight}>{t("homePage.title2")}</span>{" "}
      {t("homePage.title3")}
    </h1>
  );
}
