function WaterDisplay({ count, goal }) {
  const isComplete = count >= goal;
  const progress = Math.min(count / goal, 1);
  const message = isComplete
    ? '🎉 10잔 기록 달성! 차곡차곡 잘 쌓았어요.'
    : count === 0
      ? '첫 한 잔부터 가볍게 시작해요.'
      : `차곡차곡 채우는 중! 10잔까지 ${goal - count}잔 남았어요.`;

  return (
    <section className={`water-display ${isComplete ? 'complete' : ''}`} aria-label="물 마시기 기록">
      <div className="glass" aria-hidden="true">
        <div className="water" style={{ height: `${progress * 100}%` }} />
        <span className="glass-mark">{isComplete ? '✦' : '≈'}</span>
      </div>
      <p className="count"><strong>{count}</strong><span>잔 기록</span></p>
      <p className="message" role="status">{message}</p>
      <div className="stamps" aria-hidden="true">
        {Array.from({ length: goal }, (_, index) => (
          <span key={index} className={index < count ? 'filled' : ''}>●</span>
        ))}
      </div>
      <p className="goal-caption">나의 기록 목표 {goal}잔 · {Math.round(progress * 100)}%</p>
    </section>
  );
}

export default WaterDisplay;
