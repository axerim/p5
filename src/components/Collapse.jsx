import { useState } from "react";
import "../styles/Collapse.scss";

const Collapse = ({ item, index }) => {
    const [activeIndices, setActiveIndices] = useState([]);

    const toggleAccordion = (index) => {
        setActiveIndices(prevIndices =>
            prevIndices.includes(index)
                ? prevIndices.filter(i => i !== index) // Ferme l'élément s'il est déjà ouvert
                : [...prevIndices, index] // Ouvre l'élément en plus des autres
        );
    };

    return (
        <div key={index} className="accordion-item">
            <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
                style={{ backgroundColor: '#FF6060' }}
            >
                <h2>{item.title}</h2>
                <button className={`accordion-button ${activeIndices.includes(index) ? 'active' : ''}`}>
                    <span className="arrow"></span>
                </button>
            </div>
            <div className={`accordion-content ${activeIndices.includes(index) ? 'open' : ''}`}>
                <p>{item.content}</p>
            </div>
        </div>
    );
}

export default Collapse