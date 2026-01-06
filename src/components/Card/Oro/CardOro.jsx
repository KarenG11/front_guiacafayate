import { useState } from 'react';
import "./CardOro.css";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import ReadMore from '../../Shared/ReadMore';
import Modal from '../../Modal/Modal';

function CardOro({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imgPath = item.imagen || item.image;
  const cleanPath = imgPath ? imgPath.replace(/^src\//, '/') : '/src/assets/publicidad/imagen1.png';

  return (
    <>
      <div className="card-oro">
      {/* Imagen */}
      <div className="card-oro-image">
        <img src={cleanPath} alt={item.nombre} />
        {item.verificado && (
          <span className="card-oro-verified">
            <FaCheckCircle /> Verificado
          </span>
        )}
        <h3 className="card-oro-title">{item.nombre}</h3>
      </div>

      {/* Contenido */}
      <div className="card-oro-content">

        {item.direccion && (
          <p className="card-oro-address">📍 {item.direccion}</p>
        )}

        {/* Botones */}
        <div className="card-oro-actions">
          {item.whatsapp && (
            <a href={`https://wa.me/${item.whatsapp}`} className="btn-oro btn-contact" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> Contactar
            </a>
          )}
          <button className="btn-oro btn-more" onClick={() => setIsModalOpen(true)}>
            <BsEyeFill /> Ver más
          </button>
        </div>
      </div>
    </div>

    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} item={item} />
    </>
  );
}

export default CardOro;
