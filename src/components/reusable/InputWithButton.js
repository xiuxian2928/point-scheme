import Button from './Button';

function InputWithButton({title, color, onClick, value}) {
  return (
    <div className="flex justify-between my-10">
      <input className={`border p-2`} onChange={value} />
      <Button title={title} color={color} onClick={onClick}></Button>
    </div>
  );
}

export default InputWithButton;
