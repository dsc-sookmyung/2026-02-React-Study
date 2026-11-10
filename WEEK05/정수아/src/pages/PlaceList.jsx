
import { useState, useEffect } from "react";
import { getPlaces } from "../api/tourApi";
import "./PlaceList.css";
import { Link } from "react-router-dom";

function PlaceList() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 선택한 지역 저장
  const [selectedRegion, setSelectedRegion] = useState("전체");

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const data = await getPlaces();
        setPlaces(data);
      } catch (err) {
        console.error(err);
        setError("여행지 정보를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  // 여행지 주소에서 지역명 추출
  const regions = [
    "전체",
    ...new Set(
      places
        .map((place) => place.addr1?.split(" ")[0])
        .filter(Boolean)
    ),
  ];

  // 선택한 지역에 해당하는 여행지만 필터링
  const filteredPlaces =
    selectedRegion === "전체"
      ? places
      : places.filter((place) =>
          place.addr1?.startsWith(selectedRegion)
        );

  if (loading) {
    return <p>여행지 정보를 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="place-page">
      <header className="place-header">
        <h1>국내 여행지 둘러보기</h1>
        <p>다양한 여행지를 확인하고 마음에 드는 곳을 찾아보세요.</p>
      </header>

      <section className="place-section">
        <div className="filter-area">
          <h2>여행지 목록</h2>

          <div className="region-filter">
            <label htmlFor="region">지역 선택</label>

            <select
              id="region"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="place-count">
          총 {filteredPlaces.length}개의 여행지
        </p>

        <div className="place-grid">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <Link
                to={`/places/${place.contentid}`}
                className="place-card"
                key={place.contentid}
              >
                <img
                  src={
                    place.firstimage ||
                    place.firstimage2 ||
                    "https://placehold.co/600x400?text=No+Image"
                  }
                  alt={place.title}
                />

                <div className="place-info">
                  <h3>{place.title}</h3>
                  <p>
                    {place.addr1 || "주소 정보가 없습니다."}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="no-places">
              선택한 지역에 해당하는 여행지가 없습니다.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default PlaceList;
