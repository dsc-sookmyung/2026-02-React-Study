function NegativeSettings({ allowNegative, setAllowNegative }) {
  return (
    <section className="control-section">
      <h2>음수 설정</h2>

      <div className="radio-options">
        <label>
          <input
            type="radio"
            name="negative"
            checked={allowNegative}
            onChange={() => setAllowNegative(true)}
          />
          <span>음수 허용</span>
        </label>

        <label>
          <input
            type="radio"
            name="negative"
            checked={!allowNegative}
            onChange={() => setAllowNegative(false)}
          />
          <span>0 미만 제한</span>
        </label>
      </div>
    </section>
  );
}

export default NegativeSettings;
