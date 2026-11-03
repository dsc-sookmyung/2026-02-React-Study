
function SearchInput({
  keyword,
  setKeyword,
  handleSearch,
  inputRef
}) {
  return (
    <div className="search-input">
      <span className="search-icon">⌕</span>

      <input
        ref={inputRef}
        type="text"
        placeholder="검색어를 입력하세요."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <button onClick={handleSearch}>
        검색하기
      </button>
    </div>
  );
}

export default SearchInput;
