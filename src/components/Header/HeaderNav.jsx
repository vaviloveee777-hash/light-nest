import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  {id: 'home', label: 'Home' },
  {id: 'todo', label: 'Todo' },
  {id: 'notes', label: 'Notes' },
  {id: 'weather', label: 'Weather' },
]

const HeaderNav = () => {

  return (
    <nav className="header__nav">
      {NAV_ITEMS.map((item) => {
        return (
          <NavLink
            key={item.id}
            to={item.id === 'home' ? '/' : `/${item.id}`}
            className={({ isActive }) => `header__nav-button ${isActive ? 'header__nav-button--active' : ''}`}

          >
            {item.label}
          </NavLink>
        )
      })}
    </nav>
  )
}

export default HeaderNav