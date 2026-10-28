
import PointDisplay from './components/PointDisplay.jsx'
import PointButtons from './components/PointButtons.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  const [points, setPoints] = useState(0)
  const [limitAtZero, setLimitAtZero] = useState(true) // 처음에는 true -> default로 0 미만 제한

  return (
    <div className="app">
      <h1>포인트 관리</h1>
      <PointDisplay points={points} />
      <PointButtons
        points={points}
        setPoints={setPoints}
        limitAtZero={limitAtZero}
        setLimitAtZero={setLimitAtZero}
      />
    </div>
  )
}

export default App
