import HeroImage from '../../assets/Photos/hero.png';
import LogoQualiopi from '../../assets/Photos/logo qualiopi.png';

const HeroSection = () => {
  const badgeText = "Organisme de formation certifié Qualiopi";
  const title = "Formations professionnelles qui font la différence";
  const subtitle = "Découvrez comment nos formations peuvent transformer votre entreprise.";

  const handleQualiopiClick = () => {
    window.open("src/assets/PDFs/Certificat AFNOR LUSO-BUSINESS-2024-2027.pdf", '_blank');
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div>
          <div
            className="inline-flex flex-col bg-[#4A6FB3] text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-[#3A5F8F] transition-colors"
            onClick={handleQualiopiClick}
          >
            <span className="text-sm font-medium">{badgeText}</span>
            <img
              src={LogoQualiopi}
              alt="Certification Qualiopi"
              className="h-12 w-auto mt-2 self-center"
            />
          </div>
          <h1 className="text-3xl font-bold text-[#4A6FB3] mt-4">{title}</h1>
          <p className="text-[#4A6FB3] mt-2">{subtitle}</p>
        </div>

        <img src={HeroImage} alt="Hero" className="hidden md:block h-96 rounded-2xl hero_img" />
      </div>
    </section>
  );
};

export default HeroSection;