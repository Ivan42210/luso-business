import CardCTA from './CardCTA';

const FormationCard = ({ formation }) => {
  const { type, pdf, titre, sousTitre, description, image, categorie } = formation;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md flex flex-col">
      <img src={image} alt={titre} className="h-44 object-cover hover:scale-105 transition-transform duration-300" />
      <div className="p-4">
        <span className="text-[#4A6FB3] uppercase text-xs mb-2 block">{categorie}</span>
        <h3 className="text-xl font-bold mb-2">{titre}</h3>
        <p className="text-gray-500 mb-2">{sousTitre}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <CardCTA type={type} pdf={pdf} />
      </div>
    </div>
  );
};

export default FormationCard;