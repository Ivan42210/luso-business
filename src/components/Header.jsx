import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/Photos/logo-luso-business.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'Accueil' },
    { path: '/formations', label: 'Nos formations' },
    { path: '/services', label: 'Services' },
    { path: '/qui-sommes-nous', label: 'Qui sommes-nous ?' },
    { path: '/contact', label: 'Contact' }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#2F4F8F] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
         <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Menu desktop - visible uniquement sur grand écran */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-white ${isActive ? 'font-semibold' : 'hover:text-white'}`
              }
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Bouton hamburger - visible uniquement sur mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Bouton "Demander un devis" - visible uniquement sur desktop */}
        <Link
          to="/contact"
          className="hidden md:inline-flex bg-white text-[#2F4F8F] font-semibold px-5 py-2.5 rounded-lg"
        >
          Demander un devis
        </Link>
      </div>

      {/* Menu mobile - affiché en dessous du header, uniquement sur petit écran */}
      <nav
        className={`md:hidden ${
          menuOpen ? 'block' : 'hidden'
        } bg-[#2F4F8F] px-6 pb-4`}
      >
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block py-2 text-white ${isActive ? 'font-semibold' : 'hover:text-white'}`
            }
            end={link.path === '/'}
            onClick={toggleMenu} // Ferme le menu après un clic sur un lien
          >
            {link.label}
          </NavLink>
        ))}
        {/* Bouton Devis intégré au menu mobile */}
        <Link
          to="/contact"
          className="block mt-4 bg-white text-[#2F4F8F] font-semibold px-5 py-2.5 rounded-lg text-center"
          onClick={toggleMenu}
        >
          Demander un devis
        </Link>
      </nav>
    </header>
  );
};

export default Header;