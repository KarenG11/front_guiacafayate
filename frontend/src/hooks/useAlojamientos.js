import { useState, useEffect } from "react";

export default function useAlojamientos() {
  const [alojamientos, setAlojamientos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlojamientos = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/alojamientos");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setAlojamientos(data);
      } catch (err) {
        console.error("Error al traer los alojamientos", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlojamientos();
  }, []);

  return { alojamientos, loading, error };
}
