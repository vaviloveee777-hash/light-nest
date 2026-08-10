import NoteCard from "@/pages/NotesPage/components/NoteCard.jsx";

const NotesList = (props) => {
  const {
    notes = [],
    onToggleFavorite
  } = props

  return (
    <div className="notes-page__list">
      {notes.length === 0 && (
        <p className="notes-page__empty">
          No notes yet...
        </p>
      )}
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onToggleFavorite={onToggleFavorite}
        />
        ))}
    </div>
  )
}

export default NotesList