import styles from "./SocialMediaLinks.module.css";

export function SocialMediaLinks({ links }) {
  return (
    <div className={styles.socialMediaLinks}>
      {links.map(({ href, alt, src }) => (
        <a key={href} href={href}>
          <img alt={alt} src={src} />
        </a>
      ))}
    </div>
  );
}
