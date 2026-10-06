import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [allowNegative, setAllowNegative] = useState(true);

  // +1
  const handleIncrease = () => {
    setCount(count + 1);
  };

  // -1
  const handleDecrease = () => {
    if (!allowNegative && count - 1 < 0) {
      setCount(0);
      return;
    }

    setCount(count - 1);
  };

  // +5
  const handleIncreaseFive = () => {
    setCount(count + 5);
  };

  // -5
  const handleDecreaseFive = () => {
    if (!allowNegative && count - 5 < 0) {
      setCount(0);
      return;
    }

    setCount(count - 5);
  };

  // 사용자가 설정한 값만큼 증가
  const handleCustomIncrease = () => {
    setCount(count + step);
  };

  // 사용자가 설정한 값만큼 감소
  const handleCustomDecrease = () => {
    if (!allowNegative && count - step < 0) {
      setCount(0);
      return;
    }

    setCount(count - step);
  };

  // 초기화
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-card">
      <p className="counter-label">USESTATE COUNTER</p>

      <h1>Counter</h1>

      <p className="description">
        버튼을 눌러 숫자를 변경해보세요.
      </p>

      <div className={`count-circle ${count >= 10 ? "success" : ""}`}>
        {count}
      </div>

      {count >= 10 ? (
        <p className="goal-message">🎉 목표 달성!</p>
      ) : (
        <p className="guide-message">
          목표까지 {10 - count} 남았습니다.
        </p>
      )}

      <div className="section">
        <p className="section-title">기본 조작</p>

        <div className="button-group">
          <button
            className="count-button minus"
            onClick={handleDecrease}
          >
            − 1
          </button>

          <button
            className="count-button plus"
            onClick={handleIncrease}
          >
            + 1
          </button>
        </div>

        <div className="button-group second-row">
          <button
            className="count-button minus"
            onClick={handleDecreaseFive}
          >
            − 5
          </button>

          <button
            className="count-button plus"
            onClick={handleIncreaseFive}
          >
            + 5
          </button>
        </div>
      </div>

      <div className="section">
        <p className="section-title">증감 단위 설정</p>

        <input
          className="step-input"
          type="number"
          min="1"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <div className="button-group custom-buttons">
          <button
            className="count-button minus"
            onClick={handleCustomDecrease}
          >
            − {step}
          </button>

          <button
            className="count-button plus"
            onClick={handleCustomIncrease}
          >
            + {step}
          </button>
        </div>
      </div>

      <div className="section">
        <p className="section-title">음수 설정</p>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="negative"
              checked={allowNegative}
              onChange={() => setAllowNegative(true)}
            />
            음수 허용
          </label>

          <label>
            <input
              type="radio"
              name="negative"
              checked={!allowNegative}
              onChange={() => setAllowNegative(false)}
            />
            0 미만 제한
          </label>
        </div>
      </div>

      <button
        className="reset-button"
        onClick={handleReset}
      >
        ↻ 초기화
      </button>
    </div>
  );
}

export default Counter;