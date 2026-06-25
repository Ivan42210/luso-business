import { Link } from 'react-router-dom';

const CtaSection = ({
  title = "Prêt à faire monter en compétences vos équipes ?",
  subtitle = "Obtenez votre devis personnalisé.",
  buttonText = "Demander un devis →",
  buttonLink = "/contact",
  bgColor = "bg-[#4A6FB3]",
  textColor = "text-white",
  buttonClasses = "bg-white text-[#4A6FB3] font-semibold"
}) => {
  return (
    <section className={`${bgColor} py-16`}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className={`text-center md:text-left ${textColor}`}>
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-lg">{subtitle}</p>
        </div>
        <Link to={buttonLink} className={`${buttonClasses} px-4 py-2 rounded-lg whitespace-nowrap`}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;