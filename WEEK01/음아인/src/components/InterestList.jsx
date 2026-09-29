function InterestList() {
  const interests = ['Backend', 'Cloud', 'AI'];

  return (
    <section>
      <h3>INTERESTS</h3>

      <div className="tag-list">
        {interests.map((interest) => (
          <span className="tag" key={interest}>
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}

export default InterestList;