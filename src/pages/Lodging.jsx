import '../styles/Lodging.scss'
import { useParams } from 'react-router-dom'
import data from '../data/logements.json'
import PageError from './PageError'
import Carousel from '../components/Carousel'

const Lodging = () => {
  const { id } = useParams()

  const lodging = data.find(item => item.id === id)

  if (!lodging) {
    return <PageError />
  }


  return (
    <section id="lodging">
      <Carousel data={lodging} />
    </section>
  )
}

export default Lodging