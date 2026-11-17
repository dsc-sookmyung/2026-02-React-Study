import { useState } from 'react';

function TodoForm({ onAdd, adding }) {
  const [title, setTitle] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === '') {
      return;
    }

    const success = await onAdd(title.trim());

    if (success) {
      setTitle('');
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="새로운 할 일을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={adding}
      />

      <button
        type="submit"
        className="add-button"
        disabled={adding || title.trim() === ''}
      >
        {adding ? '추가 중...' : '추가'}
      </button>
    </form>
  );
}

export default TodoForm;
