import { useState, useEffect } from 'react';
import { lugaresAPI } from '../services/api';

export default function useSponsors() {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await lugaresAPI.getSponsors();
        if (response.success) {
          setSponsors(response.data || []);
        }
      } catch (err) {
        console.error('Error al traer los sponsors', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  return { sponsors, loading, error };
}
