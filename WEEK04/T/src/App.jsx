import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();

    const savedHistory = localStorage.getItem("history");

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const handleSearch = () => {
    if (search.trim() === "") {
      alert("검색어를 입력해주세요.");
      inputRef.current.focus();
      return;
    }

    setHistory((prev) => [search, ...prev]);
    setSearch("");
    inputRef.current.focus();
  };

  const handleDelete = () => {
    setHistory([]);
  };

  return (
    <div className="container">
      <h1>검색 페이지</h1>

      <div className="search">
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="검색어를 입력하세요"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button onClick={handleSearch}>검색</button>
      </div>

      <div className="history">
        <div className="history-title">
          <h2>검색 기록</h2>
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
