import { Link } from 'react-router-dom';

function PlaceCard({ place }) {
  return (
    <Link className="place-card" to={`/places/${place.contentid}`}>
      {place.firstimage ? (
        <img src={place.firstimage} alt={place.title} />
      ) : (
        <div className="no-image">등록된 사진이 없습니다.</div>
      )}
      <div className="card-text">
        <h2>{place.title}</h2>
        <p>{place.addr1 || '주소 정보가 없습니다.'}</p>
        <span>more info</span>
      </div>
    </Link>
  );
}

export default PlaceCard;
