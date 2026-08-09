import { X } from 'lucide-react'

const TodoItem = (props) => {
  const {
    todo,
    onToggle,
    onDelete,
    ref,
  } = props

  return (
    <div className="todo-page__item" ref={ref}>
      <input
        type="checkbox"
        className="todo-page__checkbox"
        checked={todo.isDone}
        onChange={() => onToggle(todo.id)}
      />
      <span className="todo-page__item-title">
    {todo.title}
  </span>
      <button className="todo-page__delete"
              onClick={() => onDelete(todo.id)}>
        <X size={16} />
      </button>
    </div>
  )
}



export default TodoItem