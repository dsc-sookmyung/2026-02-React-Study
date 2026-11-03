import { useEffect, useMemo, useState } from 'react';
import { CATEGORIES, REGIONS, getPlaces } from '../api/tourApi.js';
import PlaceCard from '../components/PlaceCard.jsx';

// 멘토 포인트: useState(검색어/선택값/결과) + useEffect(API 동기화)
export default function PlaceList() {
  const [areaCode, setAreaCode] = useState('1');
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (!__TOUR_API_CONFIGURED__) {
      setLoading(false);
      setError('API 인증키가 비어 있어요. README.md를 참고해 .env 파일에 TOUR_API_KEY를 입력해 주세요.');
      return;
    }

    const controller = new AbortController();
    setLoading(true);
    setError('');
    setPlaces([]);

    getPlaces({ areaCode, category, signal: controller.signal })
      .then((data) => setPlaces(data))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    // 지역·종류를 바꾸거나 다른 페이지로 이동하면 이전 요청 정리
    return () => controller.abort();
  }, [areaCode, category, refreshKey]);

  // 검색어는 이미 받아온 목록 안에서 필터링 (추가 서버 호출 없음)
  const filteredPlaces = useMemo(() => {
    const query = keyword.trim().toLowerCase();
    if (!query) return places;
    return places.filter((place) =>
      `${place.title} ${place.addr1 || ''}`.toLowerCase().includes(query)
    );
  }, [places, keyword]);

  return (
    <div className="page-container">
      <section className="hero">
        <div className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT DESTINATION</div>
        <h1>어디로 떠나볼까요<span className="accent">?</span></h1>
        <p>한국의 다양한 여행지를 둘러보고, 마음에 드는 장소를 자세히 살펴보세요.</p>
      </section>

      <section className="explorer-section" aria-label="여행지 검색">
        <div className="section-heading">
          <div>
            <span className="section-kicker">EXPLORE</span>
            <h2>여행지 찾기</h2>
          </div>
          {!loading && !error && <span className="result-count">{filteredPlaces.length}개 장소</span>}
        </div>

        <div className="filter-bar">
          <label className="search-wrap">
            <span className="sr-only">여행지 검색어</span>
            <span aria-hidden="true" className="search-icon">⌕</span>
            <input
              type="search"
              placeholder="여행지 이름 또는 주소 검색"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
          </label>
          <label className="select-wrap">
            <span>지역</span>
            <select value={areaCode} onChange={(event) => setAreaCode(event.target.value)}>
              {REGIONS.map((region) => (
                <option value={region.code} key={region.code}>{region.label}</option>
              ))}
            </select>
          </label>
          <label className="select-wrap">
            <span>종류</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              {CATEGORIES.map((item) => (
                <option value={item.code} key={item.code}>{item.label}</option>
              ))}
            </select>
          </label>
        </div>

        {loading && (
          <div className="message-panel" role="status">
            <span className="spinner" /> 여행지 정보를 불러오는 중이에요...
          </div>
        )}

        {!loading && error && (
          <div className="message-panel error-panel" role="alert">
            <strong>여행지를 불러오지 못했어요</strong>
            <p>{error}</p>
            <button type="button" className="secondary-button" onClick={() => setRefreshKey((prev) => prev + 1)}>
              다시 시도
            </button>
          </div>
        )}

        {!loading && !error && filteredPlaces.length === 0 && (
          <div className="message-panel">
            <strong>표시할 여행지가 없어요.</strong>
            <p>검색어나 지역·종류를 변경해 보세요.</p>
          </div>
        )}

        {!loading && !error && filteredPlaces.length > 0 && (
          <div className="places-grid">
            {filteredPlaces.map((place) => <PlaceCard key={place.contentid} place={place} />)}
          </div>
        )}

        <p className="api-note">한국관광공사 TourAPI 제공 · 지역별 최대 30개 결과 표시</p>
      </section>
    </div>
  );
}
