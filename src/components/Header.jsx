import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          PlataformaDevs
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <Link to="/developers" className="nav-link" onClick={() => setIsMenuOpen(false)}>Desarrolladores</Link>
          <Link to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Proyectos</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
        </nav>

        <div className="auth-section">
          {user ? (
            <div className="user-menu">
              <span className="user-name">Hola, {user.name}</span>
              {user.role === 'developer' && user.availability && (
                <span className={`availability-badge ${user.availability.toLowerCase()}`}>
                  {user.availability}
                </span>
              )}
              <button onClick={handleLogout} className="logout-btn">
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-btn" onClick={() => setIsMenuOpen(false)}>Iniciar Sesión</Link>
              <Link to="/register" className="register-btn" onClick={() => setIsMenuOpen(false)}>Registrarse</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 