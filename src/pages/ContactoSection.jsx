import './contacto.css';

function ContactoSection({ isPage = false }) {
  return (
    <section className={`contacto-section ${isPage ? 'page' : ''}`}>
      <div className="contacto-container">
        <div className="contacto-texto">
          <h2>¿Tenés un emprendimiento en Cafayate?</h2>
          <p>
            Sumá tu alojamiento, restaurante, comercio o servicio a 
            <strong> Guía Cafayate</strong> y llegá a turistas que buscan 
            dónde ir, dónde comer y qué hacer hoy.
          </p>
          <p>
            Publicar tu negocio es simple, rápido y te conecta directamente
            con visitantes reales.
          </p>
        </div>

        <form className="contacto-form">
          <input type="text" placeholder="Nombre del lugar" required />
          
          <select required>
            <option value="">Rubro</option>
            <option>Alojamiento</option>
            <option>Restaurante</option>
            <option>Comercio</option>
            <option>Servicio</option>
            <option>Otro</option>
          </select>

          <input type="tel" placeholder="WhatsApp o teléfono" required />
          <input type="email" placeholder="Email" required />

          <textarea
            placeholder="Contanos brevemente sobre tu emprendimiento"
            rows="4"
          ></textarea>

          <button type="submit">
            Quiero aparecer en la guía
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactoSection;
