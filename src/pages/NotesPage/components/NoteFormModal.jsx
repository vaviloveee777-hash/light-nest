import { Star, X } from 'lucide-react';
import {useState} from "react";

const NoteFormModal = (props) => {
  const {
    onSave,
    onClose,
  } = props

  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const [newIsFavorite, setNewIsFavorite] = useState(false)

  return (
    <div className="note-form__modal">
      <div className="note-form__modal-title">
      <input
        type="text"
        className="note-form__modal-input"
        placeholder="Write a title..."
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
        />
      </div>
      <div className="note-form__modal-content">
        <textarea
          className="note-form__modal-input"
          placeholder="Write your note..."
          value={newContent}
          onChange={(event) => setNewContent(event.target.value)}
          />
      </div>
      <div className="note-form__modal-button-star">
        <button
          className={`note-form__modal-button-star ${newIsFavorite 
            ? 'note-form__modal-button-star--active' : ''}`}
          onClick={() => setNewIsFavorite(!newIsFavorite)}
        >
          <Star size={20} />
        </button>
      </div>
      <button className="note-form__modal-button-save"
      onClick={() => onSave({
        title: newTitle,
        content: newContent,
        isFavorite: newIsFavorite })}
      >
        Сохранить
      </button>
      <button className="note-form__modal-button-close"
      onClick={onClose}
      >
        <X size={16} />
      </button>
    </div>
  )
}

export default NoteFormModal
