
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>포인트 관리</h1>

      <div className="point-card">
        <p className="point-label">현재 보유 포인트</p>
        <p className="point-value">0 P</p>
      </div>

      <div className="button-group">
        <button>제출</button>
        <button>늦게 제출</button>
        <button>이번 주 우수작</button>
        <button>미제출</button>
      </div>

      <button className="reset-button">초기화</button>
    </div>
  )
}

export default App
