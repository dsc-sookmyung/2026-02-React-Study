
import { useState, useEffect } from 'react';
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
} from './services/TodoApi';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [adding, setAdding] = useState(false);
  const [busyId, setBusyId] = useState(null);
  const [message, setMessage] = useState('');
  const [actionError, setActionError] = useState('');

  // 할 일 목록 조회 (GET)
  useEffect(() => {
    async function fetchTodos() {
      try {
        setLoading(true);
        setError('');

        const data = await getTodos();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);

  // 할 일 추가 (POST)
  async function handleAddTodo(title) {
    try {
      setAdding(true);
      setMessage('');
      setActionError('');

      const newTodo = await addTodo({
        title: title,
        completed: false,
      });

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setMessage('할 일이 추가되었습니다.');

      return true;
    } catch (err) {
      setActionError(err.message);
      return false;
    } finally {
      setAdding(false);
    }
  }

  // 완료/미완료 변경 (PATCH)
  async function handleToggleTodo(id, completed) {
    try {
      setBusyId(id);
      setMessage('');
      setActionError('');

      const updatedTodo = await updateTodo(id, {
        completed: completed,
      });

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? updatedTodo : todo
        )
      );

      setMessage('완료 상태가 변경되었습니다.');
    } catch (err) {
      setActionError(err.message);
    } finally {
      setBusyId(null);
    }
  }

  // 할 일 내용 수정 (PATCH)
  async function handleEditTodo(id, title) {
    try {
      setBusyId(id);
      setMessage('');
      setActionError('');

      const updatedTodo = await updateTodo(id, {
        title: title,
      });

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? updatedTodo : todo
        )
      );

      setMessage('할 일이 수정되었습니다.');
      return true;
    } catch (err) {
      setActionError(err.message);
      return false;
    } finally {
      setBusyId(null);
    }
  }

  // 할 일 삭제 (DELETE)
  async function handleDeleteTodo(id) {
    try {
      setBusyId(id);
      setMessage('');
      setActionError('');

      await deleteTodo(id);

      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== id)
      );

      setMessage('할 일이 삭제되었습니다.');
    } catch (err) {
      setActionError(err.message);
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="app">
      <div className="todo-container">
        <h1>MY TODO LIST</h1>

        <TodoForm
          onAdd={handleAddTodo}
          adding={adding || loading || busyId !== null}
        />

        {loading ? (
          <p className="state-message">
            데이터를 불러오는 중...
          </p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : todos.length === 0 ? (
          <p className="state-message">
            등록된 할 일이 없습니다.
          </p>
        ) : (
          <TodoList
            todos={todos}
            onToggle={handleToggleTodo}
            onEdit={handleEditTodo}
            onDelete={handleDeleteTodo}
            busy={busyId !== null}
          />
        )}

      {/* 상태 변경 메시지를 맨 아래에 표시 */}
      {message && (
        <p className="success-message">{message}</p>
      )}

      {actionError && (
        <p className="error-message">{actionError}</p>
      )}
    </div>
  </div>
  );
}

export default App;
