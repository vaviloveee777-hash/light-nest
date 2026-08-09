import useLocalStorage from "@/hooks/useLocalStorage.js";
import TodoHero from './components/TodoHero.jsx'
import TodoForm from './components/TodoForm.jsx'
import TodoToolbar from './components/TodoToolbar.jsx'
import TodoList from './components/TodoList.jsx'
import TodoFooterRow from './components/TodoFooterRow.jsx'
import './TodoPage.scss'
import { useState, useRef, useEffect } from "react";


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
      <TodoHero />

      <div className="todo-page__main">
        <TodoForm
          newTitle={newTodoTitle}
          setTitle={setTodoTitle}
          addTask={addTodo}
          error={titleError}
        />

          <TodoToolbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />

        <TodoFooterRow
          doneCount={doneCount}
          todos={todos}
          onClearAll={clearAllTodos}
          onShowIncomplete={scrollToIncompleteTask}
        />

          <TodoList
            filteredTodos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            firstIncompleteTask={firstIncompleteTask}
            incompleteTaskRef={incompleteTaskRef}
          />
      </div>
    </div>
  )
}

export default TodoPage
