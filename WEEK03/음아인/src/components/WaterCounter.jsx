import { useState } from 'react';
import WaterDisplay from './WaterDisplay.jsx';

function WaterCounter() {
  const [count, setCount] = useState(0);

  const handleChange = (amount) => {
    setCount((previous) => Math.max(0, previous + amount));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <main className="water-counter">
      <header>
        <p className="eyebrow">AHIN’S WATER DIARY</p>
        <h1>한 모금 기록</h1>
        <p className="subtitle">책상 옆 물 한 잔, 잊지 않고 챙기기.</p>
      </header>
      <WaterDisplay count={count} goal={10} />
      <div className="basic-controls">
        <button disabled={count === 0} onClick={() => handleChange(-1)}>−1 잔</button>
        <button className="primary" onClick={() => handleChange(1)}>+1 잔</button>
      </div>
      <div className="quick-controls">
        <button disabled={count === 0} onClick={() => handleChange(-5)}>−5 잔</button>
        <button onClick={() => handleChange(5)}>+5 잔</button>
      </div>
      <button className="reset" onClick={handleReset}>기록 초기화</button>
    </main>
  );
}

export default WaterCounter;
