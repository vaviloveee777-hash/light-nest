import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Router() {
  return (
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/todo" element={<div>Todo</div>} />
        <Route path="/notes" element={<div>Notes</div>} />
        <Route path="/weather" element={<div>Weather</div>} />
      </Routes>
  )
}

export default Router