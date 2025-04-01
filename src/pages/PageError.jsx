import { Link } from "react-router-dom"
import "../styles/PageError.scss"

const PageError = () => {
    return (
        <section className="error-section">
            <h1 className="error-number">404</h1>
            <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="return-link">retourner sur la page d'accueil</Link>
        </section>
    )
}

export default PageError

