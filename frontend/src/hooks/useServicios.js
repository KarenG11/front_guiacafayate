import { useState, useEffect } from 'react';

export default function useServicios() {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/servicios');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setServicios(data);
      } catch (err) {
        console.error('Error al traer los servicios', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServicios();
  }, []);

  return { servicios, loading, error };
}
