function PointButtons({ points, setPoints }) {
  const handleSubmit = () => {
    setPoints(points + 1)
  }

  const handleLateSubmit = () => {
    setPoints(Math.max(0, points - 1)) // 포인트가 0 미만으로 내려가지 않도록 처리
  }

  const handleBestWork = () => {
    setPoints(points + 5)
  }

  const handleNoSubmit = () => {
    setPoints(Math.max(0, points - 5)) // 포인트가 0 미만으로 내려가지 않도록 처리
  }

  const handleReset = () => {
    setPoints(0)
  }

  return (
    <>
      <div className="button-group">
        <button onClick={handleSubmit}>제출</button>
        <button onClick={handleLateSubmit}>지각 제출</button>
        <button onClick={handleBestWork}>금주 우수작 보너스</button>
        <button onClick={handleNoSubmit}>미제출 페널티</button>
      </div>

      <button className="reset-button" onClick={handleReset}>
        초기화
      </button>
    </>
  )
}

export default PointButtons
