import { NavLink } from 'react-router-dom';
import { formations } from '../../data/formations';

const FormationsSection = () => {
  // Filtrer les formations pour exclure DIVALTO
  const filteredFormations = formations.filter(f => f.categorie !== 'DIVALTO');

  return (
    <section className="bg-[#F5F7FA] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-[#4A6FB3] uppercase font-bold mb-2">TOUTES NOS EXPERTISES</p>
        <h2 className="text-3xl font-bold mb-4">Nos domaines de formation</h2>
        <p className="text-gray-500 mb-8">Découvrez nos formations adaptées à vos besoins.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {filteredFormations.slice(0, 4).map((formation) => {
            const { id, titre, sousTitre, description, image } = formation;
            return (
              <div key={id} className="bg-white rounded-lg overflow-hidden relative">
                <img src={image} alt={titre} className="h-36 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{titre}</h3>
                  <p className="text-gray-500 mb-2">{sousTitre}</p>
                  <p className="text-gray-700 mb-4">{description}</p>
                  <NavLink to="/formations" className="inline-block bg-[#4A6FB3] text-white px-4 py-2 rounded-lg">En savoir plus →</NavLink>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {filteredFormations.slice(4).map((formation) => {
            const { id, titre, sousTitre, description, image } = formation;
            return (
              <div key={id} className="bg-white rounded-lg overflow-hidden relative">
                <img src={image} alt={titre} className="h-36 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{titre}</h3>
                  <p className="text-gray-500 mb-2">{sousTitre}</p>
                  <p className="text-gray-700 mb-4">{description}</p>
                  <NavLink to="/formations" className="inline-block bg-[#4A6FB3] text-white px-4 py-2 rounded-lg">En savoir plus →</NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;