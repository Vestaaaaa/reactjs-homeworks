interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavigationLink({ href, children }: NavigationLinkProps) {
  return <a href={href}>{children}</a>;
}
