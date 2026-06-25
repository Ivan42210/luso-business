import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const supertitle = "ILS NOUS FONT CONFIANCE";
  const title = "Des entreprises satisfaites, des équipes qui progressent.";

  return (
    <section className="bg-[#2F4F8F] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-white uppercase font-bold mb-2">{supertitle}</p>
        <h2 className="text-3xl text-white font-bold mb-8">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="flex justify-center space-x-1 mb-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">"La formation a été très enrichissante et a permis à nos employés de se développer."</p>
              <p className="mt-2 text-[#4A6FB3] font-bold">John Doe, CEO de XYZ Corp.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;