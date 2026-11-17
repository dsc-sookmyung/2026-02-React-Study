
import { useEffect, useState } from 'react';
import './App.css';

const API_URL = 'http://localhost:3001/todos';

function App() {
  const [todos, setTodos] = useState([]);             // 서버에서 가져온 할 일 목록
  const [loading, setLoading] = useState(true);       // 데이터 요청 상태
  const [error, setError] = useState('');

  const fetchTodos = async () => {                    // 서버에서 할 일 목록 조회
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
