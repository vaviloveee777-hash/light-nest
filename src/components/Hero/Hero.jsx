import './Hero.scss'
import {MoveRight} from 'lucide-react'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

const Hero = () => {
  const user = {
    name: "Aleksey"
  }
  const greeting = getGreeting()

  return (
    <div className="hero">
      <p className="hero__greeting">{greeting},</p>
      <h1 className="hero__title">{user.name}.</h1>
      <p className="hero__subtitle">Everything you need, <br /> in one place.</p>
      <button className="hero__button">
        Open dashboard
        <MoveRight size={20} />
      </button>
    </div>
  )
}

export default Hero