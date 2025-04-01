import Banner from "./Banner"
import image from "../assets/banner-about.jpg"
import "../styles/About.scss"

const About = () => {
    return (
        <div className="about">
            <Banner img={image} />
        </div>
    )
}

export default About

