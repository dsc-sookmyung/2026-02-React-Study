import { useState, useEffect, useRef } from "react";
import SearchBar from "./components/SearchBar";
import SearchHistory from "./components/SearchHistory";
import "./App.css";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [searchHistory, setSearchHistory] = useState(() => {
    const savedHistory = localStorage.getItem("searchHistory");

    if (savedHistory) {
      return JSON.parse(savedHistory);
    }

    return [];
  });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearch = () => {
    if (searchWord.trim() === "") {
      return;
    }

    setSearchHistory([searchWord, ...searchHistory]);
    setSearchWord("");
    inputRef.current.focus();
  };

  const handleClear = () => {
    setSearchHistory([]);
  };

  return (
    <div className="page">
      <div className="container">
        <h1>무엇이 궁금하신가요?</h1>

        <SearchBar
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          handleSearch={handleSearch}
          inputRef={inputRef}
        />

        <SearchHistory
          searchHistory={searchHistory}
          handleClear={handleClear}
        />
      </div>
    </div>
  );
}

export default App;