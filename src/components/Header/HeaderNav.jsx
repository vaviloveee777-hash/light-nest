

const NAV_ITEMS = [
  {id: 'home', label: 'Home' },
  {id: 'todo', label: 'Todo' },
  {id: 'notes', label: 'Notes' },
  {id: 'weather', label: 'Weather' },
]

const HeaderNav = (props) => {
  const {
    activeTab,
    onTabChange,
  }= props

  return (
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
  )
}

export default HeaderNav