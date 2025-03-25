import data from '../data/logements.json'
import '../styles/Home.scss'

const Home = () => {
  return (
    <div className="home">
      <section className='gallery'>
        {
          data.map(item => <div>{item.title}</div>)
        }
      </section>
    </div>
  )
}

export default Home

