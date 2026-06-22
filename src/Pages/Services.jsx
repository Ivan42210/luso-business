
import { Link } from 'react-router-dom';

const imgServices = "/Photos/services.jpg";

const Services = () => {
  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <nav aria-label="breadcrumb" className="mb-8">
            <ol className="list-none p-0 m-0 inline-flex space-x-4">
              <li>
                <Link to="/" className="text-[#1A1A1A] hover:text-[#4A6FB3]">Accueil</Link>
              </li>
              <li aria-current="page" className="text-gray-500">Services</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold mb-4">Nos services</h1>
          <p className="text-gray-500 mb-8">Des solutions de formation adaptées à chaque besoin de votre entreprise.</p>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-[#4A6FB3] uppercase mb-8">Ce que nous proposons</h2>
          <h3 className="text-3xl font-bold mb-4">Des formations pour chaque situation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md">
              <div className="w-10 h-10 bg-[#4A6FB3]/10 rounded-lg mb-4 flex items-center justify-center">
                <img src="/Icons/pencil.svg" alt="Crayon" className="w-5 h-5 text-[#4A6FB3]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Formations sur mesure</h3>
              <p className="text-sm text-gray-500">Adaptées à vos besoins spécifiques.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md">
              <div className="w-10 h-10 bg-[#4A6FB3]/10 rounded-lg mb-4 flex items-center justify-center">
                <img src="/Icons/users.svg" alt="Utilisateurs" className="w-5 h-5 text-[#4A6FB3]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Formations en présentiel</h3>
              <p className="text-sm text-gray-500">Adaptées à vos besoins spécifiques.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md">
              <div className="w-10 h-10 bg-[#4A6FB3]/10 rounded-lg mb-4 flex items-center justify-center">
                <img src="/Icons/screen.svg" alt="Écran" className="w-5 h-5 text-[#4A6FB3]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Formations à distance</h3>
              <p className="text-sm text-gray-500">Adaptées à vos besoins spécifiques.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md">
              <div className="w-10 h-10 bg-[#4A6FB3]/10 rounded-lg mb-4 flex items-center justify-center">
                <img src="/Icons/check-circle.svg" alt="Check-cercle" className="w-5 h-5 text-[#4A6FB3]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Bilan de compétences</h3>
              <p className="text-sm text-gray-500">Analyse et suivi des progrès.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md">
              <div className="w-10 h-10 bg-[#4A6FB3]/10 rounded-lg mb-4 flex items-center justify-center">
                <img src="/Icons/lightbulb.svg" alt="Ampoule" className="w-5 h-5 text-[#4A6FB3]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Conseil en formation</h3>
              <p className="text-sm text-gray-500">Expertise pour une formation optimale.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md">
              <div className="w-10 h-10 bg-[#4A6FB3]/10 rounded-lg mb-4 flex items-center justify-center">
                <img src="/Icons/document.svg" alt="Document" className="w-5 h-5 text-[#4A6FB3]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Gestion OPCO</h3>
              <p className="text-sm text-gray-500">Suivi et gestion des formations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div>
            <h2 className="text-[#4A6FB3] uppercase mb-8">Pourquoi choisir nos services ?</h2>
            <h3 className="text-3xl font-bold mb-4">Des formations pour chaque situation</h3>
            <ul className="list-disc pl-5">
              <li><img src="/Icons/check.svg" alt="Check" className="w-5 h-5 inline mr-2 text-[#4A6FB3]" />Formateurs certifiés Qualiopi</li>
              <li><img src="/Icons/check.svg" alt="Check" className="w-5 h-5 inline mr-2 text-[#4A6FB3]" />Suivi personnalisé</li>
              <li><img src="/Icons/check.svg" alt="Check" className="w-5 h-5 inline mr-2 text-[#4A6FB3]" />Flexibilité totale présentiel/distanciel</li>
              <li><img src="/Icons/check.svg" alt="Check" className="w-5 h-5 inline mr-2 text-[#4A6FB3]" />Financement OPCO facilité</li>
              <li><img src="/Icons/check.svg" alt="Check" className="w-5 h-5 inline mr-2 text-[#4A6FB3]" />Accompagnement administratif complet</li>
            </ul>
          </div>
          <div className="flex-1">
            <img src={imgServices} alt="Services" className="rounded-2xl w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-gray-500 mb-8">Découvrez notre processus de formation.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-[#4A6FB3]/30">01</span>
              <h3 className="font-bold mb-2">Prise de contact</h3>
              <p className="text-sm text-gray-500">Nous vous contactons pour comprendre vos besoins.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-[#4A6FB3]/30">02</span>
              <h3 className="font-bold mb-2">Analyse des besoins</h3>
              <p className="text-sm text-gray-500">Nous analysons vos besoins et définissons le programme.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-[#4A6FB3]/30">03</span>
              <h3 className="font-bold mb-2">Mise en place</h3>
              <p className="text-sm text-gray-500">Nous mettons en place le programme de formation.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-[#4A6FB3]/30">04</span>
              <h3 className="font-bold mb-2">Suivi & évaluation</h3>
              <p className="text-sm text-gray-500">Nous suivons et évaluons les progrès.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#4A6FB3] py-16">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>
            <h2 className="text-white font-bold mb-4">Prêt à développer les compétences de vos équipes ?</h2>
            <p className="text-white/80">Obtenez votre devis personnalisé en moins de 24h.</p>
          </div>
          <button as={Link} to="/contact" className="bg-white text-[#2F4F8F] font-semibold px-8 py-4 rounded-lg">
            Demander un devis →
          </button>
        </div>
      </section>
    </>
  );
};

export default Services;