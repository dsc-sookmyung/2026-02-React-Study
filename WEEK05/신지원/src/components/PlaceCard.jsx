
import { Link } from "react-router-dom";

function PlaceCard({ place }) {     //API에서 받아온 관광지 데이터 하나를 place라는 이름으로 전달받는 컴포넌트
  return (
    <Link
      to={`/places/${place.contentid}`}
      className="place-card"
    >
      {place.firstimage && (
        <img
          src={place.firstimage}
          alt={place.title}
        />
      )}

      <div className="place-info">
        <h3>{place.title}</h3>
        <p>{place.addr1}</p>
        <div className="place-more">
          자세히 살펴보기 <span>→</span>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCard;
