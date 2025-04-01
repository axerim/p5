import data from '../data/logements.json'
import '../styles/Home.scss'
import Card from '../components/Card'
import Banner from './Banner'
import image from '../assets/banner-home.png'

const Home = () => {
  return (
    <div className="home">
      <Banner img={image} text='Chez vous, partout et ailleurs' />
      <section className='gallery'>
        {data.map(item => <Card item={item} />)}
      </section>
    </div>
  )
}

export default Home