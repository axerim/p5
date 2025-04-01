import data from '../data/logements.json'
import '../styles/Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  // Limiter les données aux 6 premiers éléments
  const displayedData = data.slice(0, 6)

  return (
    <div className="home">
      <section className='gallery'>
        {displayedData.map((item) => (
          <Link to={`/logement/${item.id}`} key={item.id} className="gallery-card">
            <img src={item.cover} alt={item.title} />
            <h2>{item.title}</h2>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Home