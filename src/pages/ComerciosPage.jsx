import Section from '../components/Section/Section';
import CategoryFilters from '../components/QuickAccess/CategoryFilters';
import useComercios from '../hooks/useComercios';

function ComerciosPage() {
  const { comercios, loading, error } = useComercios();

  if (loading) return <p>Cargando comercios...</p>;
  if (error) return <p>Error: {error}</p>;

  // Agrupar comercios por subcategorías (excluyendo Restaurantes)
  const categoriasComercios = ["Bodegas", "Otros"];
  const comerciosPorCategoria = {};
  categoriasComercios.forEach(cat => (comerciosPorCategoria[cat] = []));

  comercios.forEach(c => {
    const campo = (c.categoria || c.rubro || c.tipo || c.tipo_comercio || '').toString().toLowerCase();
    // Excluir restaurantes
    if (campo.includes('rest') || campo.includes('restaurant') || campo.includes('restaurante')) {
      return;
    } else if (campo.includes('bodega') || campo.includes('vino')) {
      comerciosPorCategoria['Bodegas'].push(c);
    } else {
      comerciosPorCategoria['Otros'].push(c);
    }
  });

  return (
    <main className="main-container">
      <CategoryFilters currentCategory="comercios" />
      <section id="comercios" className="section-group">
        <h2 className="section-group-title">Comercios</h2>
        <div className="section-group-container">
          {categoriasComercios.map(cat => (
            comerciosPorCategoria[cat] && comerciosPorCategoria[cat].length > 0 ? (
              <Section key={cat} title={cat} items={comerciosPorCategoria[cat]} />
            ) : null
          ))}
        </div>
      </section>
    </main>
  );
}

export default ComerciosPage;
