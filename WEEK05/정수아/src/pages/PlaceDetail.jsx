
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPlaceDetail } from "../api/tourApi";
import "./PlaceDetail.css";

function PlaceDetail() {
  const { id } = useParams();

  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getPlaceDetail(id);

        if (!data) {
          setError("존재하지 않는 여행지입니다.");
        } else {
          setPlace(data);
        }
      } catch (err) {
        console.error("상세 페이지 오류:", err);
        setError(err.message || "상세 정보를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="detail-loading">
        <div className="loading-circle"></div>
        <p>여행지 정보를 불러오는 중입니다...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="detail-error">
        <h2>여행지 정보를 불러올 수 없습니다.</h2>
        <p>{error}</p>
        <Link to="/places" className="back-button">
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <nav className="detail-nav">
        <Link to="/places" className="detail-back-link">
          ← 여행지 목록
        </Link>
        <span>TRAVEL DESTINATION</span>
      </nav>

      <section className="detail-hero">
        <img
          src={
            place.firstimage ||
            place.firstimage2 ||
            "https://placehold.co/1200x650?text=Travel+Destination"
          }
          alt={place.title}
          className="detail-hero-image"
        />

        <div className="detail-hero-overlay"></div>

        <div className="detail-hero-content">
          <span className="detail-label">RECOMMENDED PLACE</span>
          <h1>{place.title}</h1>
          <p>
            {place.addr1 || "주소 정보가 없습니다."}
          </p>
        </div>
      </section>

      <main className="detail-content">
        <section className="detail-heading">
          <span className="section-label">INFORMATION</span>
          <h2>여행지 정보</h2>
          <p>방문하기 전에 필요한 정보를 확인해 보세요.</p>
        </section>

        <section className="detail-info-grid">
          <div className="detail-info-card">
            <span className="info-title">주소</span>
            <p>
              {place.addr1 || "주소 정보가 없습니다."}
              {place.addr2 ? ` ${place.addr2}` : ""}
            </p>
          </div>

          <div className="detail-info-card">
            <span className="info-title">전화번호</span>
            <p>
              {place.tel || "전화번호 정보가 없습니다."}
            </p>
          </div>
        </section>

        <section className="detail-overview">
          <span className="section-label">ABOUT THIS PLACE</span>
          <h2>여행지 소개</h2>

          <p className="overview-text">
            {place.overview || "아직 등록된 여행지 소개가 없습니다."}
          </p>
        </section>

        <div className="detail-bottom">
          <Link to="/places" className="back-button">
            ← 다른 여행지 둘러보기
          </Link>
        </div>
      </main>
    </div>
  );
}

export default PlaceDetail;
