import Section from "../Section/Section";
import useComercios from "../../hooks/useComercios";

function ComercionesSection() {
  const { comercios, loading, error } = useComercios();

  if (loading) return <p>Cargando comercios...</p>;
  if (error) return <p>Error: {error}</p>;

  // Agrupar por categorías
  const categorias = [...new Set(comercios.map(c => c.categoria))];
  const itemsPorCategoria = {};

  categorias.forEach((cat) => {
    itemsPorCategoria[cat] = comercios.filter(c => c.categoria === cat);
  });

  return (
    <>
      {categorias.map((cat) => (
        <Section key={cat} title={cat} items={itemsPorCategoria[cat]} />
      ))}
    </>
  );
}

export default ComercionesSection;
