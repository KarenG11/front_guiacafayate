import 'bootstrap-icons/font/bootstrap-icons.css';
import './Banner.css';

function Banner() {
  const scrollToCards = () => {
    const element = document.querySelector('.gallery-overlay-home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="banner">
      <div className="banner-overlay">
        <div className="banner-content">
          <h1 className="banner-title">Guía Digital de Cafayate</h1>
          <p className="banner-subtitle">
            Alojamientos, gastronomía, comercios, servicios y todo lo que necesitas para disfrutar Cafayate
          </p>
          <button className="banner-arrow" onClick={scrollToCards} aria-label="Ir a secciones">
            <i className="bi bi-chevron-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
