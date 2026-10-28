function CounterDisplay({ count }) {
  const numberColor =
    count <= 0 ? 'black' :
    count <= 5 ? 'blue' :
    count <= 10 ? 'red' :
    'green';

  return (
    <>
      <div className={`number-circle ${numberColor}`}>
        {count}
      </div>

      {count >= 10 && (
        <p className="success-message">
          목표 달성!
        </p>
      )}
    </>
  );
}

export default CounterDisplay;
