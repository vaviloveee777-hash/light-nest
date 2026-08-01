import './SummaryCard.scss'
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
    <button className="summary-card__button">
      {button}
      <MoveRight size={20} />
    </button>
  </div>
  )
}

export default SummaryCard