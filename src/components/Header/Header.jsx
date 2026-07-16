import { Sun } from 'lucide-react'
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
        <span className="header__tagline">Your day, illuminated.</span>
      </div>
      </div>
      <nav>
        {NAV_ITEMS.map((item) => {
         return (
           <button
             key={item.id}
             onClick={() => onTabChange(item.id)}
             className={item.id === activeTab ? 'active' : ''}
             >
             {item.label}
           </button>
         )
          })}
      </nav>
    </header>
  )
}

export default Header