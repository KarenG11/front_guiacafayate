import { useState, useEffect } from "react";
import { lugaresAPI } from "../services/api";

export default function useAlojamientos() {
  const [alojamientos, setAlojamientos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlojamientos = async () => {
      try {
        const response = await lugaresAPI.getAll();
        if (response.success) {
          setAlojamientos(response.data || []);
        }
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
