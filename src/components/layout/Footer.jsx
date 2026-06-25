import { Link, NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Logo from '../../assets/Photos/logo-luso-business.png';

const Footer = () => {
  const socialIcons = [
    { icon: FaLinkedin, href: '#' },
    { icon: FaFacebook, href: '#' },
    { icon: FaInstagram, href: '#' }
  ];

  return (
    <footer className="bg-[#0F1F3D] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Colonne 1 - Logo & description */}
        <div>
          <div className="flex items-center mb-3">
            <img src={Logo} alt="Logo" className="h-10" />
           
          </div>
          <p className="text-white/60 text-sm mb-4">
            Votre partenaire formation en langues et prévention des risques professionnels.
          </p>
          <div className="flex space-x-3">
            {socialIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Colonne 2 - Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li><NavLink to="/" className="text-white/60 hover:text-white text-sm transition-colors">Accueil</NavLink></li>
            <li><NavLink to="/formations" className="text-white/60 hover:text-white text-sm transition-colors">Nos formations</NavLink></li>
            <li><NavLink to="/services" className="text-white/60 hover:text-white text-sm transition-colors">Services</NavLink></li>
            <li><NavLink to="/qui-sommes-nous" className="text-white/60 hover:text-white text-sm transition-colors">Qui sommes-nous ?</NavLink></li>
            <li><NavLink to="/contact" className="text-white/60 hover:text-white text-sm transition-colors">Contact</NavLink></li>
          </ul>
        </div>

        {/* Colonne 3 - Formations */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase mb-4">Formations</h4>
          <ul className="space-y-2">
            <li><Link to="/formations/fle" className="text-white/60 hover:text-white text-sm transition-colors">FLE</Link></li>
            <li><Link to="/formations/portugais" className="text-white/60 hover:text-white text-sm transition-colors">Portugais</Link></li>
            <li><Link to="/formations/rgpd" className="text-white/60 hover:text-white text-sm transition-colors">RGPD</Link></li>
            <li><Link to="/formations/duerp" className="text-white/60 hover:text-white text-sm transition-colors">DUERP</Link></li>
            <li><Link to="/formations/management" className="text-white/60 hover:text-white text-sm transition-colors">Management</Link></li>
            <li><Link to="/formations/fle-sportif" className="text-white/60 hover:text-white text-sm transition-colors">FLE en milieu sportif</Link></li>
            <li><Link to="/formations/divalto" className="text-white/60 hover:text-white text-sm transition-colors">Formations DIVALTO</Link></li>
          </ul>
        </div>

        {/* Colonne 4 - Contact */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase mb-4">Contact</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-[#4A6FB3] flex-shrink-0 mt-0.5" />
              <p className="text-white/60 text-sm">2 allée Giaccomo Puccini, 42000 Saint-Etienne</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#4A6FB3] flex-shrink-0" />
              <p className="text-white/60 text-sm">06 07 09 36 71</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#4A6FB3] flex-shrink-0" />
              <p className="text-white/60 text-sm">contact@luso-business.fr</p>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-[#4A6FB3] flex-shrink-0" />
              <p className="text-white/60 text-sm">Lun-Ven 9h00-18h00</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-white/10" />

      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-white/40 text-xs">© 2026 Luso Business - Tous droits réservés</p>
        <span className="text-white/40 text-xs">Organisme certifié Qualiopi</span>
      </div>
    </footer>
  );
};

export default Footer;