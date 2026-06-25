import { Link } from 'react-router-dom';

const Breadcrumb = ({ currentPage }) => {
  return (
    <nav aria-label="breadcrumb" className="mb-8">
      <ol className="list-none p-0 m-0 inline-flex space-x-4">
        <li>
          <Link to="/" className="text-[#1A1A1A] hover:text-[#4A6FB3]">Accueil</Link>
        </li>
        <li aria-current="page" className="text-gray-500">{currentPage}</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;