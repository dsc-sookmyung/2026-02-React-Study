import { Link } from 'react-router-dom';
import { getCategoryName } from '../api/tourApi.js';

export default function PlaceCard({ place }) {
  return (
    <Link className="place-card" to={`/places/${place.contentid}`}>
      <div className="card-image">
        {place.firstimage ? (
          <img src={place.firstimage} alt={`${place.title} 전경`} loading="lazy" />
        ) : (
          <div className="image-placeholder" aria-label="등록된 사진 없음">✳</div>
        )}
        <span className="card-badge">{getCategoryName(place.contenttypeid)}</span>
      </div>
      <div className="card-body">
        <h3>{place.title}</h3>
        <p>{place.addr1 || '주소 정보가 등록되지 않았어요.'}</p>
        <span className="card-more">자세히 보기 <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}
