function InterestList() {
  const interests = ['Backend', 'Cloud', 'AI'];

  return (
    <section>
      <h3>INTERESTS</h3>

      <div>
        {interests.map((interest, index) => (
          <span key={interest}>
            {interest}
            {index < interests.length - 1 && ' · '}
          </span>
        ))}
      </div>
    </section>
  );
}

export default InterestList;