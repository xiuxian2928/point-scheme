function SelectBox({ options, onChange }) {
  return (
    <select className="border w-1/4 p-2" onChange={onChange}>
      {options.map((option) => (
        <option key={option.name} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default SelectBox;
