// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // Import the custom Footer styles

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const yOffset = -80; // Adjust this value if you need to offset the scroll position
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>ABhishek Dubey</h3>
          <p>Frontend Engineer</p>
        </div>
        <div className="footer-links">
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('resume')}>Resume</button>
          <button onClick={() => scrollToSection('testimonials')}>Testimonials</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
        <div className="footer-contact">
          <p>Email: Dubeyabhishek748@gmail.com</p>
          <p>Phone: +91 9453424127</p>
        </div>
        <div className="footer-up-icon" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
