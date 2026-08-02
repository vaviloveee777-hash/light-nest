import Header from '@/components/Header/Header.jsx'
import Router from './routing'
import Footer from '@/components/Footer/Footer.jsx'
import {BrowserRouter} from "react-router-dom";
import './App.scss'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="app__main">
        <Router />
      </main>
      <Footer />

    </BrowserRouter>
  )
}

export default App