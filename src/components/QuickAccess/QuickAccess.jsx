import QuickAccessCard from './QuickAccessCard';
import './QuickAccess.css';

function QuickAccess() {
  const categories = [
    {
      id: 'alojamientos',
      title: 'Alojamientos',
      icon: '🏨',
      description: 'Hoteles, cabañas y más',
      color: '#4A90E2',
      to: '/alojamientos'
    },
    {
      id: 'restaurantes',
      title: 'Restaurantes',
      icon: '🍽️',
      description: 'Gastronomía local',
      color: '#E24A4A',
      to: '/restaurantes'
    },
    {
      id: 'comercios',
      title: 'Comercios',
      icon: '🛍️',
      description: 'Bodegas y tiendas',
      color: '#50C878',
      to: '/comercios'
    },
    {
      id: 'servicios',
      title: 'Servicios',
      icon: '⚙️',
      description: 'Transporte y más',
      color: '#F2994A',
      to: '/servicios'
    }
  ];

  return (
    <section className="quick-access">
      <h2 className="quick-access-title">¿Qué estás buscando?</h2>
      <div className="quick-access-grid">
        {categories.map((category) => (
          <QuickAccessCard
            key={category.id}
            {...category}
          />
        ))}
      </div>
    </section>
  );
}

export default QuickAccess;
