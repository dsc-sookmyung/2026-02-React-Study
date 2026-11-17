const API_URL = 'http://localhost:3000/todos';

// 할 일 목록 조회 (GET)
export async function getTodos() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('할 일 목록을 불러오지 못했습니다.');
  }

  const data = await response.json();
  return data;
}


export async function addTodo(todo) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  if (!response.ok) {
    throw new Error('할 일을 추가하지 못했습니다.');
  }

  const data = await response.json();
  return data;
}

 // 할 일 수정 및 완료 상태 변경 (PATCH)
export async function updateTodo(id, changes) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(changes),
  });

  if (!response.ok) {
    throw new Error('할 일을 수정하지 못했습니다.');
  }

  const data = await response.json();
  return data;
}

// 할 일 삭제 (DELETE)
export async function deleteTodo(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('할 일을 삭제하지 못했습니다.');
  }
}
