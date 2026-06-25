import { Check } from "lucide-react";
import pourquoiNous from '../../assets/Photos/pourquoi nous.png';

const WhyUsSection = () => {
  const supertitle = "POURQUOI NOUS CHOISIR";
  const title = "Un partenaire de confiance pour vos formations";
  const reasons = [
    { label: 'Expertise reconnue' },
    { label: 'Formations sur mesure' },
    { label: 'Accompagnement complet' },
    { label: 'Financement facilité' }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-[#4A6FB3] uppercase font-bold mb-2">{supertitle}</p>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-[#4A6FB3]/10 rounded-lg p-4 flex items-center justify-center">
              <Check className="w-5 h-5 text-[#4A6FB3]" />
              <p className="ml-2 text-gray-700">{reason.label}</p>
            </div>
          ))}
        </div>

        <img src={pourquoiNous} alt="Why Us" className="hidden md:block mt-16 mx-auto w-full max-w-md rounded-lg" />

        <hr className="my-8 border-t border-gray-300" />

        <h2 className="text-3xl font-bold mb-4">UN ACCOMPAGNEMENT SIMPLE ET EFFICACE</h2>

        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="bg-[#4A6FB3]/10 rounded-lg p-4 flex items-center justify-center">
            <Check className="w-5 h-5 text-[#4A6FB3]" />
            <p className="ml-2 text-gray-700">Analyse</p>
          </div>
          <div className="bg-[#4A6FB3]/10 rounded-lg p-4 flex items-center justify-center">
            <Check className="w-5 h-5 text-[#4A6FB3]" />
            <p className="ml-2 text-gray-700">Proposition</p>
          </div>
          <div className="bg-[#4A6FB3]/10 rounded-lg p-4 flex items-center justify-center">
            <Check className="w-5 h-5 text-[#4A6FB3]" />
            <p className="ml-2 text-gray-700">Réalisation</p>
          </div>
          <div className="bg-[#4A6FB3]/10 rounded-lg p-4 flex items-center justify-center">
            <Check className="w-5 h-5 text-[#4A6FB3]" />
            <p className="ml-2 text-gray-700">Suivi & Évaluation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;