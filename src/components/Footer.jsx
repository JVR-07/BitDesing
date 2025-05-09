import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Solo mostrar el footer cuando estamos en la parte inferior
      if (currentScrollY + windowHeight >= documentHeight - 10) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <footer className={`footer ${!isFooterVisible ? 'hidden' : ''}`}>
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
