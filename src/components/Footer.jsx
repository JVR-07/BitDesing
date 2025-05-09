import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 DevPlatform. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/privacy">Privacidad</a>
          <a href="/terms">Términos</a>
          <a href="/help">Ayuda</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
