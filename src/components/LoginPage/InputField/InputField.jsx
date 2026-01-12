export function InputField({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  classNames,
}) {
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
