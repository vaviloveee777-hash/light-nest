import { Search } from 'lucide-react'

const TodoToolbar = (props) => {
  const {
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
  } = props

  return (
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
            onClick={() => setStatusFilter('all')
          }
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
            className={
            `todo-page__tab ${statusFilter === 'completed' 
              ? 'todo-page__tab--active' : ''}`}
            onClick={() => setStatusFilter('completed')
          }
          >
            Completed
          </button>
        </div>
      </div>
  )
}



export default TodoToolbar