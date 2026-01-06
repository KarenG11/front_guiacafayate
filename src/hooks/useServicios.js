import { useState, useEffect } from 'react';
import { lugaresAPI } from '../services/api';

export default function useServicios(categoriaId = null) {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const params = categoriaId ? { categoria: categoriaId } : {};
        const response = await lugaresAPI.getAll(params);
        if (response.success) {
          // Filtrar por nombre de categoría si no hay ID específico
          let lugares = response.data || [];
          if (!categoriaId) {
            // Filtrar por nombres de categoría relacionados a servicios
            const categoriasServicios = ['servicio', 'transporte', 'remis', 'taxi', 'tour', 'excursión'];
            lugares = lugares.filter(lugar => 
              lugar.categoria?.nombre && 
              categoriasServicios.some(cat => 
                lugar.categoria.nombre.toLowerCase().includes(cat)
              )
            );
          }
          setServicios(lugares);
        }
      } catch (err) {
        console.error('Error al traer los servicios', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServicios();
  }, [categoriaId]);

  return { servicios, loading, error };
}
