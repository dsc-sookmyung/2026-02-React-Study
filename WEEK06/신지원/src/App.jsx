
import { useEffect, useState } from 'react';
import './App.css';

const API_URL = 'http://localhost:3001/todos';

function App() {
  const [todos, setTodos] = useState([]);             // 서버에서 가져온 할 일 목록
  const [loading, setLoading] = useState(true);       // 데이터 요청 상태
  const [error, setError] = useState('');
  const [newTodo, setNewTodo] = useState('');         //입력창에 작성하는 할 일의 내용을 저장

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
        method: 'POST',                               //서버에 새로운 데이터 등록
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
    } catch (err) {
      setError(err.message);
    }
  };

  // 컴포넌트가 처음 화면에 나타날 때 API 요청
  useEffect(() => {
    fetchTodos();
  }, []);

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
              <li className="todo-item" key={todo.id}>
                <span
                  className={todo.completed ? 'completed' : ''}
                >
                  {todo.title}
                </span>
                <span className="todo-status">
                  {todo.completed ? '완료' : '진행 중'}
                </span>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
