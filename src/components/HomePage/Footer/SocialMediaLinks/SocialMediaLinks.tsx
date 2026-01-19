import styles from "./SocialMediaLinks.module.css";

interface SocialLink {
  href: string;
  alt: string;
  src: string;
}

interface SocialMediaLinksProps {
  links: SocialLink[];
}

export function SocialMediaLinks({ links }: SocialMediaLinksProps) {
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
