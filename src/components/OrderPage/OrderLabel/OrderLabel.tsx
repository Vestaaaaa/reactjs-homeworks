interface OrderLabelProps {
  className?: string;
  name: string;
  inputClassName?: string;
  children: React.ReactNode;
}

export function OrderLabel({
  className,
  name,
  children,
  inputClassName,
}: OrderLabelProps) {
  return (
    <label className={className}>
      {children}
      <input type="text" name={name} className={inputClassName} required />
    </label>
  );
}
