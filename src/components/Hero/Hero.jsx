import './Hero.scss'
import {MoveRight} from 'lucide-react'

const Hero = () => {
  const user = {
    name: "Aleksey"
  }

  return (
    <div className="hero">
      <h1 className="hero__title">Welcome back, <br /> {user.name}.</h1>
      <p className="hero__subtitle">Everything you need, <br /> in one place.</p>
      <button className="hero__button">
        Get Started
          <MoveRight size={20} />
      </button>
    </div>
  )
}

export default Hero