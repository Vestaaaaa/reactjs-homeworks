interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

export function Button({
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
