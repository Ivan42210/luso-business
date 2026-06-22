
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  const socialIcons = [
    { icon: '/Icons/linkedin.svg', href: '#' },
    { icon: '/Icons/facebook.svg', href: '#' },
    { icon: '/Icons/instagram.svg', href: '#' }
  ];

  return (
    <footer className="bg-[#0F1F3D] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <span className="text-xl font-bold">luso</span>
          <span className="text-white/70">business</span>
          <p className="text-white/60 text-sm">Votre partenaire formation en langues et prévention des risques professionnels.</p>
          <div className="flex space-x-4">
            {socialIcons.map((icon, index) => (
              <a key={index} href={icon.href} className="text-white/40 hover:text-white">
                <img src={icon.icon} alt={`Social ${icon.icon}`} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li><NavLink to="/" className="text-white/60 hover:text-white text-sm">Accueil</NavLink></li>
            <li><NavLink to="/formations" className="text-white/60 hover:text-white text-sm">Nos formations</NavLink></li>
            <li><NavLink to="/services" className="text-white/60 hover:text-white text-sm">Services</NavLink></li>
            <li><NavLink to="/qui-sommes-nous" className="text-white/60 hover:text-white text-sm">Qui sommes-nous ?</NavLink></li>
            <li><NavLink to="/contact" className="text-white/60 hover:text-white text-sm">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase mb-4">Formations</h4>
          <ul className="space-y-2">
            <li><Link to="/formations/fle" className="text-white/60 hover:text-white text-sm">FLE</Link></li>
            <li><Link to="/formations/portugais" className="text-white/60 hover:text-white text-sm">Portugais</Link></li>
            <li><Link to="/formations/rgpd" className="text-white/60 hover:text-white text-sm">RGPD</Link></li>
            <li><Link to="/formations/duerp" className="text-white/60 hover:text-white text-sm">DUERP</Link></li>
            <li><Link to="/formations/management" className="text-white/60 hover:text-white text-sm">Management</Link></li>
            <li><Link to="/formations/fle-sportif" className="text-white/60 hover:text-white text-sm">FLE en milieu sportif</Link></li>
            <li><Link to="/formations/divalto" className="text-white/60 hover:text-white text-sm">Formations DIVALTO</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase mb-4">Contact</h4>
          <div className="flex items-center space-x-2">
            <img src="/Icons/map-pin.svg" alt="Map Pin" className="w-5 h-5 text-[#4A6FB3]" />
            <p className="text-white/60">123 rue de la Formation 75007 Paris</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/Icons/phone.svg" alt="Phone" className="w-5 h-5 text-[#4A6FB3]" />
            <p className="text-white/60">01 23 45 67 89</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/Icons/mail.svg" alt="Mail" className="w-5 h-5 text-[#4A6FB3]" />
            <p className="text-white/60">contact@luso-business.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/Icons/clock.svg" alt="Clock" className="w-5 h-5 text-[#4A6FB3]" />
            <p className="text-white/60">Lun-Ven 9h00-18h00</p>
          </div>
        </div>
      </div>

      <hr className="border-t border-white/10" />

      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-white/40 text-xs">© 2024 Luso Business - Tous droits réservés</p>
        <span className="text-white/40 text-xs">Organisme certifié Qualiopi</span>
      </div>
    </footer>
  );
};

export default Footer;