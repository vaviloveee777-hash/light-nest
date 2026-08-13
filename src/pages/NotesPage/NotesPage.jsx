import { useState, useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage.js";
import NotesHero from "@/pages/NotesPage/components/NotesHero.jsx"
import NoteFormModal from "@/pages/NotesPage/components/NoteFormModal.jsx"
import NotesList from "@/pages/NotesPage/components/NotesList.jsx"
import NotesToolbar from "@/pages/NotesPage/components/NotesToolbar.jsx"
import './NotesPage.scss'


const NotesPage = () => {

  const {save, load} = useLocalStorage('notes')

  const [notes, setNotes] = useState(() => load() || [])

  const [isModalOpen, setModalOpen] = useState(false)

  const [activeFilter, setActiveFilter] = useState('all')

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
      date: new Date().toLocaleDateString(),
      isPinned: false,
      isArchived: false,
    }
    setNotes([...notes, newNotes])
    setModalOpen(false)
  }

  const toggleFavorite = (id) => {
    setNotes(notes.map((note) => note.id === id
      ? { ...note, isFavorite: !note.isFavorite } : note))
  }

  const togglePinned = (id) => {
    setNotes(notes.map((note) => note.id === id
      ? { ...note, isPinned: !note.isPinned } : note))
  }

  const toggleArchived = (id) => {
    setNotes(notes.map((note) => note.id === id
      ? { ...note, isArchived: !note.isArchived } : note))
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const filteredNotes = notes
    .filter(note => {
      if (activeFilter === 'all') return true
      if (activeFilter  === 'pinned') return note.isPinned === true
      if (activeFilter  === 'archived') return note.isArchived === true
      if (activeFilter === 'recent') return (Date.now() - note.id) < (3 * 24 * 60 * 60 * 1000)
      return true
    })

    return (
      <div className="notes-page">

        <NotesHero
          onOpenForm={() => setModalOpen(true)}
        />
        {isModalOpen && (
          <NoteFormModal onSave={addNote} onClose={() => setModalOpen(false)} />
        )}
        <div className="notes-page__main">
        <NotesToolbar
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <NotesList
          notes={filteredNotes}
          onDelete={deleteNote}
          onToggleFavorite={toggleFavorite}
          onTogglePinned={togglePinned}
          onToggleArchived={toggleArchived}
        />
      </div>
      </div>
    )
}

export default NotesPage