import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPlaceById } from '../api/tourApi.js';
import NotFound from './NotFound.jsx';

function PlaceDetail() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError('');
    setPlace(null);

    getPlaceById(id, controller.signal)
      .then((data) => setPlace(data))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [id]);

  if (loading) return <div className="container">상세 정보를 불러오는 중입니다...</div>;
  if (error) return <div className="container"><p role="alert">{error}</p><Link to="/">목록으로 돌아가기</Link></div>;
  if (!place) return <NotFound />;

  const overview = new DOMParser().parseFromString(place.overview || '', 'text/html').body.textContent;

  return (
    <div className="container detail">
      <Link to="/">← 여행지 목록</Link>
      <h1>{place.title}</h1>
      {place.firstimage ? <img src={place.firstimage} alt={place.title} /> : (
        <div className="no-image">등록된 사진이 없습니다.</div>
      )}
      <p><strong>주소</strong> {place.addr1 || '정보 없음'} {place.addr2}</p>
      <p><strong>전화번호</strong> {place.tel || '정보 없음'}</p>
      <h2>여행지 소개</h2>
      <p className="overview">{overview || '등록된 소개가 없습니다.'}</p>
    </div>
  );
}

export default PlaceDetail;
