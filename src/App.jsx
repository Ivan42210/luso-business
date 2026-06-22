
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Formations from './Pages/Formations';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F5F7FA]">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/services" element={<Services />} />
            <Route path="/qui-sommes-nous" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

