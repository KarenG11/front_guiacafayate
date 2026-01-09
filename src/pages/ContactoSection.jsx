import { useForm } from "react-hook-form";
import "./contacto.css";
import { enviarCorreo } from "../helpers/enviarCorreo";
import { useState } from "react";

function ContactoSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleContact = async (data) => {
    try {
      await enviarCorreo(data);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
    reset();
  };

  return (
    <section className={`contacto-section`}>
      <div className="contacto-container">
        <div className="contacto-texto">
          <h2>¿Tenés un emprendimiento en Cafayate?</h2>
          <p>
            Sumá tu alojamiento, restaurante, comercio o servicio a
            <strong> Guía Cafayate</strong> y llegá a turistas que buscan dónde
            ir, dónde comer y qué hacer hoy.
          </p>
          <p>
            Publicar tu negocio es simple, rápido y te conecta directamente con
            visitantes reales.
          </p>
        </div>

        <form className="contacto-form" onSubmit={handleSubmit(handleContact)}>
          <input
            type="text"
            placeholder="Nombre y apellido"
            {...register("nombre", {
              required: "El nombre es obligatorio",
              maxLength: {
                value: 25,
                message:
                  "El nombre y apellido no puede exceder los 25 caracteres",
              },
              minLength: {
                value: 8,
                message: "El nombre y apellido debe tener al menos 8 caracteres",
              },
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/i,
                message:
                  "El nombre y apellido solo puede contener letras y espacios",
              },
            })}
          />
          {errors.nombre && (
            <p className="error-message">{errors.nombre.message}</p>
          )}
          <input
            type="text"
            placeholder="Nombre del lugar o emprendimiento"
            {...register("lugar", {
              required: "El lugar es obligatorio",
              maxLength: {
                value: 25,
                message: "El lugar no puede exceder los 25 caracteres",
              },
              minLength: {
                value: 8,
                message: "El lugar debe tener al menos 8 caracteres",
              },
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/i,
                message: "El lugar solo puede contener letras y espacios",
              },
            })}
          />
          {errors.lugar && (
            <p className="error-message">{errors.lugar.message}</p>
          )}

          <select {...register("rubro", { required: true })}>
            <option value="">Rubro</option>
            <option>Alojamiento</option>
            <option>Restaurante</option>
            <option>Comercio</option>
            <option>Servicio</option>
            <option>Otro</option>
          </select>
          <input
            type="email"
            placeholder="Email"
            title="Escribe tu direccion de correo electronico"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "El email no es válido",
              },
              minLength: {
                value: 4,
                message: "El email debe tener al menos 4 caracteres",
              },
              maxLength: {
                value: 265,
                message: "El email no puede exceder los 265 caracteres",
              },
            })}
          />
          <input
            type="whatsapp"
            placeholder="WhatsApp"
            title="Escribe tu numero de WhatsApp"
            {...register("whatsapp", {
              required: "El WhatsApp es obligatorio",
              // pattern: {
              //   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              //   message: "El WhatsApp no es válido",
              // },
              minLength: {
                value: 10,
                message: "El WhatsApp debe tener al menos 10 caracteres",
              },
              maxLength: {
                value: 15,
                message: "El WhatsApp no puede exceder los 15 caracteres",
              },
            })}
          />
          <textarea
            placeholder="Contanos brevemente sobre tu emprendimiento"
            rows="4"
            title="Escribe tu mensaje"
            {...register("mensaje", {
              required: "El mensaje es obligatorio",
              minLength: {
                value: 25,
                message: "El mensaje debe tener al menos 25 caracteres",
              },
              maxLength: {
                value: 500,
                message: "El mensaje no puede exceder los 500 caracteres",
              },
            })}
          ></textarea>
          {errors.mensaje && (
            <p className="error-message">{errors.mensaje.message}</p>
          )}

          <button>Quiero aparecer en la guía</button>
        </form>
      </div>
    </section>
  );
}

export default ContactoSection;
