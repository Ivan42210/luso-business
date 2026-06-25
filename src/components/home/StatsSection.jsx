import { Monitor, Users, Heart, Star } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { label: '1700+', description: 'Heures de formations réalisées' },
    { label: '55', description: 'Stagiaires formés' },
    { label: '10/10', description: 'Satisfaction client' },
    { label: '10/10', description: 'Satisfaction stagiaire' }
  ];

  const icons = [Monitor, Users, Heart, Star];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = icons[index];
          return (
            <div key={index} className="flex items-center justify-center bg-[#4A6FB3]/10 rounded-full p-4 gap-3">
              <Icon className="w-6 h-6 text-[#4A6FB3] flex-shrink-0" />
              <div className="flex flex-col items-start">
                <p className="text-xl font-bold leading-tight">{stat.label}</p>
                <p className="text-gray-500 text-sm">{stat.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;