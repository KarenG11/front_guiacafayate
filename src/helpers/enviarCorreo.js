const URL_MAILER = import.meta.env.VITE_API_MAILER;

export const enviarCorreo = async (datos) => {
  try {
    const response = await fetch(URL_MAILER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};