import { Link } from 'react-router-dom';
import './QuickAccessCard.css';

function QuickAccessCard({ title, icon, description, color, to }) {
  return (
    <Link 
      to={to}
      className="quick-access-card" 
      style={{ '--card-color': color }}
    >
      <div className="quick-access-card-icon">
        {icon}
      </div>
      <h3 className="quick-access-card-title">{title}</h3>
      <p className="quick-access-card-description">{description}</p>
      <div className="quick-access-card-arrow">→</div>
    </Link>
  );
}

export default QuickAccessCard;
