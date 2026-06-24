
import { formations } from '../../data/formations';


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
            const { id, titre, sousTitre, description, image, pdf } = formation;
            return (
              <div key={id} className="bg-white rounded-lg overflow-hidden relative">
                <img src={image} alt={titre} className="h-36 w-full object-cover" />
                <span className="absolute top-2 left-2 bg-[#4A6FB3] text-white px-2 py-1 rounded-full">{id}</span>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{titre}</h3>
                  <p className="text-gray-500 mb-2">{sousTitre}</p>
                  <p className="text-gray-700 mb-4">{description}</p>
                  {pdf ? (
                    <a href={pdf} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#4A6FB3] text-white px-4 py-2 rounded-lg">Télécharger PDF →</a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {formations.slice(4).map((formation) => {
            const { id, titre, sousTitre, description, image, pdf } = formation;
            return (
              <div key={id} className="bg-white rounded-lg overflow-hidden relative">
                <img src={image} alt={titre} className="h-36 w-full object-cover" />
                <span className="absolute top-2 left-2 bg-[#4A6FB3] text-white px-2 py-1 rounded-full">{id}</span>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{titre}</h3>
                  <p className="text-gray-500 mb-2">{sousTitre}</p>
                  <p className="text-gray-700 mb-4">{description}</p>
                  {pdf ? (
                    <a href={pdf} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#4A6FB3] text-white px-4 py-2 rounded-lg">Télécharger PDF →</a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;