import { useState } from "react";
import Banner from "./Banner";
import image from "../assets/banner-about.jpg";
import "../styles/About.scss";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title: "Service",
      content: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
    },
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ];

  return (
    <main className="about-page">
      {/* Bannière en haut de page */}
      <Banner image={image} title="paysage" />
      
      {/* Section Accordéon */}
      <div className="accordion-container">
        {accordionData.map((item, index) => (
          <div key={index} className="accordion-item">
            <div 
              className="accordion-header" 
              onClick={() => toggleAccordion(index)}
              style={{ backgroundColor: '#FF6060' }}
            >
              <h2>{item.title}</h2>
              <button className={`accordion-button ${activeIndex === index ? 'active' : ''}`}>
                <span className="arrow"></span>
              </button>
            </div>
            <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;