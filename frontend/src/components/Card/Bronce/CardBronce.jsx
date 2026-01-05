import { useState } from 'react';
import "./CardBronce.css"; 
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import ReadMore from '../../Shared/ReadMore';
import Modal from '../../Modal/Modal';

function CardBronce({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imgPath = item.imagen || item.image;
  const cleanPath = imgPath ? imgPath.replace(/^src\//, '/') : '/src/assets/publicidad/imagen1.png';

  return (
    <>
      <div className="card-bronce">
      {/* Imagen */}
      <div className="card-bronce-image">
        <img src={cleanPath} alt={item.nombre} />
        {item.verificado && (
          <span className="card-bronce-verified">
            <FaCheckCircle /> Verificado
          </span>
        )}
        <h3 className="card-bronce-title">{item.nombre}</h3>
      </div>

      {/* Contenido */}
      <div className="card-bronce-content">

        {item.direccion && (
          <p className="card-bronce-address">📍 {item.direccion}</p>
        )}

        {/* Botones */}
        <div className="card-bronce-actions">
          {item.whatsapp && (
            <a href={`https://wa.me/${item.whatsapp}`} className="btn-bronce btn-contact" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> Contactar
            </a>
          )}
          <button className="btn-bronce btn-more" onClick={() => setIsModalOpen(true)}>
            <BsEyeFill /> Ver más
          </button>
        </div>
      </div>
    </div>

    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} item={item} />
    </>
  );
}

export default CardBronce;

