import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">Guía Cafayate</span>
        </Link>

        {/* Botón hamburguesa para móvil */}
        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú de navegación */}
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/alojamientos" onClick={closeMenu}>
              Alojamientos
            </Link>
          </li>
          <li>
            <Link to="/restaurantes" onClick={closeMenu}>
              Restaurantes
            </Link>
          </li>
          <li>
            <Link to="/comercios" onClick={closeMenu}>
              Comercios
            </Link>
          </li>
          <li>
            <Link to="/servicios" onClick={closeMenu}>
              Servicios
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
