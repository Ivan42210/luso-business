
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Services } from './Pages/Services'
import { Formations } from './Pages/Formations'
import { Contact } from './Pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
