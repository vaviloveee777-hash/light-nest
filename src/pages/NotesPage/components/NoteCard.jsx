import {Star, X, Pin, Archive} from "lucide-react";

const NoteCard = (props) => {
  const {
    note,
    onToggleFavorite,
    onDelete,
    onTogglePinned,
    onToggleArchived,
  } = props

  return (
    <div className="note-card">
      <div className="note-card__header">
        <h3 className="note-card__title">
          {note.title}
        </h3>

        <div className="note-card__top-actions">
          <button
            className={`note-card__button-pin ${note.isPinned
              ? 'note-card__button-pin--active' : ''}`}
            onClick={() => onTogglePinned(note.id)}
          >
            <Pin size={16} />
          </button>

          <button
            className={`note-card__button-star ${note.isFavorite
              ? 'note-card__button-star--active' : ''}`}
            onClick={() => onToggleFavorite(note.id)}
          >
            <Star size={20} />
          </button>
        </div>
      </div>

      <p
        className="note-card__content"
      >
        {note.content}
      </p>

      <div className="note-card__footer">
  <span className="note-card__date">
    {note.date}
  </span>

        <div className="note-card__bottom-actions">
          <button
            className={`note-card__button-archived ${note.isArchived
              ? 'note-card__button-archived--active' : ''}`}
            onClick={() => onToggleArchived(note.id)}
          >
            <Archive size={16} />
          </button>

          <button
            className="note-card__delete"
            onClick={() => onDelete(note.id)}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteCard