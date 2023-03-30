import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Want to learn more? <Link to="/contact">Contact Us Here!</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
