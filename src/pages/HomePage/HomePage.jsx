import {ListChecks, NotebookText, CloudSun, MapPin} from 'lucide-react'
import Hero from '@/components/Hero/Hero.jsx'
import SummaryCard from '@/components/shared/SummaryCard/index.js'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className="home__hero-section">
      <Hero />
      <div className="home__cards">
        <SummaryCard
          icon={<ListChecks size={20} />}
          title="Todo"
          number={5}
          subtitle="tasks remaining"
          button="Open Todo"
          to="/todo"
        />

        <SummaryCard
          icon={<NotebookText size={20} />}
          title="Notes"
          number={12}
          subtitle="notes in total"
          button="Open Notes"
          to="/notes"
        />

        <SummaryCard
          icon={<CloudSun size={20} />}
          title="Weather"
          number="23°C"
          subtitle={
            <>
              Cloudy
              <br />
              <span className="summary-card__location">
        <MapPin size={14} /> Tashkent
      </span>
            </>
          }
          button="Open Weather"
          to="/weather"
        />
      </div>
    </div>
  )
}

export default HomePage