import IconBadge from "@/components/shared/IconBadge/index.js";
import BurgerButton from "@/components/Header/components/BurgerButton/index.js";
import { Moon, Sun, ChevronDown } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme.js'

const HeaderActions = (props) => {
  const {
    isOpen,
    setOpen,
  } = props

  const user = {
    name: "Aleksey"
  }

  const { theme, toggleTheme } = useTheme()

  return (
    <div className="header__actions">
      <button
        type="button"
        className="header__theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <IconBadge
          icon={theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          className="icon-badge--sun-moon"
        />
      </button>
      <span className="header__divider" />
      <button className="header__user" type="button">
        <span className="header__avatar">{user.name[0]}</span>
        <span className="header__user-name">{user.name}</span>
        <ChevronDown size={16} />
      </button>
      <div className="header__burger-button">
        <BurgerButton
          isOpen={isOpen}
          onClick={() => setOpen(!isOpen)}
        />
      </div>
    </div>
  )
}

export default HeaderActions