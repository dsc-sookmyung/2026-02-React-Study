import { useEffect, useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

const API_URL = 'http://localhost:3001/todos';

function App() {
  const [todos, setTodos] = useState([]);             // 서버에서 가져온 할 일 목록
  const [loading, setLoading] = useState(true);       // 데이터 요청 상태
  const [error, setError] = useState('');
  const [newTodo, setNewTodo] = useState('');         //입력창에 작성하는 할 일의 내용을 저장
  const [message, setMessage] = useState('');         //성공 피드백 UI

  // 서버에서 할 일 목록 조회
  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(API_URL);          //서버에 GET 요청

      if (!response.ok) {
        throw new Error('할 일 목록을 불러오지 못했습니다.');
      }

      const data = await response.json();             //서버 응답 데이터를 JSON으로 변환
      setTodos(data);                                 //api 결과를 state에 반영
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 새로운 할 일 추가
  const addTodo = async () => {
    if (!newTodo.trim()) {
      alert('할 일을 입력해 주세요!');
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',                               //[POST] 서버에 새로운 데이터 등록
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newTodo,
          completed: false,                           //새 할 일은 미완료 상태로 등록
        }),
      });

      if (!response.ok) {
        throw new Error('할 일을 추가하지 못했습니다.');
      }

      const data = await response.json();

      setTodos((prev) => [...prev, data]);             //기존 목록 뒤에 새 데이터 추가
      setNewTodo('');
      setMessage('할 일이 추가되었습니다!');
    } catch (err) {
      setError(err.message);
    }
  };

  // 할 일 완료 상태 수정
  const toggleTodo = async (id, completed) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',                                //[PATCH] 기존 데이터 중 필요한 속성만 수정
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed: !completed,
        }),
      });

      if (!response.ok) {
        throw new Error('할 일 상태를 수정하지 못했습니다.');
      }

      const data = await response.json();

      setTodos((prev) =>  
        prev.map((todo) =>                               //기존 목록에서 수정한 할 일만 새로운 데이터로 교체
          todo.id === id ? data : todo
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // 할 일 제목 수정
  const editTodo = async (id, title) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',                                 //[PATCH] 기존 데이터 일부 수정
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title.trim(),                           //앞뒤 공백을 제거한 제목 전송
        }),
      });

      if (!response.ok) {
        throw new Error('할 일 제목을 수정하지 못했습니다.');
      }

      const data = await response.json();

      setTodos((prev) =>
        prev.map((todo) =>                               //수정한 할 일만 새로운 데이터로 교체
          todo.id === id ? data : todo
        )
      );
      setMessage('할 일이 수정되었습니다!');
    } catch (err) {
      setError(err.message);
    }
  };

  // 할 일 삭제
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {   //삭제할 할 일의 고유 주소
        method: 'DELETE',                                  //[DELETE] 서버에 특정 데이터 삭제 요청
      });

      if (!response.ok) {
        throw new Error('할 일을 삭제하지 못했습니다.');
      }
      setTodos((prev) =>                                   //변경된 목록을 React State에 반영
        prev.filter((todo) => todo.id !== id)              //삭제할 항목을 제외한 새로운 배열 생성
      );
      setMessage('할 일이 삭제되었습니다!');
    } catch (err) {
      setError(err.message);
    }
  };

  // 컴포넌트가 처음 화면에 나타날 때 API 요청
  useEffect(() => {
    fetchTodos();
  }, []);

  // 성공 메시지를 2.5초 후 자동으로 제거
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage('');
    }, 2500);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className="todo-container">
      <header className="todo-header">
        <p className="subtitle">MY DAILY ROUTINE</p>
        <h1>To do List</h1>
        <p className="description">
          오늘 해야 할 일을 하나씩 완료해 봐요!
        </p>
      </header>

      <main className="todo-card">
        <div className="todo-summary">
          <h2>오늘의 할 일</h2>
          <span>
            전체 {todos.length}개
          </span>
        </div>

        {/* 성공 메시지 */}
        {message && (
          <p className="success-message">{message}</p>
        )}

        {/* 할 일 입력 영역 */}
        <div className="todo-form">
          <input
            type="text"
            placeholder="새로운 할 일을 입력하세요"
            value={newTodo}                                   //입력창에 현재 state 값을 표시
            onChange={(e) => setNewTodo(e.target.value)}      //사용자가 입력할 때마다 newTodo를 갱신
          />
          <button onClick={addTodo}> 
            추가
          </button>
        </div>

        {/* Loading 상태 */}
        {loading && (
          <div className="status-message">
            데이터를 불러오는 중입니다...
          </div>
        )}

        {/* Error 상태 */}
        {!loading && error && (
          <div className="status-message error">
            <p>{error}</p>
            <button onClick={fetchTodos}>
              다시 시도
            </button>
          </div>
        )}

        {/* Empty 상태 */}
        {!loading && !error && todos.length === 0 && (
          <div className="status-message">
            등록된 할 일이 없어요.
          </div>
        )}

        {/* Success 상태: 할 일 목록 */}
        {!loading && !error && todos.length > 0 && (
          <ul className="todo-list">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
