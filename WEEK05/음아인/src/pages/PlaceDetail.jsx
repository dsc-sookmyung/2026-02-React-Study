import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPlaceById } from '../api/tourApi.js';

function PlaceDetail() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    getPlaceById(id).then((data) => setPlace(data));
  }, [id]);

  if (!place) return <div className="container">여행지 정보를 확인해주세요.</div>;

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
