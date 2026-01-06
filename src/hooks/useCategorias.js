import { useState, useEffect } from 'react';
import { categoriasAPI } from '../services/api';

export default function useCategorias(params = {}) {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await categoriasAPI.getAll(params);
        setCategorias(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [params]);

  return { categorias, loading, error };
}
