// 여행지 리스트 페이지. 여행지 리스트를 보여주는 페이지로, 여행지 검색 기능을 제공

import { useEffect, useState } from "react";
import { getTourList } from "../api/tourApi";
import PlaceCard from "../components/PlaceCard";

const regions = [
  { name: "서울", code: "1" },
  { name: "인천", code: "2" },
  { name: "대전", code: "3" },
  { name: "대구", code: "4" },
  { name: "광주", code: "5" },
  { name: "부산", code: "6" },
  { name: "울산", code: "7" },
  { name: "세종", code: "8" },
  { name: "경기", code: "31" },
  { name: "강원", code: "32" },
  { name: "충북", code: "33" },
  { name: "충남", code: "34" },
  { name: "경북", code: "35" },
  { name: "경남", code: "36" },
  { name: "전북", code: "37" },
  { name: "전남", code: "38" },
  { name: "제주", code: "39" },
];

function PlaceList() {
  const [places, setPlaces] = useState([]);       //API에서 받아온 관광지 목록
  const [loading, setLoading] = useState(true);   //데이터를 불러오는 중인지 여부
  const [error, setError] = useState("");         //API 요청 실패 시 보여줄 오류 메시지
  const [selectedRegion, setSelectedRegion] = useState("1");

  
useEffect(() => {
  setLoading(true);
  setError("");

  getTourList(selectedRegion)                      //현재 선택된 지역 코드를 API에 전달
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
}, [selectedRegion]);                               //선택한 지역이 변경될 때마다 useEffect가 다시 실행


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

      {/* 지역 선택 버튼 */}
      <div className="region-list">
        {regions.map((region) => (                    //지역 목록을 하나씩 꺼내 버튼으로 만들기
          <button
            key={region.code}
            className={
              selectedRegion === region.code          //현재 선택된 지역인지 확인
                ? "region-button active"              //선택된 버튼에만 추가되는 css
                : "region-button"
            }
            onClick={() => setSelectedRegion(region.code)}      //버튼을 클릭하면 선택한 지역 코드로 변경
          >
            {region.name}
          </button>
        ))}
      </div>

      {/* 여행지 목록 */}
      <div className="place-list">
        {places.map((place) => (
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
