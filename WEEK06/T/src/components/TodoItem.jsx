import { useState } from "react";

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const saveEdit = async () => {
    if (editTitle.trim() === "") return;

    const success = await onEdit(todo.id, editTitle.trim());

    if (success) {
      setIsEditing(false);
    }
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo)}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <button onClick={saveEdit}>저장</button>
          <button onClick={() => setIsEditing(false)}>취소</button>
        </>
      ) : (
        <>
          <span className={todo.completed ? "completed" : ""}>
            {todo.title}
          </span>
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={() => onDelete(todo.id)}>삭제</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;