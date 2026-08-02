import './TodoPage.scss'
import {useState} from "react";
import { X } from 'lucide-react'

const TodoPage = () => {

  const [todos, setTodos] = useState([
    { id: 1, title: "купить молоко", isDone: false },
    { id: 2, title: " не купил", isDone: true },
    { id: 3, title: "забыл", isDone: true },])

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
    setTodos(
      todos.filter(todo =>
      todo.id !== id)
    )
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id
       ? { ...todo, isDone: !todo.isDone } : todo)
    )
  }

  const [searchQuery, setSearchQuery] = useState('')

  const filteredTodos =
    todos.filter(todo =>
      todo.title.includes(searchQuery)
    )

  const doneCount  =
    todos.filter(todo =>
    todo.isDone).length

  const remainingCount   =
    todos.filter(todo =>
      !todo.isDone).length

  const titleError =
    (newTodoTitle !== '' && newTodoTitle.trim() === '')
      ? "The task cannot be empty" : ''

  return (
    <div className="todo__main-section">
      <input
        type="text"
        className={`todo__input ${titleError ? 'todo__input--error' : ''}`}
        value={newTodoTitle}
        onChange={(event) =>
          setTodoTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(event) =>
          setSearchQuery(event.target.value)}
      />
      {titleError && <p>{titleError}</p>}
      <button onClick={addTodo}>
        Add Task
      </button>
      <p>
        Done {doneCount}
        From {todos.length}
      </p>
      <div className="todo__list">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="todo__item">
            <input
              type="checkbox"
              className="todo__checkbox"
              checked={todo.isDone}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className="todo__title">
              {todo.title}
            </span>
            <button className="todo__delete"
                    onClick={() =>
              deleteTodo(todo.id)}>
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
  }

export default TodoPage
