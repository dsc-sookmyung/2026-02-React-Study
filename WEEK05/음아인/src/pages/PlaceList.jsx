import { useState, useEffect } from 'react';
import { getPlaces } from '../api/tourApi.js';
import PlaceCard from '../components/PlaceCard.jsx';

function PlaceList() {
  const [areaCode, setAreaCode] = useState('1');
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces(areaCode).then((data) => setPlaces(data));
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
      <div className="place-list">
        {places.map((place) => <PlaceCard key={place.contentid} place={place} />)}
      </div>
    </div>
  );
}

export default PlaceList;
