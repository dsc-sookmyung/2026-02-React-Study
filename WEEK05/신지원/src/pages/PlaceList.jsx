// 여행지 리스트 페이지. 여행지 리스트를 보여주는 페이지로, 여행지 검색 기능을 제공

import { useEffect, useState } from "react";
import { getTourList } from "../api/tourApi";
import PlaceCard from "../components/PlaceCard";

function PlaceList() {
  const [places, setPlaces] = useState([]);       //API에서 받아온 관광지 목록
  const [loading, setLoading] = useState(true);   //데이터를 불러오는 중인지 여부
  const [error, setError] = useState("");         //API 요청 실패 시 보여줄 오류 메시지

  useEffect(() => {
    getTourList()                                 //API 요청이 성공하면 받아온 데이터를 places에 저장
      .then((data) => {
        setPlaces(data);
      })
      .catch((error) => {
        console.error(error);
        setError("여행지 정보를 불러오지 못했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>여행지 정보를 불러오는 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>여행지를 찾아보세요!</h1>
      <p>다양한 여행지를 둘러볼 수 있어요.</p>

      <div className="place-list">
        {places.map((place) => (                  //데이터 화면에 출력
          <PlaceCard
            key={place.contentid}
            place={place}
          />
        ))}
      </div>
    </main>
  );
}

export default PlaceList;
