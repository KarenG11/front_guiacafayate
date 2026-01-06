import { useState, useEffect } from 'react';
import { tipoCategoriaAPI } from '../services/api';

/**
 * Hook para obtener tipos de categorías
 * @param {Object} params - Parámetros de filtrado (ej: { categoria: 'Alojamiento' })
 * @returns {Object} { tipoCategorias, loading, error }
 */
export default function useTipoCategorias(params = {}) {
  const [tipoCategorias, setTipoCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTipoCategorias = async () => {
      try {
        const { data } = await tipoCategoriaAPI.getAll(params);
        setTipoCategorias(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTipoCategorias();
  }, [JSON.stringify(params)]);

  return { tipoCategorias, loading, error };
}
