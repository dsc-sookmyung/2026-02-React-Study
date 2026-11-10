import { useState, useEffect } from 'react';
import { getPlaces } from '../api/tourApi.js';
import PlaceCard from '../components/PlaceCard.jsx';

function PlaceList() {
  const [areaCode, setAreaCode] = useState('1');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError('');

    getPlaces(areaCode, controller.signal)
      .then((data) => setPlaces(data))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [areaCode]);

  return (
    <div className="container">
      <h1>국내 여행지 둘러보기</h1>
      <div className="list-heading">
        <p>가보고 싶은 여행지를 눌러서 상세정보를 확인할 수 있어요!</p>
        <label>
          지역 선택{' '}
          <select value={areaCode} onChange={(e) => setAreaCode(e.target.value)}>
            <option value="1">서울</option>
            <option value="6">부산</option>
            <option value="39">제주</option>
          </select>
        </label>
      </div>
      {loading ? <p>여행지를 불러오는 중입니다...</p> : error ? (
        <p role="alert">{error}</p>
      ) : places.length === 0 ? (
        <p>등록된 여행지가 없습니다.</p>
      ) : (
        <div className="place-list">
          {places.map((place) => <PlaceCard key={place.contentid} place={place} />)}
        </div>
      )}
    </div>
  );
}

export default PlaceList;
