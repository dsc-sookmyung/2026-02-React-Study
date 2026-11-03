// 한국관광공사 TourAPI 4.0 국문 관광정보 서비스 (KorService2)
// https://www.data.go.kr/  → "한국관광공사_국문 관광정보 서비스" 활용 신청
// 브라우저는 /api를 호출하고, Vite 개발 서버가 실제 API로 프록시합니다.

const DEFAULT_PARAMS = {
  MobileOS: 'ETC',
  MobileApp: 'GDGoCWeek05',
  _type: 'json',
};

export const REGIONS = [
  { code: '1', label: '서울' },
  { code: '6', label: '부산' },
  { code: '39', label: '제주' },
  { code: '32', label: '강원' },
  { code: '31', label: '경기' },
];

export const CATEGORIES = [
  { code: '', label: '전체 종류' },
  { code: '12', label: '관광지' },
  { code: '14', label: '문화시설' },
  { code: '15', label: '축제·공연' },
  { code: '25', label: '여행 코스' },
];

export function getCategoryName(contentTypeId) {
  return CATEGORIES.find((category) => category.code === String(contentTypeId))?.label || '여행 정보';
}

// TourAPI는 검색 결과가 1개면 객체, 여러 개면 배열로 내려올 수 있음
function normalizeItems(item) {
  if (!item) return [];
  return Array.isArray(item) ? item : [item];
}

async function request(endpoint, params = {}, signal) {
  const query = new URLSearchParams({ ...DEFAULT_PARAMS, ...params });
  const response = await fetch(`/api/${endpoint}?${query.toString()}`, { signal });

  if (!response.ok) {
    throw new Error(`서버 응답 오류 (${response.status})`);
  }

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error('API가 JSON 대신 다른 형식으로 응답했어요. 인증키와 API 신청 상태를 확인해 주세요.');
  }

  const result = data?.response;
  if (!result) {
    throw new Error('API 응답 형식을 확인할 수 없어요.');
  }

  const resultCode = String(result.header?.resultCode || '');
  if (resultCode && resultCode !== '0000' && resultCode !== '00') {
    throw new Error(result.header?.resultMsg || '관광 API 호출에 실패했어요.');
  }

  return normalizeItems(result.body?.items?.item);
}

// ① 여행지 목록 API: areaBasedList2
export async function getPlaces({ areaCode = '1', category = '', signal } = {}) {
  const params = {
    areaCode,
    pageNo: '1',
    numOfRows: '30',
    arrange: 'A',
  };
  if (category) params.contentTypeId = category;
  return request('areaBasedList2', params, signal);
}

// ② 여행지 상세 API: detailCommon2
export async function getPlaceById(id, signal) {
  if (!/^\d+$/.test(String(id))) return null;
  const places = await request('detailCommon2', { contentId: String(id) }, signal);
  return places[0] || null;
}
