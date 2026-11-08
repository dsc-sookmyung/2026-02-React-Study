// 여행지 리스트 페이지. 여행지 리스트를 보여주는 페이지로, 여행지 검색 기능을 제공
import { useEffect } from "react";
import { getTourList } from "../api/tourApi";

function PlaceList() {
  useEffect(() => {
    getTourList()
      .then((data) => {
        console.log("여행지 목록:", data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <h1>여행지를 찾아보세요!</h1>
      <p>다양한 여행지를 둘러볼 수 있어요.</p>
    </main>
  );
}

export default PlaceList;