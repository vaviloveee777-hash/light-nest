import Header from '@/components/Header/Header.jsx'
import Router from './routing'
import Footer from '@/components/Footer/Footer.jsx'
import Hero from '@/components/Hero/Hero.jsx'
import {BrowserRouter} from "react-router-dom";
import './App.scss'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <main>
        <Router />
      </main>
      <Footer />

    </BrowserRouter>
  )
}

export default App