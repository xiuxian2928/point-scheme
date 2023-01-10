import { useState } from "react";
import SectionPointSheme from "./SectionPointSheme";
import SectionUsablePoint from "./SectionUsablePoint";



function App() {
  return (
    <>
      <SectionPointSheme title={"포인트 적립 스킴"}/>
      <SectionUsablePoint title={"포인트 사용 가능 금액 예시"}/>
    </>
  );
}

export default App;
