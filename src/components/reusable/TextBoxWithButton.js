import SelectBox from './SelectBox';
import Button from './Button';
import Text from './Text';

function TextBoxWithButton({
  value,
  color,
  title,
  onClick,
  onChange,
  hasOption = false,
}) {
  const OPTIONS = [
    {value: '0', name: '--선택--'},
    {value: '50000', name: '회원가입'},
    {value: '30000', name: '상담리뷰'},
    {value: '20000', name: '한달 수강 리뷰'},
    {value: '20000', name: '수강 후 리뷰'},
    {value: '10000', name: '친구초대'},
  ];

  return (
    <div className="flex justify-between my-10">
      {hasOption && (
        <SelectBox options={OPTIONS} onChange={onChange}></SelectBox>
      )}
      <Text style={'mx-3 border-gray'} value={value} />
      <Button title={title} color={color} onClick={onClick}></Button>
    </div>
  );
}

export default TextBoxWithButton;
