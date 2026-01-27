import styles from "./FooterEnding.module.css";
import { SocialMediaLinks } from "../SocialMediaLinks/SocialMediaLinks";
import { useLanguageContext } from "../../../../context/LanguageContext";

interface SocialLink {
  href: string;
  alt: string;
  src: string;
}

const socialLinks: SocialLink[] = [
  { href: "/", alt: "Instagram", src: "/src/assets/inst.png" },
  { href: "/", alt: "Twitter", src: "/src/assets/twitter.png" },
  { href: "/", alt: "YouTube", src: "/src/assets/youtube.png" },
];

export function FooterEnding() {
  const { t } = useLanguageContext();
  return (
    <div className={styles.footerEnding}>
      <p>
        {t("footer.textFooter1")}
        <span className={styles.highlight}>{t("footer.textFooter2")}</span>
        {t("footer.textFooter3")}{" "}
        <span className={styles.highlight}>{t("footer.textFooter4")}</span>
      </p>
      <SocialMediaLinks links={socialLinks} />
    </div>
  );
}
