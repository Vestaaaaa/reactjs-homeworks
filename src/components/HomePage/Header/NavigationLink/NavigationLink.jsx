export function NavigationLink({ href, children, style }) {
  return (
    <a href={href} style={style}>
      {children}
    </a>
  );
}
