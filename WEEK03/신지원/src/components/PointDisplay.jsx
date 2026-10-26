function PointDisplay({ points }) {
  return (
    <div className="point-card">
      <p className="point-label">현재 보유 포인트</p>
      <p className="point-value">{points} P</p>
    </div>
  )
}

export default PointDisplay