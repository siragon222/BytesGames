import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://youtube.com" aria-label="Youtube"><FaYoutube /></a>
          <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
        </div>
        <div className="legal-links">
          <a href="/terminos-y-condiciones">Términos y Condiciones</a>
        </div>
        <p>© 2025 Bytesgames.</p>
      </div>
    </footer>
  );
};

export default Footer; 