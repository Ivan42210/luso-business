import { useState } from 'react';
import { Breadcrumb, CtaSection } from '../components/common';
import { FilterBar, FormationCard } from '../components/formations';
import { getAllFormations, getAllCategories, getFormationsByCategory } from '../services/formationService';

const Formations = () => {
  const [activeCategorie, setActiveCategorie] = useState('Tous');
  const allFormations = getAllFormations();
  
  // Filtrer les catégories pour exclure "DIVALTO"
  const categories = getAllCategories().filter(cat => cat !== 'DIVALTO');
  
  // Filtrer les formations : si "Tous" → exclure DIVALTO, sinon filtrer par catégorie
  const filtered = activeCategorie === 'Tous' 
    ? allFormations.filter(f => f.categorie !== 'DIVALTO') 
    : getFormationsByCategory(activeCategorie);

  return (
    <>
      <section className="bg-white py-5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Breadcrumb currentPage="Nos formations" />
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Nos formations</h2>
          <p className="text-gray-500 mb-8">Découvrez nos formations adaptées à vos besoins.</p>

          <FilterBar
            categories={categories}
            activeCategory={activeCategorie}
            onCategoryChange={setActiveCategorie}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((formation) => (
              <FormationCard key={formation.id} formation={formation} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Vous ne trouvez pas la formation idéale ?"
        subtitle="Obtenez votre devis personnalisé en moins de 24h."
        buttonText="Demander un devis →"
        buttonLink="/contact"
      />
    </>
  );
};

export default Formations;