interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  style: React.CSSProperties;
}

export function NavigationLink({ href, children, style }: NavigationLinkProps) {
  return (
    <a href={href} style={style}>
      {children}
    </a>
  );
}
