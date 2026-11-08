// 여행지 상세 페이지. 선택한 여행지의 상세 정보를 보여주는 페이지
import { useParams } from "react-router-dom";

function PlaceDetail() {
  const { id } = useParams();

  return (
    <main>
      <h1>여행지 상세 페이지</h1>
      <p>선택한 여행지 ID: {id}</p>
    </main>
  );
}

export default PlaceDetail;