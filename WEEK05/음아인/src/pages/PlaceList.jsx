import { useState, useEffect } from 'react';
import { getPlaces } from '../api/tourApi.js';

function PlaceList() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces('1').then((data) => setPlaces(data));
  }, []);

  return (
    <div className="container">
      <h1>국내 여행지 둘러보기</h1>
      <div className="place-list">
        {places.map((place) => <p key={place.contentid}>{place.title}</p>)}
      </div>
    </div>
  );
}

export default PlaceList;
