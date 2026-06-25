import { Link } from 'react-router-dom';
import { Check } from "lucide-react";

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
            <div key={index} className="bg-[#F5F7FA] rounded-lg p-4 text-center shadow-md flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-[#4A6FB3]" />
              <p>{checkmark}</p>
            </div>
          ))}
        </div>

        <Link to="/eligibility" className="mt-8 inline-block bg-[#4A6FB3] text-white px-4 py-2 rounded-lg">
          Vérifier mon éligibilité →
        </Link>
      </div>
    </section>
  );
};

export default PartnersSection;