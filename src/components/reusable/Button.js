function Button({title, color, onClick}) {
  console.log('color', color);
  return (
    <button
      type="button"
      className={`text-center w-1/4 border p-2 bg-${color}-500 rounded-full text-white hover:bg-${color}-600 active:bg-${color}-700 focus:outline-none focus:ring focus:ring-${color}-300 rounded-full text-white`}
      onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
