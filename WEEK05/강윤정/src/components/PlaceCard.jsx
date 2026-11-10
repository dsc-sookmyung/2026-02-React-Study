
import { useState } from "react";
import { Link } from "react-router-dom";

function PlaceCard({ place }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      to={`/places/${place.contentid}`}
      className="place-card"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="place-image">
        {place.firstimage && !imageError ? (
          <img
            src={place.firstimage}
            alt={place.title}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="image-placeholder">
            <span>사진 준비 중</span>
          </div>
        )}
      </div>

      <div className="place-info">
        <h2>{place.title}</h2>
        <p>{place.addr1 || "주소 정보 없음"}</p>
      </div>
    </Link>
  );
}

export default PlaceCard;
