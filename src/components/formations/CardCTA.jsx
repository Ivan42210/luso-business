import { NavLink } from 'react-router-dom';

const CardCTA = ({ type, pdf }) => {
  if (type === 'page') {
    return (
      <NavLink to="/formations/divalto" className="inline-block bg-[#4A6FB3] text-white px-4 py-2 rounded-lg">
        En savoir plus →
      </NavLink>
    );
  } else if (pdf) {
    return (
      <button onClick={() => window.open(pdf, '_blank')} className="inline-block bg-[#4A6FB3] text-white px-4 py-2 rounded-lg">
        Télécharger la fiche ↓
      </button>
    );
  } else {
    return (
      <span className="text-gray-400 italic">Fiche bientôt disponible</span>
    );
  }
};

export default CardCTA;