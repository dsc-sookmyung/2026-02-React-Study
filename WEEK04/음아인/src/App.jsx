import { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');

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
        />
        <button>검색</button>
      </div>
    </div>
  );
}

export default App;
