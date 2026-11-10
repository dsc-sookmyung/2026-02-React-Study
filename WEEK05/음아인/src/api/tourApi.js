async function request(endpoint, params, signal) {
  if (!__TOUR_API_CONFIGURED__) throw new Error('API 인증키 설정이 필요합니다.');

  const query = new URLSearchParams({
    MobileOS: 'ETC',
    MobileApp: 'AhinTravel',
    _type: 'json',
    ...params,
  });
  const response = await fetch(`/api/${endpoint}?${query}`, { signal });
  if (!response.ok) throw new Error('여행지 정보를 불러오지 못했습니다.');

  const data = await response.json();
  const result = data.response;
  if (!result || !['0000', '00'].includes(String(result.header?.resultCode))) {
    throw new Error(result?.header?.resultMsg || 'API 응답을 확인해주세요.');
  }
  const items = result.body?.items?.item;
  return items ? (Array.isArray(items) ? items : [items]) : [];
}

export function getPlaces(areaCode, signal) {
  return request('areaBasedList2', {
    areaCode,
    contentTypeId: '12',
    numOfRows: '12',
    pageNo: '1',
    arrange: 'O',
  }, signal);
}

export async function getPlaceById(id, signal) {
  if (!/^\d+$/.test(id)) return null;
  const places = await request('detailCommon2', { contentId: id }, signal);
  return places[0] || null;
}
