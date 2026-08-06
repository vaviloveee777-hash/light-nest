import useLocalStorage from "@/hooks/useLocalStorage.js";
import './TodoPage.scss'
import { useState, useRef, useEffect } from "react";
import { X, Search, Trash2 } from 'lucide-react'

const TodoPage = () => {

  const { save, load } = useLocalStorage('todos')

  const [todos, setTodos] = useState(() => load() || [])

  const [newTodoTitle, setTodoTitle] = useState('')

  const addTodo = () => {
    if (!newTodoTitle.trim()) {
      return
    }
    const newTodo =
      { id: Date.now(), title: newTodoTitle, isDone: false }
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
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredTodos = todos
    .filter(todo => todo.title.includes(searchQuery))
    .filter(todo => {
      if (statusFilter === 'active') return !todo.isDone
      if (statusFilter === 'completed') return todo.isDone
      return true
    })

  useEffect(() => {
    save(todos)
  }, [todos])

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
    incompleteTaskRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const clearAllTodos = () => {
    setTodos([])
  }

  return (
    <div className="todo-page">
      <div className="todo-page__hero">
        <h1 className="todo-page__title">My ToDo list</h1>
        <p className="todo-page__subtitle">
          Order in affairs is the result in life
        </p>
      </div>

      <div className="todo-page__main">
        <div className="todo-page__form">
          <input
            type="text"
            className={`todo-page__input ${titleError
              ? 'todo-page__input--error' : ''}`}
            placeholder="Add a new task..."
            value={newTodoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                addTodo()
              }
            }}
          />
          <button
            className="todo-page__add-button"
            onClick={addTodo}>
            Add Task
          </button>
        </div>
        {titleError && <p className="todo-page__error">{titleError}</p>}

        <div className="todo-page__toolbar">
          <div className="todo-page__search">
            <Search size={16} className="todo-page__search-icon" />
            <input
              type="text"
              className="todo-page__input todo-page__input--search"
              placeholder="Search task..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>

          <div className="todo-page__tabs">
            <button
              className={`todo-page__tab ${statusFilter === 'all'
                ? 'todo-page__tab--active' : ''}`}
              onClick={() => setStatusFilter('all')}
            >
              All
            </button>
            <button
              className={`todo-page__tab ${statusFilter === 'active'
                ? 'todo-page__tab--active' : ''}`}
              onClick={() => setStatusFilter('active')}
            >
              Active
            </button>
            <button
              className={`todo-page__tab ${statusFilter === 'completed'
                ? 'todo-page__tab--active' : ''}`}
              onClick={() => setStatusFilter('completed')}
            >
              Completed
            </button>
          </div>
        </div>
        <div className="todo-page__footer-row">
          <p className="todo-page__counter">
            Done {doneCount} from {todos.length}
          </p>
          <div className="todo-page__footer-buttons">
            <button
              className="todo-page__small-button"
              onClick={scrollToIncompleteTask}>
              Show first incomplete task
            </button>
            {todos.length > 0 && (
              <button
                className="todo-page__small-button
                 todo-page__small-button--danger"
                onClick={clearAllTodos}>
                <Trash2 size={13} />
                Delete all
              </button>
            )}
          </div>
        </div>

        <div className="todo-page__list">
          {filteredTodos.length === 0 && (
            <p
              className="todo-page__empty">
              Not a single task...
            </p>
          )}
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="todo-page__item"
              ref={todo.id === firstIncompleteTask?.id ? incompleteTaskRef : null}
            >
              <input
                type="checkbox"
                className="todo-page__checkbox"
                checked={todo.isDone}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                className="todo-page__item-title">
                {todo.title}
              </span>
              <button className="todo-page__delete" onClick={() => deleteTodo(todo.id)}>
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
