function InterestList({ interests }) {

    return (
        <div className="tags">
            {
                interests.map((item, index) => (
                    <div
                        className="tag"
                        key={item}
                    >
                        <span className="interest-number">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="interest-name">
                            {item}
                        </span>
                    </div>
                ))
            }
        </div>
    );
}

export default InterestList;