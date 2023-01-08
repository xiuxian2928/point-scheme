function Label({ title, children }) {
  return (
    <label className="block my-10">
      {title}
      {children}
    </label>
  );
}
export default Label;
