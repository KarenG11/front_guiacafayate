import { useState, useEffect } from 'react';

export default function useComercios() {
  const [comercios, setComercios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComercios = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/comercios');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setComercios(data);
      } catch (err) {
        console.error('Error al traer los comercios', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComercios();
  }, []);

  return { comercios, loading, error };
}
