import './TodoPage.scss'
import { useState, useRef } from "react";
import { X, Search, Trash2 } from 'lucide-react'

const TodoPage = () => {

  const [todos, setTodos] = useState([
    { id: 1, title: "купить молоко", isDone: false },
    { id: 2, title: "не купил", isDone: true },
    { id: 3, title: "забыл", isDone: true },
  ])

  const [newTodoTitle, setTodoTitle] = useState('')

  const addTodo = () => {
    if (!newTodoTitle.trim()) {
      return
    }
    const newTodo = { id: Date.now(), title: newTodoTitle, isDone: false }
    setTodos([...todos, newTodo])
    setTodoTitle('')
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id
        ? { ...todo, isDone: !todo.isDone } : todo)
    )
  }

  const [searchQuery, setSearchQuery] = useState('')

  const filteredTodos = todos.filter(todo =>
    todo.title.includes(searchQuery)
  )

  const doneCount = todos.filter(todo => todo.isDone).length

  const titleError =
    (newTodoTitle !== '' && newTodoTitle.trim() === '')
      ? "The task cannot be empty" : ''

  const firstIncompleteTask = todos.find(todo => !todo.isDone)

  const incompleteTaskRef = useRef(null)

  const scrollToIncompleteTask = () => {
    if (!incompleteTaskRef.current) {
      return
    }
    incompleteTaskRef.current.scrollIntoView(
      { behavior: 'smooth', block: 'center' })
  }

  const clearAllTodos = () => {
    setTodos([])
  }

  return (
    <div className="todo__main-section">
      <div className="todo__card">
        <h1 className="todo__heading">To Do List</h1>

        <div className="todo__form">
          <input
            type="text"
            className={`todo__input ${titleError 
              ? 'todo__input--error' : ''}`}
            placeholder="New task title"
            value={newTodoTitle}
            onChange={(event) =>
              setTodoTitle(event.target.value)}
            onKeyDown={
            (event) => {
              if (event.key === 'Enter') {
                addTodo()
              }
            }}
          />
          <button
            className="todo__add-button"
            onClick={addTodo}>
            Add
          </button>
        </div>
        {titleError && <p className="todo__error">
          {titleError}
        </p>
        }

        <div className="todo__search">
          <Search size={16} className="todo__search-icon" />
          <input
            type="text"
            className="todo__input todo__input--search"
            placeholder="Search task"
            value={searchQuery}
            onChange={(event) =>
              setSearchQuery(event.target.value)}
          />
        </div>

        <p className="todo__counter">
          Done {doneCount} from {todos.length}
        </p>

        <div className="todo__actions">
          <button className="todo__action-button"
                  onClick={scrollToIncompleteTask}>
            Show first
            <br className="todo__break" />
            incomplete task
          </button>
          {todos.length > 0 && (
            <button className="todo__action-button todo__action-button--danger"
                    onClick={clearAllTodos}>
              <Trash2 size={14} />
              Delete all
            </button>
          )}
        </div>

        <div className="todo__list">
          {filteredTodos.length === 0 && (
            <p className="todo__empty">There are no tasks yet</p>
          )}
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="todo__item"
              ref={todo.id === firstIncompleteTask?.id
                ? incompleteTaskRef : null}
            >
              <input
                type="checkbox"
                className="todo__checkbox"
                checked={todo.isDone}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className="todo__title">{todo.title}</span>
              <button className="todo__delete" onClick={() => deleteTodo(todo.id)}>
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodoPage