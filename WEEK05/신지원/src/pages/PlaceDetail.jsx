
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTourDetail } from "../api/tourApi";

function PlaceDetail() {
  const { id } = useParams();                     //URL에서 관광지 ID를 가져오는 기능

  const [place, setPlace] = useState(null);       //관광지 한 곳의 상세 정보를 저장하는 상태
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getTourDetail(id)
      .then((data) => {
        if (!data) {
          setError("관광지 정보를 찾을 수 없습니다.");
          return;
        }

        setPlace(data);
      })
      .catch((error) => {
        console.error(error);
        setError("상세 정보를 불러오지 못했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);                      //페이지에 들어왔을 때 해당 ID의 상세 정보를 요청

  if (loading) {
    return <main>상세 정보를 불러오는 중...</main>;
  }

  if (error) {
    return (
      <main>
        <p>{error}</p>
        <Link to="/">목록으로 돌아가기</Link>
      </main>
    );
  }

  

return (
  <main className="place-detail">
    <Link to="/" className="back-link">
      ← 목록으로 돌아가기
    </Link>

    <h1 className="detail-title">{place.title}</h1>

    {/* 이미지와 상세 정보를 하나의 박스로 묶기 */}
    <div className="detail-card">
      {place.firstimage && (
        <img
          className="detail-image"
          src={place.firstimage}
          alt={place.title}
        />
      )}

      <section className="detail-info">
        <h2>여행지 정보</h2>
        <p>📍 주소: {place.addr1 || "주소 정보 없음"}</p>

        {place.tel && <p>☎ 전화번호: {place.tel}</p>}

        {place.overview && (
          <div className="detail-overview">
            <h2>여행지 소개</h2>
            <p>{place.overview}</p>
          </div>
        )}
      </section>
    </div>
  </main>
);
}

export default PlaceDetail;
