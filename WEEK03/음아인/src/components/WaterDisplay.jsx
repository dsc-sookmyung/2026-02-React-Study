function WaterDisplay({ count, goal }) {
  const isComplete = count >= goal;

  return (
    <section className={`water-display ${isComplete ? 'complete' : ''}`} aria-label="물 마시기 기록">
      <p className="count"><strong>{count}</strong><span>잔</span></p>
      <p className="message" role="status">
        {isComplete ? '🎉 목표 달성!' : `목표까지 ${goal - count}잔 남았습니다.`}
      </p>
    </section>
  );
}

export default WaterDisplay;
