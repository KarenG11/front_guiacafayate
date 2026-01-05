import { useState } from 'react';
import "./CardPlata.css";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import ReadMore from '../../Shared/ReadMore';
import Modal from '../../Modal/Modal';

function CardPlata({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imgPath = item.imagen || item.image;
  const cleanPath = imgPath ? imgPath.replace(/^src\//, '/') : '/src/assets/publicidad/imagen1.png';

  return (
    <>
      <div className="card-plata">
      {/* Imagen */}
      <div className="card-plata-image">
        <img src={cleanPath} alt={item.nombre} />
        {item.verificado && (
          <span className="card-plata-verified">
            <FaCheckCircle /> Verificado
          </span>
        )}
        <h3 className="card-plata-title">{item.nombre}</h3>
      </div>

      {/* Contenido */}
      <div className="card-plata-content">

        {item.direccion && (
          <p className="card-plata-address">📍 {item.direccion}</p>
        )}

        {/* Botones */}
        <div className="card-plata-actions">
          {item.whatsapp && (
            <a href={`https://wa.me/${item.whatsapp}`} className="btn-plata btn-contact" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> Contactar
            </a>
          )}
          <button className="btn-plata btn-more" onClick={() => setIsModalOpen(true)}>
            <BsEyeFill /> Ver más
          </button>
        </div>
      </div>
    </div>

    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} item={item} />
    </>
  );
}
export default CardPlata;

