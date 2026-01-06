import CardEmpresa from '../components/Card/CardEmpresa';
import CategoryFilters from '../components/QuickAccess/CategoryFilters';
import useLugares from '../hooks/useLugares';
import useTipoCategorias from '../hooks/useTipoCategorias';
import './AlojamientosPage.css';

function AlojamientosPage() {
  const { lugares, loading: loadingLugares, error: errorLugares } = useLugares();
  const { tipoCategorias, loading: loadingTipos, error: errorTipos } = useTipoCategorias();

  const loading = loadingLugares || loadingTipos;
  const error = errorLugares || errorTipos;

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-spinner"></div>
        <p className="loader-text">Cargando alojamientos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-text">⚠️ Error: {error}</p>
      </div>
    );
  }

  // Filtrar lugares que pertenecen a la categoría "Alojamiento"
  const lugaresAlojamiento = lugares.filter(lugar => {
    const categoriaNombre = lugar.categoria?.nombre || '';
    return categoriaNombre.toLowerCase().includes('alojamiento');
  });

  // Función para ordenar por nivel (oro, plata, bronce, gratis)
  const ordenNivel = { oro: 1, plata: 2, bronce: 3, gratis: 4 };
  const ordenarPorNivel = (lugares) => {
    return lugares.sort((a, b) => {
      const nivelA = (a.nivel || a.level || 'gratis').toLowerCase();
      const nivelB = (b.nivel || b.level || 'gratis').toLowerCase();
      return (ordenNivel[nivelA] || 5) - (ordenNivel[nivelB] || 5);
    });
  };

  // Agrupar lugares por tipo de categoría
  const lugaresPorTipo = {};
  
  // Recorrer todos los tipos de categoría
  tipoCategorias.forEach(tipo => {
    // Filtrar lugares que tienen este tipo_id
    const lugaresDelTipo = lugaresAlojamiento.filter(lugar => {
      // Comparar el id del tipo con el tipo_id del lugar
      return lugar.tipo_id === tipo._id || lugar.tipoCategoria === tipo._id;
    });

    // Solo agregar al objeto si hay lugares de este tipo, ordenados por nivel
    if (lugaresDelTipo.length > 0) {
      lugaresPorTipo[tipo.nombre] = ordenarPorNivel(lugaresDelTipo);
    }
  });

  // Si no hay agrupación por tipos, mostrar todos los lugares juntos
  const hayAgrupacion = Object.keys(lugaresPorTipo).length > 0;

  return (
    <main className="main-container">
      <CategoryFilters currentCategory="alojamientos" />

      <section id="alojamientos" className="section-group">
        <h2 className="section-group-title">Alojamientos</h2>

        {hayAgrupacion ? (
          // Mostrar agrupados por tipo
          Object.entries(lugaresPorTipo).map(([tipo, lugares]) => (
            <div key={tipo} className="section-group-container">
              <h3 className="section-group-subtitle">{tipo}</h3>

              <div className="cards-container">
                {lugares.map(lugar => (
                  <CardEmpresa key={lugar._id} item={lugar} />
                ))}
              </div>
            </div>
          ))
        ) : (
          // Si no hay tipos, mostrar todos los alojamientos sin agrupar, ordenados por nivel
          <div className="section-group-container">
            <div className="cards-container">
              {ordenarPorNivel([...lugaresAlojamiento]).map(lugar => (
                <CardEmpresa key={lugar._id} item={lugar} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default AlojamientosPage;
