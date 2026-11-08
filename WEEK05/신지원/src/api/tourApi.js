const API_KEY = process.env.TOUR_API_KEY;

const BASE_URL =
  "https://apis.data.go.kr/B551011/KorService2/areaBasedList2";

export async function getTourList() {
  try {
    const params = new URLSearchParams({
      serviceKey: API_KEY,
      MobileOS: "ETC",
      MobileApp: "TravelLog",
      _type: "json",
      numOfRows: "12",
      pageNo: "1",
      arrange: "O",
      contentTypeId: "12",
      areaCode: "1",
    });

    const response = await fetch(`${BASE_URL}?${params}`);

    if (!response.ok) {
      throw new Error("API 요청에 실패했습니다.");
    }

    const data = await response.json();

    console.log("API 원본 응답:", data);
    console.log("응답의 최상위 키:", Object.keys(data));
    console.log("response 값:", data.response);

    const items = data.response.body.items.item;

    return items || [];
  } catch (error) {
    console.error("여행지 데이터를 가져오는 중 오류 발생:", error);
    throw error;
  }
}