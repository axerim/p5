import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import "../styles/Header.scss"
// import Background from './pages/About'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <ul>
                    <li>
                        <NavLink to={'/'}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>A propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header