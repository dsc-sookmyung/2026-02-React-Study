import { useState } from 'react';

function WaterCounter() {
  const [count, setCount] = useState(0);

  const handleChange = (amount) => {
    setCount((previous) => previous + amount);
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
      <p className="count"><strong>{count}</strong> 잔</p>
      <div className="basic-controls">
        <button onClick={() => handleChange(-1)}>−1 잔</button>
        <button className="primary" onClick={() => handleChange(1)}>+1 잔</button>
      </div>
      <button className="reset" onClick={handleReset}>기록 초기화</button>
    </main>
  );
}

export default WaterCounter;
