import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { formations, categories } from '../data/formations';

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

const FormationCard = ({ formation }) => {
  const { type, pdf, titre, sousTitre, description, image, categorie } = formation;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md flex flex-col">
      <img src={image} alt={titre} className="h-44 object-cover hover:scale-105" />
      <div className="p-4">
        <span className="text-[#4A6FB3] uppercase text-xs mb-2">{categorie}</span>
        <h3 className="text-xl font-bold mb-2">{titre}</h3>
        <p className="text-gray-500 mb-2">{sousTitre}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <CardCTA type={type} pdf={pdf} />
      </div>
    </div>
  );
};

const Formations = () => {
  const [activeCategorie, setActiveCategorie] = useState('Tous');
  const filtered = activeCategorie === 'Tous' ? formations : formations.filter(f => f.categorie === activeCategorie);

  return (
    <>
      <section className="bg-white py-5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <nav aria-label="breadcrumb" className="mb-8">
            <ol className="list-none p-0 m-0 inline-flex space-x-4">
              <li>
                <Link to="/" className="text-[#1A1A1A] hover:text-[#4A6FB3]">Accueil</Link>
              </li>
              <li aria-current="page" className="text-gray-500">Nos formations</li>
            </ol>
          </nav>
         
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Nos formations</h2>
          <p className="text-gray-500 mb-8">Découvrez nos formations adaptées à vos besoins.</p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategorie(category)}
                className={`bg-${activeCategorie === category ? '[#4A6FB3] text-white' : 'white border hover:border-[#4A6FB3]'} px-4 py-2 rounded-lg`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((formation, index) => (
              <FormationCard key={index} formation={formation} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#4A6FB3] py-16">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-white">
          <div>
            <h2 className="text-3xl font-bold mb-2">Vous ne trouvez pas la formation idéale ?</h2>
            <p className="text-lg mb-4">Obtenez votre devis personnalisé en moins de 24h.</p>
          </div>
          <button as={Link} to="/contact" className="bg-white text-[#4A6FB3] px-4 py-2 rounded-lg">Demander un devis →</button>
        </div>
      </section>
    </>
  );
};

export default Formations;