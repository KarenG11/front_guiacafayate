import { Link } from 'react-router-dom';
import './CategoryFilters.css';

function CategoryFilters({ currentCategory }) {
  const categories = [
    {
      id: 'alojamientos',
      title: 'Alojamientos',
      icon: '🏨',
      to: '/alojamientos'
    },
    {
      id: 'restaurantes',
      title: 'Restaurantes',
      icon: '🍽️',
      to: '/restaurantes'
    },
    {
      id: 'comercios',
      title: 'Comercios',
      icon: '🛍️',
      to: '/comercios'
    },
    {
      id: 'servicios',
      title: 'Servicios',
      icon: '⚙️',
      to: '/servicios'
    }
  ];

  return (
    <div className="category-filters">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={category.to}
          className={`category-filter ${currentCategory === category.id ? 'active' : ''}`}
        >
          <span className="category-filter-icon">{category.icon}</span>
          <span className="category-filter-title">{category.title}</span>
        </Link>
      ))}
    </div>
  );
}

export default CategoryFilters;
