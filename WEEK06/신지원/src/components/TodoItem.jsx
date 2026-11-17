// 할 일 하나를 화면에 표시하는 컴포넌트
function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      {/* 할 일 제목: 완료 상태에 따라 밑줄 적용 */}
      <span
        className={todo.completed ? 'completed' : ''}
      >
        {todo.title}
      </span>

      {/* 완료 상태 변경 및 삭제 버튼 */}
      <div className="todo-actions">
        <span
          className="todo-status"
          onClick={() => toggleTodo(todo.id, todo.completed)}
        >
          {todo.completed ? '완료' : '진행 중'}
        </span>

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
