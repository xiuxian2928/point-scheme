import {useState} from 'react';
import SectionPointSheme from './components/SectionPointSheme';
import SectionUsablePoint from './components/SectionUsablePoint';

function App() {
  const [totalPoint, setTotalPoint] = useState(0);
  return (
    <>
      <SectionPointSheme
        title={'포인트 적립 스킴'}
        totalPoint={totalPoint}
        setTotalPoint={setTotalPoint}
      />
      <SectionUsablePoint
        title={'포인트 사용 가능 금액 예시'}
        totalPoint={totalPoint}
      />
    </>
  );
}

export default App;
