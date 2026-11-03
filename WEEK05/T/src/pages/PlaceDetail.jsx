import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCategoryName, getPlaceById } from '../api/tourApi.js';
import NotFound from './NotFound.jsx';

// 관광 API의 소개글(overview)에 HTML 태그가 포함되는 경우를 텍스트로 변환
// 위험한 HTML을 직접 렌더링하는 dangerouslySetInnerHTML은 사용하지 않음
function toPlainText(html) {
  if (!html) return '등록된 상세 소개가 없습니다.';
  return new DOMParser().parseFromString(html, 'text/html').body.textContent?.trim() || '등록된 상세 소개가 없습니다.';
}

export default function PlaceDetail() {
  // /places/123456 → id === '123456'
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (!__TOUR_API_CONFIGURED__) {
      setError('API 인증키가 설정되지 않았어요. README.md를 확인해 주세요.');
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    setPlace(null);
    setError('');
    setLoading(true);

    getPlaceById(id, controller.signal)
      .then((data) => setPlace(data))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [id, refreshKey]);

  if (loading) {
    return <div className="page-container detail-state"><div className="message-panel"><span className="spinner" /> 상세 정보를 불러오는 중이에요...</div></div>;
  }

  if (error) {
    return (
      <div className="page-container detail-state">
        <div className="message-panel error-panel" role="alert">
          <strong>상세 정보를 불러오지 못했어요</strong>
          <p>{error}</p>
          <button type="button" className="secondary-button" onClick={() => setRefreshKey((prev) => prev + 1)}>
            다시 시도
          </button>
          <Link className="text-back" to="/">← 목록으로 이동</Link>
        </div>
      </div>
    );
  }

  // 해당 ID에 대한 여행지가 없을 때 404 안내
  if (!place) return <NotFound title="여행지를 찾을 수 없어요" description="존재하지 않거나 삭제된 여행지일 수 있습니다." />;

  return (
    <div className="page-container detail-page">
      <Link to="/" className="back-link">← 여행지 목록으로</Link>
      <div className="detail-heading">
        <span className="detail-type">{getCategoryName(place.contenttypeid)}</span>
        <h1>{place.title}</h1>
        <p>{place.addr1 || '주소 정보 없음'} {place.addr2 || ''}</p>
      </div>

      <div className="detail-cover">
        {place.firstimage ? (
          <img src={place.firstimage} alt={`${place.title} 대표 사진`} />
        ) : (
          <div className="detail-placeholder">✳ <span>NO IMAGE</span></div>
        )}
      </div>

      <div className="detail-layout">
        <section className="intro-card">
          <span className="section-kicker">ABOUT THIS PLACE</span>
          <h2>여행지 소개</h2>
          <p className="overview-text">{toPlainText(place.overview)}</p>
        </section>

        <aside className="info-card">
          <span className="section-kicker">INFORMATION</span>
          <h2>기본 정보</h2>
          <dl>
            <dt>주소</dt>
            <dd>{[place.addr1, place.addr2].filter(Boolean).join(' ') || '정보 없음'}</dd>
            <dt>전화번호</dt>
            <dd>{place.tel || '정보 없음'}</dd>
            <dt>관광지 ID</dt>
            <dd>{place.contentid}</dd>
          </dl>
        </aside>
      </div>
    </div>
  );
}
