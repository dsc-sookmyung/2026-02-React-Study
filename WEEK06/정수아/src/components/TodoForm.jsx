
function TodoForm({ input, setInput, onAdd, submitting }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    onAdd(input.trim());
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="새로운 할 일을 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="add-button"
        disabled={submitting || !input.trim()}
      >
        {submitting ? "추가 중..." : "추가"}
      </button>
    </form>
  );
}

export default TodoForm;
