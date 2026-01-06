import { useState } from 'react';
import "./CardEmpresa.css";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import Modal from '../Modal/Modal';

function CardEmpresa({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imgPath = item.imagen || item.image;
  const cleanPath = imgPath ? imgPath.replace(/^src\//, '/') : '/src/assets/publicidad/imagen1.png';
  
  // Determinar el nivel (normalizado a minúsculas)
  const nivel = (item.nivel || item.level || 'gratis').toString().toLowerCase();

  return (
    <>
      <div className={`card-empresa card-empresa--${nivel}`}>
        {/* Imagen */}
        <div className="card-empresa__image">
          <img src={cleanPath} alt={item.nombre} />
          {(item.verificado === true || item.verificado === 1) && (
            <span className="card-empresa__verified">
              <FaCheckCircle /> Verificado
            </span>
          )}
          <h3 className="card-empresa__title">{item.nombre}</h3>
        </div>

        {/* Contenido */}
        <div className="card-empresa__content">
          {item.direccion && (
            <p className="card-empresa__address">📍 {item.direccion}</p>
          )}

          {/* Botones */}
          <div className="card-empresa__actions">
            {item.whatsApp && (
              <a 
                href={`https://wa.me/${item.whatsApp}`} 
                className="card-empresa__btn card-empresa__btn--contact" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> Contactar
              </a>
            )}
            <button 
              className="card-empresa__btn card-empresa__btn--more" 
              onClick={() => setIsModalOpen(true)}
            >
              <BsEyeFill /> Ver más
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} item={item} />
    </>
  );
}

export default CardEmpresa;
