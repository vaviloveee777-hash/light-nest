import './SummaryCard.scss'
import { NavLink } from 'react-router-dom'
import IconBadge from "@/components/shared/IconBadge/index.js";
import {MoveRight} from "lucide-react";

const SummaryCard = (props) => {
  const {
    icon,
    title,
    number,
    subtitle,
    button,
    to,
  } = props

  return (
  <div className="summary-card">
    <div className="summary-card__header">
      <IconBadge icon={icon} />
      <p>{title}</p>
    </div>
    <div className="summary-card__number">
      {number}
    </div>
    <div className="summary-card__subtitle">
      {subtitle}
    </div>
    <NavLink
      to={to}
       className="summary-card__button">
      {button}
      <MoveRight size={20} />
    </NavLink>
  </div>
  )
}

export default SummaryCard