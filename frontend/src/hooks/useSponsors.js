import { useState, useEffect } from 'react';

export default function useSponsors() {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/sponsors')
      .then(res => {
        if (!res.ok) throw new Error('Error al traer los sponsors');
        return res.json();
      })
      .then(data => {
        setSponsors(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { sponsors, loading, error };
}
