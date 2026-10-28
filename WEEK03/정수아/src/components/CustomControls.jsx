function CustomControls({
  step,
  setStep,
  customStep,
  increase,
  decrease,
}) {
  return (
    <section className="control-section">
      <h2>증감 단위 설정</h2>

      <input
        className="step-input"
        type="number"
        min="1"
        value={step}
        onChange={(event) => setStep(event.target.value)}
        aria-label="사용자 지정 증감 단위"
      />

      <div className="button-grid">
        <button
          className="counter-button secondary"
          onClick={() => decrease(customStep)}
        >
          - {customStep}
        </button>

        <button
          className="counter-button primary"
          onClick={() => increase(customStep)}
        >
          + {customStep}
        </button>
      </div>
    </section>
  );
}

export default CustomControls;
