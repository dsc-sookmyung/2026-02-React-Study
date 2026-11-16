import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem.jsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const url = "http://localhost:3001/todos";

  // 할 일 조회
  const getTodos = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("데이터를 불러오지 못했습니다.");
      }

      const data = await response.json();
      setTodos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  // 할 일 추가
  const addTodo = async (e) => {
    e.preventDefault();

    if (title.trim() === "") return;

    try {
      setError("");

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          completed: false,
        }),
      });

      if (!response.ok) {
        throw new Error("추가에 실패했습니다.");
      }

      const newTodo = await response.json();

      setTodos([...todos, newTodo]);
      setTitle("");
      setMessage("할 일이 추가되었습니다.");
    } catch (err) {
      setError(err.message);
    }
  };

  // 완료 상태 변경
  const toggleTodo = async (todo) => {
    try {
      setError("");

      const response = await fetch(`${url}/${todo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !todo.completed,
        }),
      });

      if (!response.ok) {
        throw new Error("상태 변경에 실패했습니다.");
      }

      const updatedTodo = await response.json();

      setTodos(
        todos.map((item) =>
          item.id === todo.id ? updatedTodo : item
        )
      );

      setMessage("완료 상태가 변경되었습니다.");
    } catch (err) {
      setError(err.message);
    }
  };

  // 할 일 수정
  const editTodo = async (id, newTitle) => {
    try {
      setError("");

      const response = await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle,
        }),
      });

      if (!response.ok) {
        throw new Error("수정에 실패했습니다.");
      }

      const updatedTodo = await response.json();

      setTodos(
        todos.map((item) =>
          item.id === id ? updatedTodo : item
        )
      );

      setMessage("할 일이 수정되었습니다.");
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  // 할 일 삭제
  const deleteTodo = async (id) => {
    try {
      setError("");

      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("삭제에 실패했습니다.");
      }

      setTodos(todos.filter((todo) => todo.id !== id));
      setMessage("할 일이 삭제되었습니다.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>To Do List</h1>
      <p>오늘 해야 할 일을 관리해 보세요.</p>

      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>

      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}

      {loading ? (
        <p>데이터를 불러오는 중...</p>
      ) : error && todos.length === 0 ? (
        <p>목록을 불러오지 못했습니다.</p>
      ) : todos.length === 0 ? (
        <p>등록된 할 일이 없습니다.</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onEdit={editTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;