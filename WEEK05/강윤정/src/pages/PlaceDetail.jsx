
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPlaceDetail } from "../api/tourApi";

function PlaceDetail() {
  const { id } = useParams();

  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDetail() {
      setLoading(true);
      setError("");

      try {
        const data = await getPlaceDetail(id);
        setPlace(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadDetail();
  }, [id]);

  if (loading) {
    return <p>여행지 정보를 불러오는 중...</p>;
  }

  if (error) {
    return <p>오류 발생: {error}</p>;
  }

  if (!place) {
    return (
      <div>
        <h1>여행지 정보를 찾을 수 없습니다.</h1>
        <Link to="/">목록으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div className="place-detail">
      <Link to="/">← 여행지 목록으로 돌아가기</Link>

      <h1>{place.title}</h1>

      {place.firstimage && (
        <img
          src={place.firstimage}
          alt={place.title}
          style={{ width: "100%", maxWidth: "700px" }}
        />
      )}

      <h2>위치</h2>
      <p>{place.addr1 || "주소 정보가 없습니다."}</p>

      <h2>여행지 소개</h2>
      <p>
        {place.overview
          ? place.overview.replace(/<[^>]*>/g, "")
          : "상세 설명이 제공되지 않습니다."}
      </p>
    </div>
  );
}

export default PlaceDetail;
