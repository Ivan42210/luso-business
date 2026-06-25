// components/services/ServiceCategoryCard.jsx
const ServiceCategoryCard = ({ category }) => {
  const { icon: Icon, title, services } = category;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-[#4A6FB3]/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-[#4A6FB3]" />
        </div>
        <h3 className="text-xl font-bold text-[#1A1A1A]">{title}</h3>
      </div>
      <ul className="space-y-2 text-sm text-gray-600">
        {services.map((service, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-[#4A6FB3] font-bold">•</span>
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCategoryCard;