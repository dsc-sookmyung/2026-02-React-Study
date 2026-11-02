
import { useState, useEffect, useRef } from "react";
import "./App.css";

import SearchInput from "./components/SearchInput";
import SearchHistory from "./components/SearchHistory";

function App() {
  const [keyword, setKeyword] = useState("");

  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("searchHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = () => {
    if (keyword.trim() === "") {
      return;
    }

    setHistory((prevHistory) => [
      ...prevHistory,
      keyword.trim()
    ]);

    setKeyword("");
    inputRef.current.focus();
  };

  const handleClear = () => {
    setHistory([]);
  };

  return (
    <div className="page">
      <main className="container">

        <header className="header">
          <div className="logo"></div>
          <span className="brand">S E A R C H</span>
        </header>

        <section className="main-card">
          <div className="intro">
            <h1>무엇을 찾고 있나요?</h1>
          </div>

          <SearchInput
            keyword={keyword}
            setKeyword={setKeyword}
            handleSearch={handleSearch}
            inputRef={inputRef}
          />


          <div className="news">
              <span className="sub-title1">[스포츠] 삼성, 5차전 6-1 승, 2년 만에 한국시리즈 진출 ...</span>
              <span className="sub-title2">[생활] 가을비로 시작한 11월, 새벽 강수량은 ...</span>
          </div>

          <SearchHistory
            history={history}
            handleClear={handleClear}
          />
        </section>

        <footer>
          Search Space
        </footer>

      </main>
    </div>
  );
}

export default App;
