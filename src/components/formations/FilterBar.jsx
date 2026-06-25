const FilterBar = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategoryChange(category)}
          className={`${
            activeCategory === category
              ? 'bg-[#4A6FB3] text-white'
              : 'bg-white border hover:border-[#4A6FB3]'
          } px-4 py-2 rounded-lg transition-colors`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;