function SearchHistory({ searchHistory, handleClear }) {
    return (
    <div className="history">
        <div className="history-header">
        <h2>Recent Searches</h2>

        <button className="clear-button" onClick={handleClear}>
            Clear all
        </button>
        </div>

    {searchHistory.length === 0 ? (
        <p className="empty">검색 기록이 없습니다.</p>
    ) : (
        <ul>
            {searchHistory.map((word, index) => (
            <li key={index}>
                <span>{word}</span>
                <span className="arrow">↗</span>
            </li>
        ))}
        </ul>
    )}
    </div>
    );
}

export default SearchHistory;