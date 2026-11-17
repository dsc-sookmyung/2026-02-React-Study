import { useState } from 'react';

// 할 일 하나를 화면에 표시하는 컴포넌트
function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부
  const [editTitle, setEditTitle] = useState(todo.title); // 수정할 제목

  // 수정 내용 저장
  const handleEdit = () => {
    if (!editTitle.trim()) {
      alert('할 일 제목을 입력해 주세요!');
      return;
    }

    editTodo(todo.id, editTitle);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {/* 수정 모드일 때 입력창 표시 */}
      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
      ) : (
        /* 할 일 제목: 완료 상태에 따라 밑줄 적용 */
        <span className={todo.completed ? 'completed' : ''}>
          {todo.title}
        </span>
      )}

      {/* 완료 상태 변경, 수정 및 삭제 버튼 */}
      <div className="todo-actions">
        <span
          className="todo-status"
          onClick={() => toggleTodo(todo.id, todo.completed)}
        >
          {todo.completed ? '완료' : '진행 중'}
        </span>

        {isEditing ? (
          <>
              <button
              className="edit-save-button"
              onClick={handleEdit}
              >
              저장
              </button>

              <button
              className="edit-cancel-button"
              onClick={() => {
                  setEditTitle(todo.title);
                  setIsEditing(false);
              }}
              >
              취소
              </button>
          </>
          ) : (
          <button
              className="edit-button"
              onClick={() => setIsEditing(true)}
          >
              수정
          </button>
        )}

        <button
          className="delete-button"
          onClick={() => deleteTodo(todo.id)}
        >
          삭제
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
