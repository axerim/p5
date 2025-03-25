import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import Home from './pages/Home'
import About from './pages/About'
import PageError from './pages/PageError'
import Header from './components/Header'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<PageError />} />
      </Routes>
    </main>
    <Footer />
  </Router>
  ,
)
