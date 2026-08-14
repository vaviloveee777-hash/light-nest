import { Star, X } from 'lucide-react';
import { useState } from "react";

const NoteFormModal = (props) => {
  const {
    onSave,
    onClose,
  } = props

  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const [newIsFavorite, setNewIsFavorite] = useState(false)
  const titleError =
    (newTitle !== '' && newTitle.trim() === '')
      ? "Title cannot be empty" : ''

  return (
    <div className="note-form__overlay" onClick={onClose}>

      <div className="note-form__modal" onClick={(event) => event.stopPropagation()}>
        <button className="note-form__modal-button-close" onClick={onClose}>
          <X size={16} />
        </button>

        <h2
          className="note-form__modal-heading">
          New Note
        </h2>

        <div className="note-form__modal-title">
          <input
            type="text"
            className={`note-form__modal-input ${titleError 
              ? 'note-form__modal-input--error' : ''}`}
            placeholder="Write a title..."
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                onSave({
                  title: newTitle,
                  content: newContent,
                  isFavorite: newIsFavorite
                })
              }
            }}
          />
          {titleError && <p className="note-form__error">{titleError}</p>}
        </div>

        <div className="note-form__modal-content">
          <textarea
            className="note-form__modal-input"
            placeholder="Write your note..."
            value={newContent}
            onChange={(event) => setNewContent(event.target.value)}
          />
        </div>

        <div className="note-form__modal-footer">
          <button
            className={`note-form__modal-button-star ${newIsFavorite
              ? 'note-form__modal-button-star--active' : ''}`}
            onClick={() => setNewIsFavorite(!newIsFavorite)}
          >
            <Star size={20} />
          </button>

          <button
            className="note-form__modal-button-save"
            onClick={() => onSave({
              title: newTitle,
              content: newContent,
              isFavorite: newIsFavorite
            })}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteFormModal