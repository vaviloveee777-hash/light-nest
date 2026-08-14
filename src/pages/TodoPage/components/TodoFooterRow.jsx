import { Trash2 } from 'lucide-react'

const TodoFooterRow = (props) => {
  const {
    doneCount,
    todos,
    onClearAll ,
    onShowIncomplete,
  } = props

  return (

    <div className="todo-page__footer-row">
      <p className="todo-page__counter">
        Done {doneCount} from {todos.length}
      </p>
      <div className="todo-page__footer-buttons">
        <button
          className="todo-page__small-button"
          onClick={onShowIncomplete}>
          Show first incomplete task
        </button>
        {todos.length > 0 && (
          <button
            className="todo-page__small-button todo-page__small-button--danger"
            onClick={onClearAll}
          >
            <Trash2 size={13} />
            Delete all
          </button>
        )}
      </div>
    </div>
  )
}

export default TodoFooterRow