import { Trash } from "lucide-react";

const NotesToolbar = (props) => {
  const {
    activeFilter,
    setActiveFilter,
    onClearAll,
  } = props

  return (
    <div className="notes-page__tabs">
      <button
        className={`notes-page__tab ${activeFilter === 'all'
          ? 'notes-page__tab--active' : ''}`}
        onClick={() => setActiveFilter('all')}
      >
        All
      </button>

      <button
        className={`notes-page__tab ${activeFilter === 'pinned'
          ? 'notes-page__tab--active' : ''}`}
        onClick={() => setActiveFilter('pinned')}
      >
        Pinned
      </button>

      <button
        className={`notes-page__tab ${activeFilter === 'recent' 
          ? 'notes-page__tab--active' : ''}`}
        onClick={() => setActiveFilter('recent')}
      >
        Recent
      </button>

      <button
        className={`notes-page__tab ${activeFilter === 'archived'
          ? 'notes-page__tab--active' : ''}`}
        onClick={() => setActiveFilter('archived')}
      >
        Archived
      </button>

      <button
        className="notes-page__delete-all"
        onClick={onClearAll}
      >
        <Trash size={14} />
        Delete All
      </button>
    </div>
  )
}

export default NotesToolbar