import { useState, useEffect } from 'react';
import { getPlaces } from '../api/tourApi.js';
import PlaceCard from '../components/PlaceCard.jsx';

function PlaceList() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces('1').then((data) => setPlaces(data));
  }, []);

  return (
    <div className="container">
      <h1>국내 여행지 둘러보기</h1>
      <div className="place-list">
        {places.map((place) => <PlaceCard key={place.contentid} place={place} />)}
      </div>
    </div>
  );
}

export default PlaceList;
