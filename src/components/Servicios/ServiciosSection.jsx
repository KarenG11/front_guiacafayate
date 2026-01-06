import Section from "../Section/Section";
import useServicios from "../../hooks/useServicios";

function ServiciosSection() {
  const { servicios, loading, error } = useServicios();

  if (loading) return <p>Cargando servicios...</p>;
  if (error) return <p>Error: {error}</p>;

  // Agrupar por categorías
  const categorias = [...new Set(servicios.map(s => s.categoria))];
  const itemsPorCategoria = {};

  categorias.forEach((cat) => {
    itemsPorCategoria[cat] = servicios.filter(s => s.categoria === cat);
  });

  return (
    <>
      {categorias.map((cat) => (
        <Section key={cat} title={cat} items={itemsPorCategoria[cat]} />
      ))}
    </>
  );
}

export default ServiciosSection;
