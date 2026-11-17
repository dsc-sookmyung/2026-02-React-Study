import { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem.jsx';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('loading');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function loadTodos() {
    setStatus('loading');
    try {
      const response = await fetch('/todos');
      if (!response.ok) throw new Error();
      setTodos(await response.json());
      setStatus('ready');
    } catch {
      setStatus('error');
    }
  }

  useEffect(() => {
    loadTodos();
  }, []);

  async function changeTodo(method, id, data) {
    setSaving(true);
    setError('');
    try {
      const response = await fetch(id === null ? '/todos' : `/todos/${id}`, {
        method,
        ...(data && {
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }),
      });
      if (!response.ok) throw new Error();

      if (method === 'DELETE') {
        setTodos((list) => list.filter((todo) => todo.id !== id));
      } else {
        const saved = await response.json();
        setTodos((list) => method === 'POST'
          ? [...list, saved]
          : list.map((todo) => todo.id === id ? saved : todo));
      }
      return true;
    } catch {
      setError('변경하지 못했어요. 다시 시도해 주세요.');
      return false;
    } finally {
      setSaving(false);
    }
  }

  async function addTodo(event) {
    event.preventDefault();
    const text = title.trim();
    if (!text || saving || status !== 'ready') return;
    if (await changeTodo('POST', null, { title: text, completed: false })) {
      setTitle('');
    }
  }

  return (
    <main className="todo">
      <h1>To-do list</h1>
      <form className="add-form" onSubmit={addTodo}>
        <input aria-label="새 할 일" placeholder="할 일 추가하기" value={title}
          onChange={(event) => setTitle(event.target.value)} disabled={saving} />
        <button disabled={!title.trim() || status !== 'ready' || saving}>추가</button>
      </form>

      {error && <p className="error" role="alert">{error}</p>}
      {status === 'loading' && <p role="status">할 일을 불러오는 중...</p>}
      {status === 'error' && (
        <>
          <p className="error" role="alert">목록을 불러오지 못했어요.</p>
          <button onClick={loadTodos}>다시 불러오기</button>
        </>
      )}
      {status === 'ready' && (todos.length === 0 ? (
        <p className="empty">등록된 할 일이 없어요.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} saving={saving}
              onToggle={() => changeTodo('PATCH', todo.id, { completed: !todo.completed })}
              onEdit={(text) => changeTodo('PATCH', todo.id, { title: text })}
              onDelete={() => changeTodo('DELETE', todo.id)} />
          ))}
        </ul>
      ))}
    </main>
  );
}

export default App;
