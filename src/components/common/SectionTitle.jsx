const SectionTitle = ({ supertitle, title, subtitle, className = "" }) => {
  return (
    <div className={`text-center ${className}`}>
      {supertitle && (
        <p className="text-[#4A6FB3] uppercase font-bold mb-2">{supertitle}</p>
      )}
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-gray-500 mb-8">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;