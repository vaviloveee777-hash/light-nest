import { useState } from 'react'
import Header from './components/Header/Header.jsx'

function App() {
  const [activeTab , setActiveTab] = useState('home')

  return (
    <>
      <Header activeTab={activeTab} onTabChange={setActiveTab}/>
    </>
  )
}

export default App
