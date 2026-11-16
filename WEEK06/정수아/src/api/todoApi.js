
const API_URL = 'http://localhost:3000/todos'

// 공통 응답 확인
const checkResponse = async (response, errorMessage) => {
  if (!response.ok) {
    throw new Error(errorMessage)
  }

  return response
}

// GET: 할 일 목록 조회
export const getTodos = async () => {
  const response = await fetch(API_URL)
  await checkResponse(response, '데이터를 불러오지 못했습니다.')

  return response.json()
}

// POST: 새로운 할 일 추가
export const addTodo = async (title) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      completed: false,
    }),
  })

  await checkResponse(response, '할 일을 추가하지 못했습니다.')

  return response.json()
}

// PATCH: 완료 상태 변경
export const toggleTodo = async (todo) => {
  const response = await fetch(`${API_URL}/${todo.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      completed: !todo.completed,
    }),
  })

  await checkResponse(response, '상태를 변경하지 못했습니다.')

  return response.json()
}

// PUT: 할 일 내용 수정
export const updateTodo = async (todo, newTitle) => {
  const response = await fetch(`${API_URL}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: todo.id,
      title: newTitle,
      completed: todo.completed,
    }),
  })

  await checkResponse(response, '할 일을 수정하지 못했습니다.')

  return response.json()
}

// DELETE: 할 일 삭제
export const deleteTodo = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })

  await checkResponse(response, '할 일을 삭제하지 못했습니다.')
}
