import { useState } from 'react';
import './App.css';

import CounterDisplay from './components/CounterDisplay';
import BasicControls from './components/BasicControls';
import CustomControls from './components/CustomControls';
import NegativeSettings from './components/NegativeSettings';
import ResetButton from './components/ResetButton';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState('10');
  const [allowNegative, setAllowNegative] = useState(false);

  const increase = (amount) => {
    setCount((prev) => prev + amount);
  };

  const decrease = (amount) => {
    setCount((prev) => {
      const next = prev - amount;
      return allowNegative ? next : Math.max(0, next);
    });
  };

  const reset = () => {
    setCount(0);
  };

  const customStep = Math.abs(Number(step)) || 1;

  return (
    <main className="page">
      <section className="counter-card">

        <header className="counter-header">
          <p className="eyebrow">USESTATE COUNTER</p>
          <h1>Counter</h1>
          <p className="subtitle">
            버튼을 눌러 숫자를 변경해보세요.
          </p>
        </header>

        <CounterDisplay count={count} />

        <BasicControls
          increase={increase}
          decrease={decrease}
        />

        <CustomControls
          step={step}
          setStep={setStep}
          customStep={customStep}
          increase={increase}
          decrease={decrease}
        />

        <NegativeSettings
          allowNegative={allowNegative}
          setAllowNegative={setAllowNegative}
        />

        <ResetButton reset={reset} />

      </section>
    </main>
  );
}

export default App;
