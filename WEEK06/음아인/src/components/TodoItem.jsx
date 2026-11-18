import { useState } from 'react';

function TodoItem({ todo, saving, onToggle, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');

  async function save(event) {
    event.preventDefault();
    if (!draft.trim() || saving) return;
    if (await onEdit(draft.trim())) setEditing(false);
  }

  return (
    <li>
      {editing ? (
        <form className="edit-form" onSubmit={save}>
          <input aria-label="할 일 수정" value={draft} autoFocus disabled={saving}
            onChange={(event) => setDraft(event.target.value)} />
          <button disabled={saving || !draft.trim()}>저장</button>
          <button type="button" disabled={saving} onClick={() => setEditing(false)}>취소</button>
        </form>
      ) : (
        <>
          <label className={todo.completed ? 'completed' : ''}>
            <input type="checkbox" checked={todo.completed} disabled={saving} onChange={onToggle} />
            {todo.title}
          </label>
          <button disabled={saving} onClick={() => {
            setDraft(todo.title);
            setEditing(true);
          }}>수정</button>
          <button disabled={saving} onClick={onDelete}>삭제</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
