import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    return (
        <Link to={`/lodging/${item.id}`} key={item.id} className="gallery-card">
            <img src={item.cover} alt={item.title} />
            <h2>{item.title}</h2>
        </Link>
    )
}

export default Card