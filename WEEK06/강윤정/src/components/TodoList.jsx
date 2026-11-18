import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onEdit, onDelete, busy }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
          busy={busy}
        />
      ))}
    </ul>
  );
}

export default TodoList;
