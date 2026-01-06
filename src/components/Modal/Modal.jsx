import { useState } from 'react';
import './Modal.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

function Modal({ isOpen, onClose, item }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !item) return null;

  // Usar el array 'imagenes' de la DB si existe, sino usar 'imagen'
  const images = item.imagenes && Array.isArray(item.imagenes) && item.imagenes.length > 0
    ? item.imagenes
    : (item.imagen ? [item.imagen] : []);
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const cleanPath = (path) => {
    if (!path) return '/src/assets/publicidad/imagen1.png';
    // Remover cualquier prefijo de /images o images/
    const cleaned = path.replace(/^\/images\//, '').replace(/^images\//, '');
    return cleaned;
  };

  const getImageUrl = (path) => {
    const cleaned = cleanPath(path);
    return cleaned.startsWith('http') ? cleaned : `http://localhost:5000/images/${cleaned}`;
  };

  const handleGoogleMaps = () => {
    if (item.direccion) {
      const query = encodeURIComponent(`${item.nombre}, ${item.direccion}, Cafayate, Salta`);
      window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <i className="bi bi-x-lg"></i>
        </button>

        {/* Carrusel de imágenes */}
        <div className="modal-carousel">
          {images.length > 0 && (
            <>
              <img 
                src={getImageUrl(images[currentImageIndex])} 
                alt={item.nombre} 
                className="modal-image"
              />
              {hasMultipleImages && (
                <>
                  <button className="carousel-btn prev" onClick={prevImage}>
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  <button className="carousel-btn next" onClick={nextImage}>
                    <i className="bi bi-chevron-right"></i>
                  </button>
                  <div className="carousel-indicators">
                    {images.map((_, index) => (
                      <span
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Información */}
        <div className="modal-info">
          <h2 className="modal-title">{item.nombre}</h2>

          {item.descripcion && (
            <p className="modal-description">{item.descripcion}</p>
          )}

          {item.direccion && (
            <div className="modal-address">
              <FaMapMarkerAlt />
              <span>{item.direccion}</span>
              <button className="maps-link" onClick={handleGoogleMaps}>
                Ver en Google Maps
              </button>
            </div>
          )}

          {/* Redes sociales y contacto */}
          <div className="modal-actions">
            {(item.redesSociales.instagram || item.redesSociales.facebook || item.sitioWeb || item.website) && (
              <div className="modal-social">
                {item.redesSociales.instagram && (
                  <a
                    href={item.redesSociales.instagram.startsWith('http') ? item.redesSociales.instagram : `https://www.instagram.com/${item.redesSociales.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon instagram"
                    title="Instagram"
                  >
                    <FaInstagram />
                  </a>
                )}
                {item.redesSociales.facebook && (
                  <a
                    href={item.redesSociales.facebook.startsWith('http') ? item.redesSociales.facebook : `https://www.facebook.com/${item.redesSociales.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon facebook"
                    title="Facebook"
                  >
                    <FaFacebook />
                  </a>
                )}
                {(item.sitioWeb || item.website) && (
                  <a
                    href={item.sitioWeb || item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon website"
                    title="Sitio Web"
                  >
                    <FaGlobe />
                  </a>
                )}
              </div>
            )}

            {item?.whatsApp && (
              <a
                href={`https://wa.me/${item.whatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn whatsapp"
              >
                <FaWhatsapp /> Contactar por WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
