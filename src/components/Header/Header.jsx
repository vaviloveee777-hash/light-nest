import {useState} from "react";
import { Sun, User, SunMoon} from 'lucide-react'
import './Header.scss'
import BurgerButton from "@/components/Header/BurgerButton/BurgerButton.jsx";
import HeaderNav from "@/components/Header/HeaderNav.jsx";
import IconBadge from "@/components/shared/IconBadge/IconBadge.jsx";

function Header (props) {
  const {} = props

  const [isOpen, setOpen] = useState(false)


  return (
    <header className="header">
      <div className="header__brand">
        <IconBadge
          icon={<Sun size={20} />}
          className="icon-badge--sun"
        />
        <div className="header__logo">
          <span className="header__title">Light Nest</span>
          <span className="header__tagline">YOUR DAY, ILLUMINATED.</span>
        </div>
        <HeaderNav
          isOpen={isOpen}
        />
      </div>
      <div className="header__actions">
        <IconBadge
          icon={<SunMoon size={20} />}
          className="icon-badge--sun-moon"
        />
        <IconBadge
          icon={<User size={20} />}
          className="icon-badge--user"
        />
        <div className="header__burger-button">
          <BurgerButton
            isOpen={isOpen}
            onClick={() => setOpen(!isOpen)}
          />
        </div>
      </div>
    </header>
  )
}

export default Header