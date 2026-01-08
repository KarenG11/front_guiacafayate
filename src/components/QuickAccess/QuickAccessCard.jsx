import { Link } from 'react-router-dom';
import './QuickAccessCard.css';

function QuickAccessCard({ category }) {

  const rutaCategoria = category.nombre
    .toLowerCase()
    .split(' ')[0]; // toma solo la primera palabra

  return (
    <Link 
      to={`/${rutaCategoria}`}
      className="quick-access-card"
      style={{ '--card-color': category.color }}
    >
      <div className="quick-access-card-icon">
        {category.icono}
      </div>
      <h3 className="quick-access-card-title">{category.nombre}</h3>
      <p className="quick-access-card-description">
        {category.descripcion_breve}
      </p>
      <div className="quick-access-card-arrow">→</div>
    </Link>
  );
}

export default QuickAccessCard;
