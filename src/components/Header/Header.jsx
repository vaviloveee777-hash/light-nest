import { Sun, User, SunMoon} from 'lucide-react'
import './Header.scss'


const NAV_ITEMS = [
  {id: 'home', label: 'Home' },
  {id: 'todo', label: 'Todo' },
  {id: 'notes', label: 'Notes' },
  {id: 'weather', label: 'Weather' },
]

function Header (props) {
  const {
    activeTab,
    onTabChange,
  } = props

  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__icon-badge">
          <Sun size={20} />
        </div>
      <div className="header__logo">
        <span className="header__title">Light Nest</span>
        <span className="header__tagline">YOUR DAY, ILLUMINATED.</span>
      </div>
      </div>
      <nav className="header__nav">
        {NAV_ITEMS.map((item) => {
         return (
           <button
             key={item.id}
             onClick={() => onTabChange(item.id)}
             className={`header__nav-button ${item.id === activeTab ? 'header__nav-button--active' : ''}`}
             >
             {item.label}
           </button>
         )
          })}
      </nav>
      <div className="header__actions">
        <div className="header__icon-badge header__icon-SunMoon">
          <SunMoon size={20} />
        </div>
        <div className="header__icon-badge header__icon-User">
          <User size={20} />
        </div>
      </div>
    </header>
  )
}

export default Header