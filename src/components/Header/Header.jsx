import { Sun, User, SunMoon} from 'lucide-react'
import './Header.scss'
import HeaderNav from "@/components/Header/HeaderNav.jsx";

function Header (props) {
  const {
    activeTab,
    onTabChange,
  } = props

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
        <div className="header__icon-badge header__icon-SunMoon">
          <SunMoon size={20} />
        </div>
        <div className="header__icon-badge header__icon-User">
          <User size={20} />
        </div>
      </div>
      <HeaderNav
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
    </header>
  )
}

export default Header