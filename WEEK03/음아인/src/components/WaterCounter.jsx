import { useState } from 'react';
import WaterDisplay from './WaterDisplay.jsx';
import StepControls from './StepControls.jsx';

function WaterCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState('2');

  const handleChange = (amount) => {
    if (!Number.isSafeInteger(amount)) return;
    setCount((previous) => Math.min(Number.MAX_SAFE_INTEGER, Math.max(0, previous + amount)));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <main className="water-counter">
      <header>
        <h1>물 마시기 카운터</h1>
        <p className="subtitle">물 마신 횟수를 기록해보세요.</p>
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
      <StepControls step={step} onStepChange={setStep} onChange={handleChange} count={count} />
      <button className="reset" disabled={count === 0} onClick={handleReset}>기록 초기화</button>
      <p className="notice">새로고침하면 기록이 초기화됩니다.</p>
    </main>
  );
}

export default WaterCounter;
