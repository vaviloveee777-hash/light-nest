import TodoItem from "@/pages/TodoPage/components/TodoItem.jsx";


const TodoList = (props) => {
  const {
    filteredTodos,
    onToggle,
    onDelete,
    firstIncompleteTask,
    incompleteTaskRef,
  } = props

return (
<div className="todo-page__list">
  {filteredTodos.length === 0 && (
    <p className="todo-page__empty">
      Not a single task...
    </p>
  )}
  {filteredTodos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      ref={todo.id === firstIncompleteTask?.id ? incompleteTaskRef : null}
      onToggle={onToggle}
      onDelete={onDelete}
    />
  ))}
</div>
)
}

export default TodoList