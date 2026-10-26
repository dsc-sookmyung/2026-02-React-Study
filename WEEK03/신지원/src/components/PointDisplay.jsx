function PointDisplay({ points }) {
  return (
    <>
      <div className="point-card">
        <p className="point-label">현재 보유 포인트</p>
        <p className="point-value">{points} P</p>
      </div>

      {points >= 10 ? (
        <p className="goal-message">🎉 목표 달성!</p>
      ) : (
        <p className="goal-message">
          목표까지 {10-points}점 남았습니다.
        </p>
      )}
    </>
  )
}

export default PointDisplay
