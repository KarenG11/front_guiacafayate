import React, { useState } from 'react';
import { images } from '../../constants/images';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ImageGallery.css';

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-carousel">
      {images.length > 0 && (
        <>
          <img
            src={images[currentImageIndex].src}
            alt={`imagen-${images[currentImageIndex].id}`}
            className="gallery-image"
          />

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
    </div>
  );
};

export default ImageGallery;
