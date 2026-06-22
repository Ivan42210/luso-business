
import { Link } from 'react-router-dom';

const imgAbout = "/Photos/about.jpg";
const imgTeam = "/Photos/team.jpg";

const About = () => {
  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <nav aria-label="breadcrumb" className="mb-8">
            <ol className="list-none p-0 m-0 inline-flex space-x-4">
              <li>
                <Link to="/" className="text-[#1A1A1A] hover:text-[#4A6FB3]">Accueil</Link>
              </li>
              <li aria-current="page" className="text-gray-500">Qui sommes-nous ?</li>
            </ol>
          </nav>
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
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-center space-x-4">
              <div className="bg-[#4A6FB3]/10 rounded-lg p-4">
                <img src="/Icons/proximity.svg" alt="Proximité" className="w-5 h-5 text-[#4A6FB3]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Proximité</h3>
                <p>Nous adaptons chaque formation à vos contraintes.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-center space-x-4">
              <div className="bg-[#4A6FB3]/10 rounded-lg p-4">
                <img src="/Icons/expertise.svg" alt="Expertise" className="w-5 h-5 text-[#4A6FB3]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Expertise</h3>
                <p>Des formateurs certifiés et expérimentés.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-center space-x-4">
              <div className="bg-[#4A6FB3]/10 rounded-lg p-4">
                <img src="/Icons/engagement.svg" alt="Engagement" className="w-5 h-5 text-[#4A6FB3]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Engagement</h3>
                <p>Accompagnement de A à Z jusqu'au bout.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-center space-x-4">
              <div className="bg-[#4A6FB3]/10 rounded-lg p-4">
                <img src="/Icons/progression.svg" alt="Progression" className="w-5 h-5 text-[#4A6FB3]" />
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
            <div className="bg-white rounded-xl p-4 shadow-sm flex items-center space-x-4">
              <img src={imgTeam} alt="Marie Dupont" className="h-48 object-cover rounded-xl" />
              <div>
                <h3 className="text-xl font-bold">Marie Dupont</h3>
                <p>Directrice pédagogique</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm flex items-center space-x-4">
              <img src={imgTeam} alt="Jean Martin" className="h-48 object-cover rounded-xl" />
              <div>
                <h3 className="text-xl font-bold">Jean Martin</h3>
                <p>Formateur FLE</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm flex items-center space-x-4">
              <img src={imgTeam} alt="Sophie Bernard" className="h-48 object-cover rounded-xl" />
              <div>
                <h3 className="text-xl font-bold">Sophie Bernard</h3>
                <p>Coordinatrice formations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#4A6FB3] py-16">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>
            <h2 className="text-white font-bold mb-4">Prêt à travailler avec nous ?</h2>
            <p className="text-white/80">Obtenez votre devis personnalisé en moins de 24h.</p>
          </div>
          <button as={Link} to="/contact" className="bg-white text-[#2F4F8F] font-semibold px-8 py-4 rounded-lg">Demander un devis →</button>
        </div>
      </section>
    </>
  );
};

export default About;