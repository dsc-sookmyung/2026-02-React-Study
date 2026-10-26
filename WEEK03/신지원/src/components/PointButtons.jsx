function PointButtons({ 
  points, 
  setPoints,
  limitAtZero,
  setLimitAtZero,
}) {
  const handleSubmit = () => {
    setPoints(points + 1)
  }

  const handleLateSubmit = () => {
    const nextPoints = points - 1   //계산 후 포인트 & 현재 포인트
    setPoints(limitAtZero ? Math.max(0, nextPoints) : nextPoints)
    //삼항 연산자 : 0점 미만 제한 참이면 앞(큰값), 거짓이면 뒤(결과 그대로)
  }

  const handleBestWork = () => {
    setPoints(points + 5)
  }

  const handleNoSubmit = () => {
    const nextPoints = points - 5
    setPoints(limitAtZero ? Math.max(0, nextPoints) : nextPoints)
    //삼항 연산자 (동일)
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

      <div className="point-settings">
        <p className="settings-title">음수 설정</p>

        <label>
          <input
            type="radio"
            name="negative-points"    //라디오 버튼 그룹 생성
            checked={!limitAtZero}  
            onChange={() => setLimitAtZero(false)}
          />
          음수 허용
        </label>

        <label>
          <input
            type="radio"
            name="negative-points"
            checked={limitAtZero}
            onChange={() => setLimitAtZero(true)}   //처음 true로 시작 -> 음수 제한 O
          />
          0 미만 제한
        </label>
      </div>

      <button className="reset-button" onClick={handleReset}>
        초기화
      </button>
    </>
  )
}

export default PointButtons
