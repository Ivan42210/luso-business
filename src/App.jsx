import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import Home from './pages/Home';
import Formations from './pages/Formations';
import DivaltoFormations from './pages/DivaltoFormations';  // ← NOUVEAU
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F5F7FA]">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/formations/divalto" element={<DivaltoFormations />} />  {/* ← NOUVELLE ROUTE */}
            <Route path="/services" element={<Services />} />
            <Route path="/qui-sommes-nous" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;