
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onUpdate, onDelete, busyId }) {
  if (todos.length === 0) {
    return (
      <div className="empty-message">
        아직 등록된 할 일이 없습니다.
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
          busy={busyId === todo.id}
        />
      ))}
    </ul>
  );
}

export default TodoList;
