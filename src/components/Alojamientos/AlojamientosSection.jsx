import Section from "./Section"; // tu Section original
import useAlojamientos from "../../hooks/useAlojamientos";

function AlojamientosSection() {
  const { alojamientos, loading, error } = useAlojamientos();

  if (loading) return <p>Cargando alojamientos...</p>;
  if (error) return <p>Error: {error}</p>;

  // Opcional: filtrar por subcategorías
  const categorias = ["Hoteles", "Cabañas", "Camping", "Alquileres Temporales"];
  const itemsPorCategoria = {};

  categorias.forEach((cat) => {
    itemsPorCategoria[cat] = alojamientos
      .filter(a => a.categoria === cat)
      .map(a => ({
        ...a,
        level: (() => {
          const raw = a.level || a.nivel || '';
          const s = raw.toString();
          return s ? (s.charAt(0).toUpperCase() + s.slice(1)) : '';
        })()
      }));
  });

  return (
    <>
      {categorias.map((cat) => (
        <Section key={cat} title={cat} items={itemsPorCategoria[cat]} />
      ))}
    </>
  );
}

export default AlojamientosSection;
