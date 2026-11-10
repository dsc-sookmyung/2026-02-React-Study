
const API_URL =
  "https://apis.data.go.kr/B551011/KorService2";

const API_KEY = import.meta.env.VITE_TOUR_API_KEY;

// 1. 관광지 목록 가져오기
export async function getPlaces(areaCode = "") {
  const params = new URLSearchParams({
    serviceKey: API_KEY,
    MobileOS: "ETC",
    MobileApp: "AppTest",
    _type: "json",
    arrange: "C",
    contentTypeId: "12",
    numOfRows: "10",
    pageNo: "1",
  });

  // 지역이 선택되면 해당 지역의 관광지만 조회
  if (areaCode) {
    params.set("areaCode", areaCode);
  }

  const response = await fetch(
    `${API_URL}/areaBasedList2?${params}`
  );

  if (!response.ok) {
    throw new Error("API 요청에 실패했습니다.");
  }

  const data = await response.json();

  if (data.response.header.resultCode !== "0000") {
    throw new Error(data.response.header.resultMsg);
  }

  const places = data.response.body.items?.item || [];

  return Array.isArray(places) ? places : [places];
}

// 2. 관광지 상세정보 가져오기
export async function getPlaceDetail(contentId) {
  const params = new URLSearchParams({
    serviceKey: API_KEY,
    MobileOS: "ETC",
    MobileApp: "AppTest",
    _type: "json",
    contentId: contentId,
  });

  const response = await fetch(
    `${API_URL}/detailCommon2?${params}`
  );

  if (!response.ok) {
    throw new Error("상세정보 요청에 실패했습니다.");
  }

  const data = await response.json();

  if (data.response.header.resultCode !== "0000") {
    throw new Error(data.response.header.resultMsg);
  }

  const items = data.response.body.items?.item || [];
  const detail = Array.isArray(items) ? items[0] : items;

  return detail || null;
}
