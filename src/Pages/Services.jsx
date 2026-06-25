import {
  Pencil,
  Users,
  Monitor,
  ClipboardCheck,
  Lightbulb,
  FileText,
  Check
} from 'lucide-react';
import { Breadcrumb, CtaSection } from '../components/common';
import imgServices from '../assets/Photos/services.png';

const Services = () => {
  const services = [
    { icon: Pencil, title: 'Formations sur mesure', description: 'Adaptées à vos besoins spécifiques.' },
    { icon: Users, title: 'Formations en présentiel', description: 'Adaptées à vos besoins spécifiques.' },
    { icon: Monitor, title: 'Formations à distance', description: 'Adaptées à vos besoins spécifiques.' },
    { icon: ClipboardCheck, title: 'Bilan de compétences', description: 'Analyse et suivi des progrès.' },
    { icon: Lightbulb, title: 'Conseil en formation', description: 'Expertise pour une formation optimale.' },
    { icon: FileText, title: 'Gestion OPCO', description: 'Suivi et gestion des formations.' }
  ];

  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Breadcrumb currentPage="Services" />
          <h1 className="text-3xl font-bold mb-4">Nos services</h1>
          <p className="text-gray-500 mb-8">Des solutions de formation adaptées à chaque besoin de votre entreprise.</p>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-[#4A6FB3] uppercase mb-8 font-bold">Ce que nous proposons</h2>
          <h3 className="text-3xl font-bold mb-4">Des formations pour chaque situation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-[#4A6FB3]/10 rounded-lg mb-4 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#4A6FB3]" />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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