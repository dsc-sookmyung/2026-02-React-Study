
import { useState, useEffect } from "react";
import { getPlaces } from "../api/tourApi";
import PlaceCard from "../components/PlaceCard";

// 지역 메뉴

const regions = [
  { name: "전체", code: "" },
  { name: "서울", code: "1" },
  { name: "부산", code: "6" },
  { name: "대구", code: "4" },
  { name: "인천", code: "2" },
  { name: "광주", code: "5" },
  { name: "대전", code: "3" },
  { name: "울산", code: "7" },
  { name: "세종", code: "8" },
  { name: "경기", code: "31" },
  { name: "강원", code: "32" },
  { name: "충북", code: "33" },
  { name: "충남", code: "34" },
  { name: "전북", code: "37" },
  { name: "전남", code: "38" },
  { name: "경북", code: "35" },
  { name: "경남", code: "36" },
  { name: "제주", code: "39" },
];


function PlaceList() {
  const [places, setPlaces] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadPlaces() {
      setLoading(true);
      setError("");

      try {
        const data = await getPlaces(selectedRegion);

        if (active) {
          setPlaces(data);
        }
      } catch (err) {
        if (active) {
          setError(err.message);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadPlaces();

    return () => {
      active = false;
    };
  }, [selectedRegion]);

  const currentRegion = regions.find(
    (region) => region.code === selectedRegion
  );

  return (
    <main>
      {/* 지역 선택 메뉴 */}
      <section className="region-section">
        <h2>지역 선택</h2>

        <div className="region-menu">
          {regions.map((region) => (
            <button
              type="button"
              key={region.code}
              className={
                selectedRegion === region.code
                  ? "region-button active"
                  : "region-button"
              }
              onClick={() => setSelectedRegion(region.code)}
            >
              {region.name}
            </button>
          ))}
        </div>
      </section>

      {/* 여행지 목록 */}
      <section className="places-section">
        <h1>
          {selectedRegion === ""
            ? "지금 떠나기 좋은 여행지 TOP 10"
            : `${currentRegion.name} 여행지 둘러보기`}
        </h1>

        {loading ? (
          <p>여행지 정보를 불러오는 중...</p>
        ) : error ? (
          <p>오류 발생: {error}</p>
        ) : places.length === 0 ? (
          <p>조회된 여행지가 없습니다.</p>
        ) : (
          <div className="place-list">
            {places.map((place, index) => (
              <div className="place-item" key={place.contentid}>
                {selectedRegion === "" && (
                  <span className="rank-label">
                    TOP {index + 1}
                  </span>
                )}

                <PlaceCard place={place} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default PlaceList;
