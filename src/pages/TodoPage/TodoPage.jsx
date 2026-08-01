import './TodoPage.scss'
import {useState} from "react";

const TodoPage = () => {

  const [todos, setTodos] = useState([
    { id: 1, title: "купить молоко", isDone: false },
    { id: 2, title: " не купил", isDone: true },
    { id: 3, title: "забыл", isDone: true },])

  const [newTodoTitle, setTodoTitle] = useState('')

  const addTodo = () => {
    const newTodo = { id: Date.now(), title: newTodoTitle, isDone: false }
    setTodos([...todos, newTodo])
    setTodoTitle('')
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => todo.id ===id
       ? { ...todo, isDone: !todo.isDone } : todo)
    )
  }

  return (
    <div className="todo__main-section">
      <input
        type="text"
        value={newTodoTitle}
        onChange={(event) => setTodoTitle(event.target.value)} />
      <button onClick={addTodo}> Add Task </button>
      <div className="todo__list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo__item">
            <input
              type="checkbox"
              className="todo__checkbox"
              checked={todo.isDone}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className="todo__title">{todo.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
  }

export default TodoPage
