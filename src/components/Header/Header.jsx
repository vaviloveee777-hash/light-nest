import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import HeaderBrand from "@/components/Header/components/HeaderBrand.jsx";
import HeaderActions from "@/components/Header/components/HeaderActions.jsx";
import './Header.scss'


const Header = (props) => {
  const {} = props

  const { pathname } = useLocation()
  const glassRoutes = ['/', '/todo']
  const isGlass = glassRoutes.includes(pathname)

  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])



  return (
    <header className={`header ${isGlass ? 'header--glass' : ''}`}>
      <HeaderBrand isOpen={isOpen} />
      <HeaderActions isOpen={isOpen} setOpen={setOpen} />
    </header>
  )
}

export default Header