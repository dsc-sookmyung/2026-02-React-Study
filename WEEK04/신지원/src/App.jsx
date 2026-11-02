import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");         //검색어
  const [history, setHistory] = useState(() => {    //검색 기록
    const savedHistory = localStorage.getItem("history");   //로컬 스토리지에서 검색 기록 가져오기
    return savedHistory ? JSON.parse(savedHistory) : [];    //저장된 데이터 있는지 확인
  });       

  // 검색어 입력 관리
  const handleChange = (e) => {     //e 는 이벤트 객체 (입력 동작 발생 -> 동작 정보를 함수에 전달)
    setSearch(e.target.value);
  };

  // 검색 기록 추가
  const handleSearch = () => {
    const keyword = search.trim();    //trim : 문자열 양쪽 공백 제거

    if (keyword == "") return;        //빈 문자열일 시 -> 함수 종료 (검색 기록 추가 X)

    setHistory((prev) => [keyword, ...prev]);   //prev : 상태 변경 직전 최신 history 값
    setSearch("");                    //검색 후, 검색창 초기화
    inputRef.current.focus();         //검색 후, 검색창에 포커스
  };

  // 검색 기록 전체 삭제
  const handleDelete = () => {
    setHistory([]);                    //기존 검색 배열 -> 빈 배열로 변경
  };

  const inputRef = useRef(null);       //Dom 요소를 참조할 변수

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));   //history 배열을 문자열로 변환 후 로컬 스토리지에 저장
  }, [history]);                       //의존성 배열 -> history 값이 변경될 때마다 useEffect 실행

  return (
    <div className="container">
      <h1>검색 페이지</h1>

      <div className="search">
        <input
          ref={inputRef}
          type="text"
          placeholder="검색어를 입력하세요"
          value={search}
          onChange={handleChange}
          onKeyDown ={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button onClick={handleSearch}>검색</button>
      </div>

      <div className="history">
        <div className="history-title">
          <h2>검색 기록</h2>
          <button onClick={handleDelete}>전체 삭제</button>
        </div>

        {history.length === 0 ? (    //검색 기록 조건부 렌더링 (삼항 연산자)
        <p>검색 기록이 없습니다.</p>    //참일떄
        ) : (                        //거짓일떄
          <ul>
            {history.map((item, index) => (   //map으로 배열 요소 반복 렌더링
              <li key={index}>{item}</li>
            ))} 
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
