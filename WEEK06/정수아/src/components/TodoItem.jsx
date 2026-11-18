
import { useState } from "react";

function TodoItem({ todo, onToggle, onUpdate, onDelete, busy }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(todo.title);

  const handleSave = async () => {
    if (!editInput.trim()) return;

    const success = await onUpdate(todo, editInput.trim());

    if (success) {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditInput(todo.title);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-main">
        {isEditing ? (
          <input
            className="edit-input"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") handleCancel();
            }}
            autoFocus
          />
        ) : (
          <span className="todo-title">{todo.title}</span>
        )}

        <button
          className={`check-button ${todo.completed ? "checked" : ""}`}
          onClick={() => onToggle(todo)}
          disabled={busy || isEditing}
          aria-label={todo.completed ? "완료 취소" : "할 일 완료"}
        >
          {todo.completed && "✓"}
        </button>
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <>
            <button
              className="save-button"
              onClick={handleSave}
              disabled={busy}
            >
              저장
            </button>

            <button
              className="cancel-button"
              onClick={handleCancel}
              disabled={busy}
            >
              취소
            </button>
          </>
        ) : (
          <>
            <button
              className="edit-button"
              onClick={() => {
                setEditInput(todo.title);
                setIsEditing(true);
              }}
              disabled={busy}
            >
              수정
            </button>

            <button
              className="delete-button"
              onClick={() => onDelete(todo.id)}
              disabled={busy}
            >
              삭제
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
