function SearchBar({
    searchWord,
    setSearchWord,
    handleSearch,
    inputRef,
}) {
    return (
    <div className="search-box">
        <input
        ref={inputRef}
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        />
        
        <button onClick={handleSearch}>Search</button>
    </div>
    );
}

export default SearchBar;