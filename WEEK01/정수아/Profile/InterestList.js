function InterestList({ interests }) {

    return(

        <div>
            <h2>관심분야</h2>
            {interests.map((interest) => (
                <p className="interest-item"key={interest}>
                    {interest}
                    </p>
            ))}
        </div>
    );
}

export default InterestList ;