import { useState } from "react";
import Section from "./Section";
import Input from "./Input";
import Label from "./Label";
import Title from "./Title";
import SelectBox from "./SelectBox";
import Button from "./Button";
import Text from "./Text";

const OPTIONS = [
  { value: "0", name: "--선택--" },
  { value: "50000", name: "회원가입" },
  { value: "30000", name: "상담리뷰" },
  { value: "20000", name: "한달 수강 리뷰" },
  { value: "20000", name: "수강 후 리뷰" },
  { value: "10000", name: "친구초대" },
];

function App() {
  const [myPoint, setMyPoint] = useState(0);
  const [addPoint, setAddPoint] = useState(0);
  const [deductPoint, setDeductPoint] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);

  const [payAmount, setPayAmount] = useState(0);
  const [payAmount5per, setPayAmount5per] = useState(0);
  const [redeemablePoint, setRedeemablePoint] = useState(0);
  const [finalPayment, setFinalPayment] = useState(0);

  const myPointValue = (e) => {
    setMyPoint(e.target.value);
    setTotalPoint(e.target.value);
  };
  const deductPointValue = (e) => {
    setDeductPoint(e.target.value);
  };
  const handleChange = (e) => {
    setAddPoint(e.target.value);
  };
  const addBtnclick = () => {
    const changeTotalPoint = Number(totalPoint) + Number(addPoint);
    setTotalPoint(changeTotalPoint);
  };
  const deductBtnclick = () => {
    const changeTotalPoint = Number(totalPoint) - Number(deductPoint);
    if (changeTotalPoint < 0) {
      setTotalPoint(0);
    } else {
      setTotalPoint(changeTotalPoint);
    }
  };
  const calcPayAmount = (e) => {
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
    <>
      <Section>
        <Title title={"포인트 적립 스킴"} />
        <Label title={"내 포인트 : "}>
          <Input
            style={"border-red-300"}
            onChange={myPointValue}
            value={myPoint}
          />
        </Label>
        <div className="flex justify-between my-10">
          <SelectBox options={OPTIONS} onChange={handleChange}></SelectBox>
          <Input readOnly style={"mx-3"} value={addPoint} />
          <Button
            title={"Add"}
            id={"addBtn"}
            color={"blue"}
            onClick={addBtnclick}
          ></Button>
        </div>
        <div className="flex justify-between my-10">
          <Input
            style={"mr-3"}
            value={deductPoint}
            onChange={deductPointValue}
          />
          <Button
            title={"deduct"}
            id={"reduceBtn"}
            color={"red"}
            onClick={deductBtnclick}
          ></Button>
        </div>
        <Text text={"total : " + totalPoint} />
      </Section>
      <Section>
        <Title title={"포인트 사용 가능 금액 예시"} />
        <Label title={"결제금액 : "}>
          <Input
            style={"border-red-300"}
            value={payAmount}
            onChange={calcPayAmount}
          />
        </Label>
        <Label title={"결제액 * 5% : "}>
          <Input readOnly value={payAmount5per} />
        </Label>
        <Label title={"포인트 사용가능(최대값) : "}>
          <Input readOnly value={redeemablePoint} />
        </Label>
        <Text text={"total : " + finalPayment} />
      </Section>
    </>
  );
}

export default App;
