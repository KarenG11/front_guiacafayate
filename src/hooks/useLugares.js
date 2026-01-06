import { useState, useEffect } from 'react';
import { lugaresAPI } from '../services/api';

export default function useLugares(params = {}) {
  const [lugares, setLugares] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLugares = async () => {
    try {
      const { data } = await lugaresAPI.getAll();
      setLugares(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLugares();
  }, [params]);

  return { lugares, loading, error, refetch: fetchLugares };
}
