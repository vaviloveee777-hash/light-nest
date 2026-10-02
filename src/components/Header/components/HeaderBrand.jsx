import IconBadge from "@/components/shared/IconBadge/index.js";
import HeaderNav from "@/components/Header/components/HeaderNav.jsx"
import { SunDim } from 'lucide-react'


const HeaderBrand = (props) => {
  const {
    isOpen,
  } = props

  return (

    <div className="header__brand">
      <IconBadge
        icon={<SunDim size={24} strokeWidth={1.5} />}
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
  )
}

export default HeaderBrand