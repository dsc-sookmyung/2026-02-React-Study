function StepControls({ step, onStepChange, onChange, count }) {
  const amount = Number(step);
  const isValid = Number.isSafeInteger(amount) && amount >= 1 && amount <= 100;

  return (
    <section className="step-settings" aria-labelledby="step-title">
      <div className="step-heading">
        <label id="step-title" htmlFor="step">한 번에 기록할 잔 수</label>
        <input id="step" type="number" min="1" max="100" step="1"
          value={step} onChange={(event) => onStepChange(event.target.value)}
          aria-invalid={!isValid} aria-describedby="step-guide" />
      </div>
      <p id="step-guide" className={isValid ? 'input-guide' : 'input-guide error'}>
        {isValid ? '여러 잔을 한 번에 더하거나 뺄 수 있어요.' : '1~100 사이의 정수를 입력해주세요.'}
      </p>
      <div className="custom-controls">
        <button disabled={!isValid || count === 0} onClick={() => onChange(-amount)}>
          −{isValid ? amount : ''} 잔 빼기
        </button>
        <button disabled={!isValid} onClick={() => onChange(amount)}>
          +{isValid ? amount : ''} 잔 더하기
        </button>
      </div>
    </section>
  );
}

export default StepControls;
