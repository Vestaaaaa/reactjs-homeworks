interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  classNames: { [key: string]: string };
}

export function InputField({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  classNames,
}: InputFieldProps) {
  return (
    <div className={classNames.formRow}>
      <label className={classNames.formLabel} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={classNames.formInput}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
