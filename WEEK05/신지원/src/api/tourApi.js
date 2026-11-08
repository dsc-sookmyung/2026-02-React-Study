
const API_KEY = process.env.TOUR_API_KEY;

const BASE_URL =
  "https://apis.data.go.kr/B551011/KorService2/areaBasedList2";

// 관광지 목록 조회
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

    const items = data.response?.body?.items?.item;

    if (!items) {
      return [];
    }

    return Array.isArray(items) ? items : [items];
  } catch (error) {
    console.error("관광지 목록 불러오기 실패:", error);
    throw error;
  }
}

// 관광지 상세 정보 조회


export async function getTourDetail(contentId) {
  try {
    const params = new URLSearchParams({
      serviceKey: API_KEY,
      MobileOS: "ETC",
      MobileApp: "TravelLog",
      _type: "json",
      contentId: contentId,
    });

    const response = await fetch(
      `https://apis.data.go.kr/B551011/KorService2/detailCommon2?${params}`
    );

    const data = await response.json();

    console.log("상세 정보 API 응답:", data);

    if (!response.ok) {
      throw new Error("상세 정보 요청에 실패했습니다.");
    }

    if (data.response?.header?.resultCode !== "0000") {
      throw new Error(
        data.response?.header?.resultMsg || data.resultMsg
      );
    }

    const detail = data.response.body.items.item;

    return Array.isArray(detail) ? detail[0] : detail;

  } catch (error) {
    console.error("상세 정보 불러오기 실패:", error);
    throw error;
  }
}
