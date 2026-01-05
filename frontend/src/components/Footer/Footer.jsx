import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo y Redes Sociales */}
        <div className="footer-section footer-brand">
          <h3 className="footer-logo">Guía Cafayate</h3>
          <div className="footer-social">
            <a 
              href="https://www.instagram.com/guiacafayate?igsh=MWNtbDdidjViMTB0Yg==" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        {/* Enlaces de Navegación */}
        <div className="footer-section footer-links">
          <h4 className="footer-title">Explora</h4>
          <ul>
            <li><Link to="/alojamientos">Alojamientos</Link></li>
            <li><Link to="/restaurantes">Restaurantes</Link></li>
            <li><Link to="/comercios">Comercios</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
          </ul>
        </div>

        {/* Ubicación */}
        <div className="footer-section footer-contact">
          <h4 className="footer-title">Ubicación</h4>
          <p>
            <i className="bi bi-geo-alt-fill"></i> Cafayate, Salta
          </p>
        </div>
      </div>

      {/* Derechos Reservados */}
      <div className="footer-bottom">
        <p>© {currentYear} Guía Cafayate. Todos los derechos reservados.</p>
        <p className="footer-credits">
          Creado por{' '}
          <a 
            href="https://www.linkedin.com/in/karen-gutierrez-429b60304/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Karen Gutierrez
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

