import { Breadcrumb, CtaSection } from '../components/common';
import imgAbout from '../assets/Photos/partenariat.jpg';
import imgTeam from '../assets/Photos/team.png';
import imgVirginie from '../assets/Photos/virginie.png';
import imgNathalie from '../assets/Photos/Nathalie.jpeg';
import imgDenis from '../assets/Photos/Denis.png';
import imgValerie from '../assets/Photos/Valerie.png';
import imgIvan from '../assets/Photos/ivan.png';
import {
  Users,           // Proximité
  GraduationCap,   // Expertise
  Heart,           // Engagement
  TrendingUp       // Progression
} from 'lucide-react';

const About = () => {
  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Breadcrumb currentPage="Qui sommes-nous ?" />
          <h1 className="text-3xl font-bold mb-4">Qui sommes-nous ?</h1>
          <p className="text-gray-500 mb-8">La véritable entreprise de formation professionnelle à votre service.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[#4A6FB3] uppercase text-sm mb-4">NOTRE MISSION</h2>
            <h1 className="text-3xl font-bold mb-4">Votre partenaire de confiance en formation professionnelle</h1>
            <p className="text-gray-500 mb-4">Luso Business est une entreprise de formation professionnelle certifiée Qualiopi, spécialisée dans les langues et la prévention des risques. Nous sommes dédiés à aider vos employés à se développer et à atteindre leurs objectifs.</p>
            <p className="text-gray-500">Grâce à notre expertise et à notre engagement constant, nous accompagnons chaque stagiaire de A à Z jusqu'au bout. Nos formations sont adaptées à vos besoins et mesurées pour optimiser les résultats.</p>
          </div>
          <div>
            <img src={imgAbout} alt="About" className="rounded-2xl w-full object-cover" />
          </div>
        </div>
      </section>

     <section className="bg-[#F5F7FA] py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-8">Nos valeurs</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* Proximité */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex items-center space-x-4">
        <div className="bg-[#4A6FB3]/10 rounded-lg p-4">
          <Users className="w-5 h-5 text-[#4A6FB3]" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Proximité</h3>
          <p>Nous adaptons chaque formation à vos contraintes.</p>
        </div>
      </div>

      {/* Expertise */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex items-center space-x-4">
        <div className="bg-[#4A6FB3]/10 rounded-lg p-4">
          <GraduationCap className="w-5 h-5 text-[#4A6FB3]" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Expertise</h3>
          <p>Des formateurs certifiés et expérimentés.</p>
        </div>
      </div>

      {/* Engagement */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex items-center space-x-4">
        <div className="bg-[#4A6FB3]/10 rounded-lg p-4">
          <Heart className="w-5 h-5 text-[#4A6FB3]" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Engagement</h3>
          <p>Accompagnement de A à Z jusqu'au bout.</p>
        </div>
      </div>

      {/* Progression */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex items-center space-x-4">
        <div className="bg-[#4A6FB3]/10 rounded-lg p-4">
          <TrendingUp className="w-5 h-5 text-[#4A6FB3]" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Progression</h3>
          <p>Nous mesurons et optimisons les résultats.</p>
        </div>
      </div>

    </div>
  </div>
</section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Notre organigramme</h2>
          <p className="text-gray-500 mb-8">Une équipe dédiée à votre réussite.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
              <img src={imgVirginie} alt="Virginie" className="h-48 w-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold">Virginie</h3>
              <p>Présidente et directrice commerciale</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
              <img src={imgNathalie} alt="Nathalie" className="h-48 w-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold">Nathalie</h3>
              <p>Responsable administrative et chargée de recrutement</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
              <img src={imgDenis} alt="Denis" className="h-48 w-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold">Denis</h3>
              <p>Responsable Administratif et NTIC</p>
            </div>
             <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
              <img src={imgValerie} alt="Valérie" className="h-48 w-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold">Valérie</h3>
              <p>Formatrice Espagnol et FLE</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
              <img src={imgIvan} alt="Ivan" className="h-48 w-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold">Ivan</h3>
              <p>Formateur portugais et FLE</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
              <img src={imgTeam} alt="Sophie Bernard" className="h-48 w-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold">Des formateurs experts</h3>
              <p>Sélectionnés qui sauront répondre à vos attentes</p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Prêt à travailler avec nous ?"
        subtitle="Obtenez votre devis personnalisé en moins de 24h."
        buttonText="Demander un devis →"
        buttonLink="/contact"
        bgColor="bg-[#4A6FB3]"
        textColor="text-white"
        buttonClasses="bg-white text-[#2F4F8F] font-semibold px-8 py-4"
      />
    </>
  );
};

export default About;