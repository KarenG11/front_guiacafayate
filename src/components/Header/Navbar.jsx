import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsCategoriesOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">Guía Cafayate</span>
        </Link>

        {/* Botón hamburguesa */}
        <button
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú */}
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>

          <li className={`has-dropdown ${isCategoriesOpen ? 'active' : ''}`}>
            <button
              className="dropdown-toggle"
              onClick={toggleCategories}
              type="button"
            >
              Categorías
            </button>

            <ul className={`dropdown ${isCategoriesOpen ? 'active' : ''}`}>
              <li><Link to="/alojamientos" onClick={closeMenu}>Alojamientos</Link></li>
              <li><Link to="/restaurantes" onClick={closeMenu}>Restaurantes</Link></li>
              <li><Link to="/comercios" onClick={closeMenu}>Comercios</Link></li>
              <li><Link to="/servicios" onClick={closeMenu}>Servicios</Link></li>
            </ul>
          </li>

          <li>
            <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
