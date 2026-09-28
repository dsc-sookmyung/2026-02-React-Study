function InterestList({ interests }) {
  return (
    <div className="interest-list">
      {interests.map((interest, index) => (
        <div
          className="interest-item"
          key={interest}
        >
          <span className="interest-number">
            0{index + 1}
          </span>

          <span>{interest}</span>
        </div>
      ))}
    </div>
  );
}

export default InterestList;