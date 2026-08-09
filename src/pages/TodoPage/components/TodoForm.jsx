const TodoForm = (props) => {
  const {
    newTitle,
    setTitle,
    addTask,
    error,
  } = props

  return (
    <>
      <div className="todo-page__form">
        <input
          type="text"
          className={`todo-page__input ${error
            ? 'todo-page__input--error' : ''}`}
          placeholder="Add a new task..."
          value={newTitle}
          onChange={
            (event) =>
              setTitle(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              addTask()
            }
          }}
        />
        <button
          className="todo-page__add-button"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      {error && <p className="todo-page__error">{error}</p>}
    </>
  )
}



export default TodoForm