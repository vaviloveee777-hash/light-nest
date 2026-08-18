import HomePage from '@/pages/HomePage/HomePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import TodoPage from "@/pages/TodoPage/TodoPage.jsx";
import NotesPage from "@/pages/NotesPage/NotesPage.jsx";
import WeatherPage from "@/pages/WeatherPage/WeatherPage.jsx";

function Router() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage /> } />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/weather" element={<WeatherPage /> } />
      </Routes>
  )
}

export default Router