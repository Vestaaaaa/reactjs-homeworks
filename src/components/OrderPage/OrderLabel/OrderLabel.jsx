export function OrderLabel({ className, name, children, inputClassName }) {
  return (
    <label className={className}>
      {children}
      <input type="text" name={name} className={inputClassName} required />
    </label>
  );
}
