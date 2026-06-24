
import { Link, NavLink } from 'react-router-dom';
import { formations } from '../data/formations';
import HeroImage from '../assets/Photos/hero.png';
import './Home.css';

const HeroSection = () => {
  const badgeText = "Organisme de formation certifié Qualiopi";
  const title = "Formations professionnelles qui font la différence";
  const subtitle = "Découvrez comment nos formations peuvent transformer votre entreprise.";
  const imageSrc = HeroImage;

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div>
          <span className="inline-flex items-center bg-[#4A6FB3] text-white px-2 py-1 rounded-full mr-4">
            {badgeText.split(' ').map((word, index) => (
              <span key={index} className={`${index !== 0 ? 'ml-1' : ''}`}>
                {word}
              </span>
            ))}
          </span>
          <h1 className="text-3xl font-bold text-[#4A6FB3]">{title}</h1>
          <p className="text-gray-500 mt-2">{subtitle}</p>
        </div>
        <img src={imageSrc} alt="Hero" className="hidden md:block h-96 rounded-2xl hero_img" />
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: '/Icons/screen.svg', label: '1700+', description: 'Heures de formations réalisées' },
    { icon: '/Icons/users.svg', label: '55', description: 'Stagiaires formés' },
    { icon: '/Icons/heart.svg', label: '10/10', description: 'Satisfaction client' },
    { icon: '/Icons/star.svg', label: '10/10', description: 'Satisfaction stagiaire' }
  ];

  return (
    <section className="bg-white border-y py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-center bg-[#4A6FB3]/10 rounded-full p-4">
            <img src={stat.icon} alt={stat.label} className="w-5 h-5" />
            <div className="ml-2">
              <p className="text-xl font-bold">{stat.label}</p>
              <p className="text-gray-500">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FormationsSection = () => {
  const supertitle = "TOUTES NOS EXPERTISES";
  const title = "Nos domaines de formation";
  const subtitle = "Découvrez nos formations adaptées à vos besoins.";

  return (
    <section className="bg-[#F5F7FA] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-[#4A6FB3] uppercase font-bold mb-2">{supertitle}</p>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-500 mb-8">{subtitle}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {formations.slice(0, 4).map((formation) => {
            const { id, titre, sousTitre, description, image } = formation;
            return (
              <div key={id} className="bg-white rounded-lg overflow-hidden relative">
                <img src={image} alt={titre} className="h-36 w-full object-cover" />
                <span className="absolute top-2 left-2 bg-[#4A6FB3] text-white px-2 py-1 rounded-full">{id}</span>
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {formations.slice(4).map((formation) => {
            const { id, titre, sousTitre, description, image } = formation;
            return (
              <div key={id} className="bg-white rounded-lg overflow-hidden relative">
                <img src={image} alt={titre} className="h-36 w-full object-cover" />
                <span className="absolute top-2 left-2 bg-[#4A6FB3] text-white px-2 py-1 rounded-full">{id}</span>
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

const WhyUsSection = () => {
  const supertitle = "POURQUOI NOUS CHOISIR";
  const title = "Un partenaire de confiance pour vos formations";
  const reasons = [
    { icon: '/Icons/expertise.svg', label: 'Expertise reconnue' },
    { icon: '/Icons/custom-formations.svg', label: 'Formations sur mesure' },
    { icon: '/Icons/comprehensive-support.svg', label: 'Accompagnement complet' },
    { icon: '/Icons/easy-financing.svg', label: 'Financement facilité' }
  ];
  const imageSrc = "/Photos/why-us.png";

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-[#4A6FB3] uppercase font-bold mb-2">{supertitle}</p>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-[#4A6FB3]/10 rounded-lg p-4 flex items-center justify-center">
              <img src={reason.icon} alt={reason.label} className="w-5 h-5" />
              <p className="ml-2 text-gray-700">{reason.label}</p>
            </div>
          ))}
        </div>

        <img src={imageSrc} alt="Why Us" className="hidden md:block mt-16 mx-auto w-full max-w-md rounded-lg" />

        <hr className="my-8 border-t border-gray-300" />

        <h2 className="text-3xl font-bold mb-4">UN ACCOMPAGNEMENT SIMPLE ET EFFICACE</h2>

        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="bg-[#4A6FB3]/10 rounded-lg p-4 flex items-center justify-center">
          
            <p className="ml-2 text-gray-700">Analyse</p>
          </div>
          <div className="bg-[#4A6FB3]/10 rounded-lg p-4 flex items-center justify-center">
            
            <p className="ml-2 text-gray-700">Proposition</p>
          </div>
          <div className="bg-[#4A6FB3]/10 rounded-lg p-4 flex items-center justify-center">
            
            <p className="ml-2 text-gray-700">Réalisation</p>
          </div>
          <div className="bg-[#4A6FB3]/10 rounded-lg p-4 flex items-center justify-center">
           
            <p className="ml-2 text-gray-700">Suivi & Évaluation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const supertitle = "ILS NOUS FONT CONFIANCE";
  const title = "Des entreprises satisfaites, des équipes qui progressent.";

  return (
    <section className="bg-[#2F4F8F] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <p className="text-[#4A6FB3] uppercase font-bold mb-2">{supertitle}</p>
        <h2 className="text-3xl font-bold mb-8">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
              <img src="/Icons/star-yellow.svg" alt="Star" className="w-10 h-10 mx-auto mb-4" />
              <p className="text-gray-700 italic">"La formation a été très enrichissante et a permis à nos employés de se développer."</p>
              <p className="mt-2 text-[#4A6FB3] font-bold">John Doe, CEO de XYZ Corp.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnersSection = () => {
  const title = "Des solutions adaptées à votre entreprise";
  const checkmarks = [
    'Formations sur mesure',
    'Accompagnement complet',
    'Financement facilité'
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {checkmarks.map((checkmark, index) => (
            <div key={index} className="bg-[#F5F7FA] rounded-lg p-4 text-center shadow-md">
              <p>{checkmark}</p>
            </div>
          ))}
        </div>

        <button as={Link} to="/eligibility" className="mt-8 bg-[#4A6FB3] text-white px-4 py-2 rounded-lg">Vérifier mon éligibilité →</button>
      </div>
    </section>
  );
};

const CtaSection = () => {
  const title = "Prêt à faire monter en compétences vos équipes ?";
  const subtitle = "Obtenez votre devis personnalisé en moins de 24h.";

  return (
    <section className="bg-[#4A6FB3] py-16">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-white">
        <div>
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-lg mb-4">{subtitle}</p>
        </div>
        <button as={Link} to="/contact" className="bg-white text-[#4A6FB3] px-4 py-2 rounded-lg">Demander un devis →</button>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FormationsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CtaSection />
    </>
  );
};

export default Home;