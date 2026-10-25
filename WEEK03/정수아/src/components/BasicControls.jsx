function BasicControls({ increase, decrease }) {
  return (
    <section className="control-section">
      <h2>기본 조작</h2>

      <div className="button-grid">
        <button
          className="counter-button secondary"
          onClick={() => decrease(1)}
        >
          - 1
        </button>

        <button
          className="counter-button primary"
          onClick={() => increase(1)}
        >
          + 1
        </button>

        <button
          className="counter-button secondary"
          onClick={() => decrease(5)}
        >
          - 5
        </button>

        <button
          className="counter-button primary"
          onClick={() => increase(5)}
        >
          + 5
        </button>
      </div>
    </section>
  );
}

export default BasicControls;
