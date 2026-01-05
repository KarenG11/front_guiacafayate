import { useState } from 'react';
import "./CardGratis.css";
import { FaWhatsapp } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import ReadMore from '../../Shared/ReadMore';
import Modal from '../../Modal/Modal';

function CardGratis({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imgPath = item.imagen || item.image;
  const cleanPath = imgPath ? imgPath.replace(/^src\//, '/') : '/src/assets/publicidad/imagen1.png';

  return (
    <>
      <div className="card-gratis">
      {/* Imagen */}
      <div className="card-gratis-image">
        <img src={cleanPath} alt={item.nombre} />
        <h3 className="card-gratis-title">{item.nombre}</h3>
      </div>

      {/* Contenido */}
      <div className="card-gratis-content">
        
        {/* Botones */}
        <div className="card-gratis-actions">
          {item.whatsapp && (
            <a href={`https://wa.me/${item.whatsapp}`} className="btn-gratis btn-contact" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> Contactar
            </a>
          )}
          <button className="btn-gratis btn-more" onClick={() => setIsModalOpen(true)}>
            <BsEyeFill /> Ver más
          </button>
        </div>
      </div>
    </div>

    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} item={item} />
    </>
  );
}

export default CardGratis;
