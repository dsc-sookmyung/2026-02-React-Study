
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>검색 페이지</h1>

      <div className="search">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
        />
        <button>검색</button>
      </div>

      <div className="history">
        <div className="history-title">
          <h2>검색 기록</h2>
          <button>전체 삭제</button>
        </div>

        <p>검색 기록이 없습니다.</p>
      </div>
    </div>
  );
}

export default App;
