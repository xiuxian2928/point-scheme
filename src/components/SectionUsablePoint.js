import {useState} from 'react';
import Title from './reusable/Title';
import Text from './reusable/Text';
import InputInLabel from './reusable/InputInLabel';

function SectionUsablePoint({title, totalPoint}) {
  console.log('[component] SectionUsablePoint');
  const [payAmount, setPayAmount] = useState(0);
  const [payAmount5per, setPayAmount5per] = useState(0);
  const [redeemablePoint, setRedeemablePoint] = useState(0);
  const [finalPayment, setFinalPayment] = useState(0);

  const calcPayAmount = e => {
    const payAmountValue = e.target.value;
    let calcPayAmount5per = payAmountValue * 0.05;
    let calcRedeemablePoint = Math.floor(calcPayAmount5per * 0.0001) * 10000;
    let canUsePoint = Math.floor(totalPoint * 0.0001) * 10000;
    let calFinalPayment =
      payAmountValue -
      (canUsePoint > calcRedeemablePoint ? calcRedeemablePoint : canUsePoint);

    setPayAmount(payAmountValue);
    setPayAmount5per(calcPayAmount5per);
    setRedeemablePoint(calcRedeemablePoint);
    setFinalPayment(calFinalPayment);
  };
  return (
    <div className="container p-14 mx-auto">
      <Title title={title} />
      <InputInLabel
        title={'결제금액 : '}
        onChange={calcPayAmount}
        value={payAmount}
      />
      <Text value={`결제액 * 5% : ${payAmount5per}`} style={`block my-10`} />
      <Text
        value={`포인트 사용가능(최대값) : ${redeemablePoint}`}
        style={`block my-10`}
      />
      <Text value={`total : ${finalPayment}`} />
    </div>
  );
}

export default SectionUsablePoint;
