import IconBadge from "@/components/shared/IconBadge/index.js";
import BurgerButton from "@/components/Header/components/BurgerButton/index.js";
import { SunMoon, User } from 'lucide-react'

const HeaderActions = (props) => {
  const {
    isOpen,
    setOpen,
  } = props

  return (

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
  )
}

export default HeaderActions