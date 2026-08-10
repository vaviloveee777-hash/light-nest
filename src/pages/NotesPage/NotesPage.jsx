import { useState, useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage.js";
import NotesHero from "@/pages/NotesPage/components/NotesHero.jsx"
import NoteFormModal from "@/pages/NotesPage/components/NoteFormModal.jsx"
import NotesList from "@/pages/NotesPage/components/NotesList.jsx"


const NotesPage = () => {

  const {save, load} = useLocalStorage('notes')

  const [notes, setNotes] = useState(() => load() || [])

  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    save(notes)
  }, [notes])

  const addNote = (noteData) => {
    if (!noteData.title.trim()) {
      return
    }
    const newNotes = {
      id: Date.now(),
      title: noteData.title,
      content: noteData.content,
      isFavorite: noteData.isFavorite,
      date: new Date().toLocaleDateString()
    }
    setNotes([...notes, newNotes])
    setModalOpen(false)
  }

  const toggleFavorite = (id) => {
    setNotes(notes.map((note) => note.id === id
      ? { ...note, isFavorite: !note.isFavorite } : note))
  }

    return (
      <div className="notes-page">

        <NotesHero
          onOpenForm={() => setModalOpen(true)}
        />
        {isModalOpen && (
          <NoteFormModal onSave={addNote} onClose={() => setModalOpen(false)} />
        )}
        <NotesList
          notes={notes}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    )
}

export default NotesPage