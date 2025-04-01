import recif from '../assets/recif.svg'
import '../styles/background.scss'


const Background = () => {
    return (
        <div className = "background">
            <h1>Chez vous, partout et ailleurs</h1>
            <img src = {recif} alt = "récif" />
        </div>
    )
}

export default Background;