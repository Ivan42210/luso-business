import { Breadcrumb, CtaSection } from '../components/common';
import { FormationCard } from '../components/formations';
import { getAllFormations } from '../services/formationService';

const DivaltoFormations = () => {
  // Récupérer uniquement les formations de catégorie 'DIVALTO'
  const divaltoFormations = getAllFormations().filter(f => f.categorie === 'DIVALTO');

  return (
    <>
      <section className="bg-white py-5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Breadcrumb currentPage="Formations DIVALTO" />
          <h1 className="text-3xl font-bold mt-4">Formations DIVALTO</h1>
          <p className="text-gray-500 mt-2">Maîtrisez l'ensemble des modules de votre ERP DIVALTO.</p>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Toutes nos formations DIVALTO</h2>
          <p className="text-gray-500 mb-8">Des formations spécialisées pour chaque module DIVALTO.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {divaltoFormations.map((formation) => (
              <FormationCard key={formation.id} formation={formation} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Vous ne trouvez pas la formation DIVALTO idéale ?"
        subtitle="Obtenez votre devis personnalisé en moins de 24h."
        buttonText="Demander un devis →"
        buttonLink="/contact"
      />
    </>
  );
};

export default DivaltoFormations;