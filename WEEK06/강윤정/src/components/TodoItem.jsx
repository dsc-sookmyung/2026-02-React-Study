import { useState } from 'react';

function TodoItem({ todo, onToggle, onEdit, onDelete, busy }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  // 수정 버튼 클릭
  function handleEditClick() {
    setEditTitle(todo.title);
    setIsEditing(true);
  }

  // 수정 내용 저장
  async function handleSave(e) {
    e.preventDefault();

    if (editTitle.trim() === '') {
      return;
    }

    const success = await onEdit(todo.id, editTitle.trim());

    if (success) {
      setIsEditing(false);
    }
  }

  // 수정 취소
  function handleCancel() {
    setEditTitle(todo.title);
    setIsEditing(false);
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id, !todo.completed)}
        disabled={busy}
      />

      {isEditing ? (
        <form className="todo-edit-form" onSubmit={handleSave}>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            disabled={busy}
          />

          <button type="submit" disabled={busy || !editTitle.trim()}>
            저장
          </button>

          <button type="button" onClick={handleCancel} disabled={busy}>
            취소
          </button>
        </form>
      ) : (
        <>
          <span className={todo.completed ? 'completed todo-text' : 'todo-text'}>
            {todo.title}
          </span>

          <div className="todo-actions">
            <button onClick={handleEditClick} disabled={busy}>
              수정
            </button>

            <button onClick={() => onDelete(todo.id)} disabled={busy}>
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
