import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import Home from './pages/Home'
import Logement from './pages/Logement'
import Apropos from './pages/Apropos'
import About from './pages/About'
import Background from './pages/Background'
import PageError from './pages/PageError'
import Header from './components/Header'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <Router>
    <Header />
    <Background />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Logement />} />
        <Route path='/' element={<Apropos />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<PageError />} />
      </Routes>
    </main>
    <Footer />
  </Router>
  ,
)
