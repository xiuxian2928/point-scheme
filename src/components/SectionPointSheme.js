import {useState} from 'react';
import Title from './reusable/Title';
import Text from './reusable/Text';
import InputInLabel from './reusable/InputInLabel';
import TextBoxWithButton from './reusable/TextBoxWithButton';
import InputWithButton from './reusable/InputWithButton';

function SectionPointSheme({title, totalPoint, setTotalPoint}) {
  const [myPoint, setMyPoint] = useState(0);
  const [addPoint, setAddPoint] = useState(0);
  const [deductPoint, setDeductPoint] = useState(0);

  const myPointName = e => {
    setMyPoint(e.target.value);
    setTotalPoint(e.target.value);
  };
  const addBtnClick = () => {
    const changeTotalPoint = Number(totalPoint) + Number(addPoint);
    setTotalPoint(changeTotalPoint);
  };
  const deductBtnClick = () => {
    const changeTotalPoint = Number(totalPoint) - Number(deductPoint);
    if (changeTotalPoint < 0) {
      setTotalPoint(0);
    } else {
      setTotalPoint(changeTotalPoint);
    }
  };
  const handleChange = e => {
    setAddPoint(e.target.value);
  };
  const deductPointValue = e => {
    setDeductPoint(e.target.value);
  };

  return (
    <div className="container p-14 mx-auto">
      <Title title={title} />
      <InputInLabel
        title={'내 포인트: '}
        onChange={myPointName}
        value={myPoint}
      />
      <TextBoxWithButton
        onClick={addBtnClick}
        value={addPoint}
        title={'Add'}
        color={'blue'}
        hasOption={true}
        onChange={handleChange}
      />
      <InputWithButton
        onClick={deductBtnClick}
        value={deductPointValue}
        title={'Deduct'}
        color={'red'}
      />
      <Text value={`total: ${totalPoint}`} />
    </div>
  );
}

export default SectionPointSheme;
