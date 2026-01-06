import { useState, useEffect } from 'react';
import { lugaresAPI } from '../services/api';

export default function useComercios(categoriaId = null) {
  const [comercios, setComercios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComercios = async () => {
      try {
        const params = categoriaId ? { categoria: categoriaId } : {};
        const response = await lugaresAPI.getAll(params);
        if (response.success) {
          // Filtrar por nombre de categoría si no hay ID específico
          let lugares = response.data || [];
          if (!categoriaId) {
            // Filtrar por nombres de categoría relacionados a comercios
            const categoriasComercios = ['comercio', 'tienda', 'negocio', 'local'];
            lugares = lugares.filter(lugar => 
              lugar.categoria?.nombre && 
              categoriasComercios.some(cat => 
                lugar.categoria.nombre.toLowerCase().includes(cat)
              )
            );
          }
          setComercios(lugares);
        }
      } catch (err) {
        console.error('Error al traer los comercios', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComercios();
  }, [categoriaId]);

  return { comercios, loading, error };
}
