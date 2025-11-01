import styles from "./FooterEnding.module.css";
import { SocialMediaLinks } from "../SocialMediaLinks/SocialMediaLinks";

const socialLinks = [
  { href: "/", alt: "Instagram", src: "/src/assets/inst.png" },
  { href: "/", alt: "Twitter", src: "/src/assets/twitter.png" },
  { href: "/", alt: "YouTube", src: "/src/assets/youtube.png" },
];

export function FooterEnding() {
  return (
    <div className={styles.footerEnding}>
      <p>
        Built by <span className={styles.highlight}>Flowbase</span> Powered by{" "}
        <span className={styles.highlight}>Webflow</span>
      </p>
      <SocialMediaLinks links={socialLinks} />
    </div>
  );
}
