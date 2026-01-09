const URL_MAILER = import.meta.env.VITE_API_MAILER;

export const enviarCorreo = async (datos) => {
  const response = await fetch(URL_MAILER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({})); // Intenta obtener detalles del error
    throw new Error(errorData.message || `Error del servidor: ${response.status}`);
  }
};