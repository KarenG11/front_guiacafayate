import QuickAccessCard from './QuickAccessCard';
import useCategorias from '../../hooks/useCategorias';
import './QuickAccess.css';

function QuickAccess() {
  const { categorias, loading, error } = useCategorias();

  if (loading) {
    return (
      <section className="quick-access">
        <h2 className="quick-access-title">¿Qué estás buscando?</h2>
        <p>Cargando categorías...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="quick-access">
        <h2 className="quick-access-title">¿Qué estás buscando?</h2>
        <p>Error al cargar categorías</p>
      </section>
    );
  }

  return (
    <section className="quick-access">
      <h2 className="quick-access-title">¿Qué estás buscando?</h2>

      <div className="quick-access-grid">
        {categorias.map((category) => (
          <QuickAccessCard
            key={category._id}
            category={category}
          />
        ))}
      </div>
    </section>
  );
}

export default QuickAccess;
