
const API_KEY = import.meta.env.VITE_TOUR_API_KEY;

// 한국관광공사 관광정보 목록 조회
export async function getPlaces() {
  const url = new URL(
    "https://apis.data.go.kr/B551011/KorService2/areaBasedList2"
  );

  const params = {
    serviceKey: API_KEY,
    MobileOS: "ETC",
    MobileApp: "TravelApp",
    _type: "json",
    numOfRows: 12,
    pageNo: 1,
    contentTypeId: 12,
    arrange: "O",
  };

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API 요청 실패: HTTP ${response.status}`);
  }

  const data = await response.json();

  console.log("여행지 목록 API 응답:", data);

  const result = data?.response;

  if (!result) {
    throw new Error(
      `목록 API 오류 (${data?.resultCode}): ${data?.resultMsg || "응답 형식 오류"}`
    );
  }

  if (result.header?.resultCode !== "0000") {
    throw new Error(
      `API 오류 (${result.header?.resultCode}): ${result.header?.resultMsg}`
    );
  }

  const items = result.body?.items?.item;

  return Array.isArray(items) ? items : items ? [items] : [];
}


// 여행지 상세 정보 조회
export async function getPlaceDetail(contentId) {
  const url = new URL(
    "https://apis.data.go.kr/B551011/KorService2/detailCommon2"
  );

  // 현재 TourAPI에서 사용하는 기본 요청 매개변수
  const params = {
    serviceKey: API_KEY,
    MobileOS: "ETC",
    MobileApp: "TravelApp",
    _type: "json",
    contentId: contentId,
  };

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`상세 정보 요청 실패: HTTP ${response.status}`);
  }

  // API 응답을 문자열로 가져오기
  const responseText = await response.text();

  console.log("상세 API 원본 응답:", responseText);

  let data;

  try {
    data = JSON.parse(responseText);
  } catch (err) {
    console.error("JSON 변환 오류:", err);
    throw new Error("API가 JSON이 아닌 응답을 반환했습니다.");
  }

  console.log("상세 API 응답 데이터:", data);

  const result = data?.response;

  // API 오류 응답 확인
  if (!result) {
    throw new Error(
      `상세 API 오류 (${data?.resultCode}): ${data?.resultMsg || "응답 형식 오류"}`
    );
  }

  // API 정상 응답 여부 확인
  if (result.header?.resultCode !== "0000") {
    throw new Error(
      `API 오류 (${result.header?.resultCode}): ${result.header?.resultMsg}`
    );
  }

  // 상세 정보 가져오기
  const items = result.body?.items?.item;

  if (!items) {
    return null;
  }

  return Array.isArray(items) ? items[0] : items;
}
