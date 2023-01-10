import { useState } from "react";
import Title from "./components/reusable/Title";
import Text from "./components/reusable/Text";
import InputInLabel from "./components/reusable/InputInLabel";
import TextBoxWithButton from "./components/reusable/TextBoxWithButton";

function SectionPointSheme({ title }){
    const [myPoint, setMyPoint] = useState(0);
    const [addPoint, setAddPoint] = useState(0);
    const [deductPoint, setDeductPoint] = useState(0);
    const [totalPoint, setTotalPoint] = useState(0);
    
    const myPointValue = (e) => {
        setMyPoint(e.target.value);
        setTotalPoint(e.target.value);
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
    const handleChange = (e) => {
        setAddPoint(e.target.value);
    };
    const deductPointValue = (e) => {
        setDeductPoint(e.target.value);
    };

    return(
        <>
            <Title title={title} />
            <InputInLabel title={"내 포인트 : "} onChange={myPointValue} value={myPoint}/>
            <TextBoxWithButton onClick={addBtnclick} value={addPoint} title={"Add"} color={"blue"} hasOption onChange={handleChange}/>
            <TextBoxWithButton onClick={deductBtnclick} value={deductPointValue} title={"Deduct"} color={"red"}/>
            <Text text={"total : " + totalPoint} />
        </>
    )
}

export default SectionPointSheme