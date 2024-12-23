import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand" onClick={closeMenu}>
        LB
      </Link>
      
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <Link 
          to="/" 
          className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Inicio
        </Link>
        <Link 
          to="/about" 
          className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Sobre Mí
        </Link>
        <Link 
          to="/projects" 
          className={`nav-item ${location.pathname === '/projects' ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Proyectos
        </Link>
        <Link 
          to="/contact" 
          className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Contacto
        </Link>
        <Link 
          to="/admin/projects" 
          className={`nav-item ${location.pathname.startsWith('/admin') ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Admin
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
