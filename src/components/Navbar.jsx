import React, { useState } from 'react';
import './Navbar.css'; // Import the custom Navbar styles
import { FaCode, FaFileAlt, FaComments, FaEnvelope } from 'react-icons/fa';

const Navbar = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');

  const handleItemClick = (section) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  const handleMouseEnter = (section) => {
    setActiveSection(section);
  };

  const handleMouseLeave = () => {
    setActiveSection('');
  };

  const scrollToSection = (section) => {
    const targetSection = sections[section];
    if (targetSection) {
      targetSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
    // Alternatively, I can use the following line to refresh the page:
    // window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={handleLogoClick}>
        <img
          src="https://avatars.githubusercontent.com/u/65311526?v=4"
          alt="ABhishek Dubey"
        />
      </div>
      <ul className="nav-links">
        {Object.keys(sections).map((sectionKey) => (
          <li
            key={sectionKey}
            className={activeSection === sectionKey ? 'active' : ''}
            onClick={() => handleItemClick(sectionKey)}
            onMouseEnter={() => handleMouseEnter(sectionKey)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="icon-wrapper">
              {sections[sectionKey].icon}
              {activeSection === sectionKey && (
                <span className="section-name">{sectionKey}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
