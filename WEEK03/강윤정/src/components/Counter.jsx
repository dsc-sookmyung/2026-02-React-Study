import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [allowNegative, setAllowNegative] = useState(false);

  // +1
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // -1
  const handleDecrease = () => {
    setCount((prevCount) => {
      if (!allowNegative && prevCount - 1 < 0) {
        return 0;
      }

      return prevCount - 1;
    });
  };

  // +5
  const handleIncreaseFive = () => {
    setCount((prevCount) => prevCount + 5);
  };

  // -5
  const handleDecreaseFive = () => {
    setCount((prevCount) => {
      if (!allowNegative && prevCount - 5 < 0) {
        return 0;
      }

      return prevCount - 5;
    });
  };

  // 증감 단위 입력값 변경
  const handleStepChange = (event) => {
    const value = Number(event.target.value);

    if (value >= 1) {
      setStep(value);
    }
  };

  // 사용자가 설정한 값만큼 증가
  const handleCustomIncrease = () => {
    setCount((prevCount) => prevCount + step);
  };

  // 사용자가 설정한 값만큼 감소
  const handleCustomDecrease = () => {
    setCount((prevCount) => {
      if (!allowNegative && prevCount - step < 0) {
        return 0;
      }

      return prevCount - step;
    });
  };

  // 초기화
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-card">
      <div className="web-decoration">🕸️</div>

      <p className="counter-label">USESTATE COUNTER</p>

      <h1>Halloween Counter</h1>

      <p className="description">
        버튼을 눌러 호박 점수를 모아보세요!
      </p>

      <div className={`count-box ${count >= 10 ? "success" : ""}`}>
        <span className="count-number">{count}</span>
      </div>

      {count >= 10 ? (
        <p className="goal-message">🎃 Trick or Treat!</p>
      ) : (
        <p className="guide-message">
          호박 완성까지 {10 - count} 남았어요.
        </p>
      )}

      <div className="section">
        <p className="section-title">🎃 기본 조작</p>

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
        <p className="section-title">🪄 증감 단위 설정</p>

        <p className="step-description">
          원하는 숫자를 입력해보세요.
        </p>

        <input
          className="step-input"
          type="number"
          min="1"
          value={step}
          onChange={handleStepChange}
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
        <p className="section-title">🍬 음수 설정</p>

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
        👻 초기화
      </button>
    </div>
  );
}

export default Counter;