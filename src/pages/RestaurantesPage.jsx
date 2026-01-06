import Section from '../components/Section/Section';
import CategoryFilters from '../components/QuickAccess/CategoryFilters';
import useComercios from '../hooks/useComercios';

function RestaurantesPage() {
  const { comercios, loading, error } = useComercios();

  if (loading) return <p>Cargando restaurantes...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filtrar solo restaurantes
  const restaurantes = comercios.filter(c => {
    const campo = (c.categoria || c.rubro || c.tipo || c.tipo_comercio || '').toString().toLowerCase();
    return campo.includes('rest') || campo.includes('restaurant') || campo.includes('restaurante');
  });

  return (
    <main className="main-container">
      <CategoryFilters currentCategory="restaurantes" />
      <section id="restaurantes" className="section-group">
        <h2 className="section-group-title">Restaurantes</h2>
        <div className="section-group-container">
          {restaurantes.length > 0 ? (
            <Section title="Restaurantes" items={restaurantes} />
          ) : (
            <p>No hay restaurantes disponibles.</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default RestaurantesPage;
