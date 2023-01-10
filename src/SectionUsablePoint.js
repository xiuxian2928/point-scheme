import { useState } from "react";
import Title from "./components/reusable/Title";
import Text from "./components/reusable/Text";
import InputInLabel from "./components/reusable/InputInLabel";
import SectionPointSheme from "./SectionPointSheme";

function SectionUsablePoint({title}){
    const [payAmount, setPayAmount] = useState(0);
    const [payAmount5per, setPayAmount5per] = useState(0);
    const [redeemablePoint, setRedeemablePoint] = useState(0);
    const [finalPayment, setFinalPayment] = useState(0);

    
    const calcPayAmount = (e) => {
        const payAmountValue = e.target.value;
        let calcPayAmount5per = payAmountValue * 0.05;
        let calcRedeemablePoint = Math.floor(calcPayAmount5per * 0.0001) * 10000;
        let canUsePoint = Math.floor(totalPoint * 0.0001) * 10000;
        let calFinalPayment = payAmountValue - (canUsePoint > calcRedeemablePoint ? calcRedeemablePoint : canUsePoint);
        setPayAmount(payAmountValue);
        setPayAmount5per(calcPayAmount5per);
        setRedeemablePoint(calcRedeemablePoint);
        setFinalPayment(calFinalPayment);
    };
    return(
        <>
            <Title title={title} />
            <InputInLabel title={"결제금액 : "} onChange={calcPayAmount} value={payAmount}/>
            <Text value={`결제액 * 5% : ${payAmount5per}`}/>
            <Text value={`포인트 사용가능(최대값) : ${redeemablePoint}`}/>
            <Text value={`total : ${finalPayment}`} />
        </>
    )
}

export default SectionUsablePoint;