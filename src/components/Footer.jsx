import logo from '../assets/logo_footer.png'
import '../styles/Footer.scss'

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Logo footer" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer