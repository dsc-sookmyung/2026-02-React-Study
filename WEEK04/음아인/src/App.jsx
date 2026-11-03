import { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [history, setHistory] = useState([
    '올리브영 세일 기간',
    '피부 뒤집어졌을때 해결 방법',
    '20대 영양제 추천',
  ]);

  const handleSearch = () => {
    const keyword = search.trim();
    if (keyword === '') return;

    setHistory((prev) => [keyword, ...prev]);
    setSearch('');
  };

  const handleDelete = () => {
    setHistory([]);
  };

  return (
    <div className="container">
      <h1>검색 페이지</h1>
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="검색어를 입력하세요"
          aria-label="검색어"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing) handleSearch();
          }}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      <div className="history">
        <div className="history-title">
          <h2>최근 검색 기록</h2>
          <button onClick={handleDelete}>전체 삭제</button>
        </div>
        {history.length === 0 ? (
          <p>검색 기록이 없습니다.</p>
        ) : (
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
