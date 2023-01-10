function InputInLabel({ title, onChange, value=0 }) {
  return (
    <label className="block my-10">
      {title}
      <input
        className={`border p-2 border-red-300`}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
export default InputInLabel;
