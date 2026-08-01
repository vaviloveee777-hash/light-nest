import HomePage from '@/pages/HomePage/HomePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Router() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<div>Todo</div>} />
        <Route path="/notes" element={<div>Notes</div>} />
        <Route path="/weather" element={<div>Weather</div>} />
      </Routes>
  )
}

export default Router