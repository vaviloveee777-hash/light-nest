import HomePage from '@/pages/HomePage/HomePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import TodoPage from "@/pages/TodoPage/TodoPage.jsx";
import NotesPage from "@/pages/NotesPage/NotesPage.jsx";

function Router() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage /> } />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/weather" element={<div>Weather</div>} />
      </Routes>
  )
}

export default Router