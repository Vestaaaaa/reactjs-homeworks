export function Button({ className, disabled, children, ...props }) {
  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
