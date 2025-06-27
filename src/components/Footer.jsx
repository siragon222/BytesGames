import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
        </div>
        <div className="legal-links">
          <a href="/politica-de-privacidad">Política de Privacidad</a>
          <a href="/terminos-y-condiciones">Términos y Condiciones</a>
        </div>
        <p>© 2023 Bytesgames. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 