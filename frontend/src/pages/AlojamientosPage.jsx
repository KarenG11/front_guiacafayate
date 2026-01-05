import CardEmpresa from '../components/Card/CardEmpresa';
import CategoryFilters from '../components/QuickAccess/CategoryFilters';
import useAlojamientos from '../hooks/useAlojamientos';

function AlojamientosPage() {
  const { alojamientos, loading, error } = useAlojamientos();

  if (loading) return <p>Cargando alojamientos...</p>;
  if (error) return <p>Error: {error}</p>;

  const categorias = ["Hoteles", "Cabañas", "Camping", "Alquileres Temporales", "Residenciales"];

  // Función para ordenar por nivel
  const ordenarPorNivel = (items) => {
    const ordenNiveles = { 'oro': 1, 'plata': 2, 'bronce': 3, 'gratis': 4 };
    return [...items].sort((a, b) => {
      const nivelA = (a.nivel || a.level || 'gratis').toString().toLowerCase();
      const nivelB = (b.nivel || b.level || 'gratis').toString().toLowerCase();
      return (ordenNiveles[nivelA] || 5) - (ordenNiveles[nivelB] || 5);
    });
  };

  return (
    <main className="main-container">
      <CategoryFilters currentCategory="alojamientos" />
      <section id="alojamientos" className="section-group">
        <h2 className="section-group-title">Alojamientos</h2>
        <div className="section-group-container">
          {categorias.map(categoria => {
            const items = alojamientos.filter(a => {
              const catDB = a.categoria?.toLowerCase() || '';
              const catFiltro = categoria.toLowerCase();
              // Manejar singular/plural (cabaña/cabañas, hotel/hoteles)
              return catDB === catFiltro || 
                     catDB === catFiltro.slice(0, -1) || // Quita 's' final
                     catDB + 's' === catFiltro; // Agrega 's'
            });

            if (items.length === 0) return null;

            return (
              <section key={categoria} className="section">
                <h2>{categoria}</h2>
                <div className="section-cards">
                  {ordenarPorNivel(items).map((item, index) => (
                    <CardEmpresa key={`${categoria}-${index}`} item={item} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default AlojamientosPage;
