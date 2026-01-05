import Section from '../components/Section/Section';
import CategoryFilters from '../components/QuickAccess/CategoryFilters';
import useServicios from '../hooks/useServicios';

function ServiciosPage() {
  const { servicios, loading, error } = useServicios();

  if (loading) return <p>Cargando servicios...</p>;
  if (error) return <p>Error: {error}</p>;

  // Agrupar servicios por subcategorías
  const categoriasServicios = ["Remises", "Museos", "Otros"];
  const serviciosPorCategoria = {};
  categoriasServicios.forEach(cat => (serviciosPorCategoria[cat] = []));

  servicios.forEach(s => {
    const campoS = (s.categoria || s.rubro || s.tipo || s.tipo_servicio || s.nombre || '').toString().toLowerCase();
    if (campoS.includes('remis') || campoS.includes('taxi') || campoS.includes('transporte')) {
      serviciosPorCategoria['Remises'].push(s);
    } else if (campoS.includes('muse') || campoS.includes('museo') || campoS.includes('museos')) {
      serviciosPorCategoria['Museos'].push(s);
    } else {
      serviciosPorCategoria['Otros'].push(s);
    }
  });

  return (
    <main className="main-container">
      <CategoryFilters currentCategory="servicios" />
      <section id="servicios" className="section-group">
        <h2 className="section-group-title">Servicios</h2>
        <div className="section-group-container">
          {categoriasServicios.map(cat => (
            serviciosPorCategoria[cat] && serviciosPorCategoria[cat].length > 0 ? (
              <Section key={cat} title={cat} items={serviciosPorCategoria[cat]} />
            ) : null
          ))}
        </div>
      </section>
    </main>
  );
}

export default ServiciosPage;
