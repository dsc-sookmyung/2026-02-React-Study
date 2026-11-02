
function SearchHistory({ history, handleClear }) {
  return (
    <section className="search-history">

      <div className="history-header">
        <div>
          <h2>최근 검색 기록</h2>
        </div>

        <span className="history-count">
          {history.length} searches
        </span>
      </div>

      {history.length > 0 ? (
        <>
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                <span className="history-icon">⌕</span>
                <span className="history-text">{item}</span>
              </li>
            ))}
          </ul>

          <button
            className="clear-button"
            onClick={handleClear}
          >
            전체 기록 삭제
          </button>
        </>
      ) : (
        <div className="empty-history">
          <div className="empty-icon">⌕</div>
          <h3>아직 검색 기록이 없어요</h3>
          <p>첫 번째 검색어를 입력해 보세요.</p>
        </div>
      )}

    </section>
  );
}

export default SearchHistory;

