
import { useCallback, useEffect, useState } from "react";
import {
  getTodos,
  addTodo,
  toggleTodo,
  updateTodo,
  deleteTodo,
} from "./api/todoApi";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [busyId, setBusyId] = useState(null);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // 할 일 목록 불러오기
  const loadTodos = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getTodos();
      setTodos(data);
    } catch (err) {
      setError("할 일 목록을 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  // 할 일 추가
  const handleAdd = async (title) => {
    if (!title.trim()) return;

    try {
      setSubmitting(true);
      setError("");
      setMessage("");

      const newTodo = await addTodo(title);
      setTodos((prev) => [...prev, newTodo]);

      setInput("");
      setMessage("새로운 할 일이 추가되었습니다!");
    } catch (err) {
      setError("할 일을 추가하지 못했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  // 완료 상태 변경
  const handleToggle = async (todo) => {
    try {
      setBusyId(todo.id);
      setError("");
      setMessage("");

      const updatedTodo = await toggleTodo(todo);

      setTodos((prev) =>
        prev.map((item) =>
          item.id === todo.id ? updatedTodo : item
        )
      );

      setMessage(
        updatedTodo.completed
          ? "할 일을 완료했습니다!"
          : "완료 상태를 취소했습니다!"
      );
    } catch (err) {
      setError("완료 상태를 변경하지 못했습니다.");
    } finally {
      setBusyId(null);
    }
  };

  // 할 일 수정
  const handleUpdate = async (todo, newTitle) => {
    try {
      setBusyId(todo.id);
      setError("");
      setMessage("");

      const updatedTodo = await updateTodo(todo, newTitle);

      setTodos((prev) =>
        prev.map((item) =>
          item.id === todo.id ? updatedTodo : item
        )
      );

      setMessage("할 일이 수정되었습니다!");
      return true;
    } catch (err) {
      setError("할 일을 수정하지 못했습니다.");
      return false;
    } finally {
      setBusyId(null);
    }
  };

  // 할 일 삭제
  const handleDelete = async (id) => {
    try {
      setBusyId(id);
      setError("");
      setMessage("");

      await deleteTodo(id);

      setTodos((prev) => prev.filter((item) => item.id !== id));

      setMessage("할 일이 삭제되었습니다!");
    } catch (err) {
      setError("할 일을 삭제하지 못했습니다.");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="app">
      <main className="todo-container">
        <header className="todo-header">
          <h1>To-do List</h1>
        </header>

        <TodoForm
          input={input}
          setInput={setInput}
          onAdd={handleAdd}
          submitting={submitting}
        />

        {error && (
          <div className="error-message">
            {error}
            <button onClick={loadTodos}>다시 시도</button>
          </div>
        )}

        {message && !error && (
          <div className="success-message">
            {message}
          </div>
        )}

        {loading ? (
          <p className="loading-message">
            할 일 목록을 불러오는 중입니다...
          </p>
        ) : error ? null : (
          <TodoList
            todos={todos}
            onToggle={handleToggle}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            busyId={busyId}
          />
        )}
      </main>
    </div>
  );
}

export default App;
