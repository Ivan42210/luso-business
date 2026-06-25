import { Breadcrumb, CtaSection } from '../components/common';
import { ServiceCategoryCard } from '../components/services';
import { serviceCategories } from '../data/services';
import {
  Check
} from 'lucide-react';
import imgServices from '../assets/Photos/services.png';

const Services = () => {
  return (
    <>
      {/* Breadcrumb et en-tête */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Breadcrumb currentPage="Services" />
          <h1 className="text-3xl font-bold mb-4">Nos services</h1>
          <p className="text-gray-500 mb-8">Des solutions de formation adaptées à chaque besoin de votre entreprise.</p>
        </div>
      </section>

      {/* Grille des catégories de services */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#4A6FB3] uppercase text-center font-bold mb-2">Ce que nous proposons</h2>
          <h3 className="text-3xl font-bold text-center mb-8">Des prestations pour chaque besoin</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <ServiceCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Section "Pourquoi choisir nos services ?" (inchangée) */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-[#4A6FB3] uppercase mb-8">Pourquoi choisir nos services ?</h2>
            <h3 className="text-3xl font-bold mb-4">Des formations pour chaque situation</h3>
            <ul className="list-disc pl-5 list-none space-y-2">
              <li className='flex items-center'><Check color='#4A6FB3' className="mr-2" /> Formateurs certifiés Qualiopi</li>
              <li className='flex items-center'><Check color='#4A6FB3' className="mr-2" /> Suivi personnalisé</li>
              <li className='flex items-center'><Check color='#4A6FB3' className="mr-2" /> Flexibilité totale présentiel/distanciel</li>
              <li className='flex items-center'><Check color='#4A6FB3' className="mr-2" /> Financement OPCO facilité</li>
              <li className='flex items-center'><Check color='#4A6FB3' className="mr-2" /> Accompagnement administratif complet</li>
            </ul>
          </div>
          <div className="flex-1">
            <img src={imgServices} alt="Services" className="rounded-2xl w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Section "Comment ça marche ?" (inchangée) */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-gray-500 mb-8">Découvrez notre processus de formation.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-[#4A6FB3]">01</span>
              <h3 className="font-bold mb-2">Prise de contact</h3>
              <p className="text-sm text-gray-500">Nous vous contactons pour comprendre vos besoins.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-[#4A6FB3]">02</span>
              <h3 className="font-bold mb-2">Analyse des besoins</h3>
              <p className="text-sm text-gray-500">Nous analysons vos besoins et définissons le programme.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-[#4A6FB3]">03</span>
              <h3 className="font-bold mb-2">Mise en place</h3>
              <p className="text-sm text-gray-500">Nous mettons en place le programme de formation.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-[#4A6FB3]">04</span>
              <h3 className="font-bold mb-2">Suivi & évaluation</h3>
              <p className="text-sm text-gray-500">Nous suivons et évaluons les progrès.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA (inchangé) */}
      <CtaSection
        title="Prêt à développer les compétences de vos équipes ?"
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

export default Services;