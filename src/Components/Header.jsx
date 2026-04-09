import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-primary text-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold">My React App</h1>
        <p className="text-sm text-gray-300">Navigation des pages</p>
      </div>
      <nav className="flex flex-wrap gap-3">
        <Link to="/" className="text-white hover:text-yellow-300">Accueil</Link>
        <Link to="/about" className="text-white hover:text-yellow-300">À propos</Link>
        <Link to="/services" className="text-white hover:text-yellow-300">Services</Link>
        <Link to="/formations" className="text-white hover:text-yellow-300">Formations</Link>
        <Link to="/contact" className="text-white hover:text-yellow-300">Contact</Link>
      </nav>
    </header>
  )
}