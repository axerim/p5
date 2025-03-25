// import { useState } from "react"
import Table from "../components/Table"
import '../index.css'

// const Home = ({ name }) => {
//     const [counter, setCounter] = useState(0)
//     let increment = 0

//     const data = ['a', 'b', 'c']

//     const handlerIncrement = () => {
//         increment = increment + 1
//         console.log(increment)
//     }

//     return (
//         <>
//             <div className="test">Home</div>
//             <p>Bonjour {name}</p>
//             <Table data={data} />
//             <Table data={['d', 'e', 'f']} />
//             <div>Combien: {counter}</div>
//             <button onClick={() => setCounter(counter + 1)}>Ajouter + 1 à counter</button>
//             <div>Combien: {increment}</div>
//             <button onClick={handlerIncrement}>Ajouter + 1 à increment</button>
//         </>

//     )
// }








function Home() {
    return (
      <div className="home">
       { Header }
        <header className="header">
          <div className="header-content">
            <div className="header-left">
              <img 
                src="./src/accueil-desktop.png" 
                alt="Logo" 
                className="header-logo"
              />
            </div>
            <div className="header-right">
              <button className="header-button">Accueil</button>
              <span className="button-space"></span>
              <button className="header-button">À propos</button>
            </div>
          </div>
          
          <div className="header-banner">
            <img 
              src="./src/images/recife.jpg" 
              alt="Bannière" 
              className="header-banner-image"
            />
          </div>
        </header>
  
        { Main Content }
        <main className="main">
          <section className="articles-section">
            { Première rangée }
            <div className="article-row">
              {[1, 2, 3].map((item) => (
                <article key={`article-1-${item}`} className="article-card">
                  <img 
                    src={`./src/assets/images/rectangle-3-${item}.jpg`} 
                    alt={`Article ${item}`}
                    className="article-image"
                  />
                  <h3>Titre de la</h3>
                  <p>localisation</p>
                </article>
              ))}
            </div>
            
            { Deuxième rangée }
            <div className="article-row">
              {[4, 5, 6].map((item) => (
                <article key={`article-2-${item}`} className="article-card">
                  <img 
                    src={`./src/assets/images/rectangle-3-${item}.jpg`} 
                    alt={`Article ${item}`}
                    className="article-image"
                  />
                  <h3>Titre de la</h3>
                  <p>localisation</p>
                </article>
              ))}
            </div>
          </section>
        </main>
  
        { Footer }
        <footer className="footer">
          <div className="footer-content">
            <img 
              src="./src/assets/images/footer-desktop.jpg" 
              alt="Logo footer" 
              className="footer-image"
            />
          </div>
        </footer>
      </div>
    );
  }
  
  export default Home;