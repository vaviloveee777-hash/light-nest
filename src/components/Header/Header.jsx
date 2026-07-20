import {useState} from "react";
import { Sun, User, SunMoon} from 'lucide-react'
import './Header.scss'
import BurgerButton from "@/components/Header/BurgerButton/BurgerButton.jsx";
import HeaderNav from "@/components/Header/HeaderNav.jsx";

function Header (props) {
  const {

  } = props

  const [isOpen, setOpen] = useState(false)



  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__icon-badge header__icon-sun">
          <Sun size={20} />
        </div>
      <div className="header__logo">
        <span className="header__title">Light Nest</span>
        <span className="header__tagline">YOUR DAY, ILLUMINATED.</span>
      </div>
      </div>
      <div className="header__actions">
        <div className="header__icon-badge header__icon-sun-moon">
          <SunMoon size={20} />
        </div>
        <div className="header__icon-badge header__icon-user">
          <User size={20} />
        </div>
        <div className="header__burger-button">
          <BurgerButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
        </div>
      </div>
      <HeaderNav
        isOpen={isOpen}
      />
    </header>
  )
}

export default Header