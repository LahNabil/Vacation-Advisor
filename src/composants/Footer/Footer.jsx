// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerrr">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="logo">Your Logo</h2>
            <p>
              A wonderful place to stay and enjoy delightful meals. Explore the world with us.
            </p>
            <div className="contact">
              <span>Email: info@example.com</span>
              <span>Phone: +123 456 7890</span>
            </div>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/hotels">Hotels</a></li>
              <li><a href="/restaurants">Restaurants</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section social">
            <h2>Follow Us</h2>
            <div className="social-icons">
            <a href="https://web.facebook.com" target="_blank" rel="noopener noreferrer">Facebook </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
