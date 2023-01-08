function Input({ style, onChange, value = 0, readOnly = false }) {
  return (
    <input
      className={`border p-2 ` + style}
      readOnly={readOnly}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
