import React, { useState } from 'react';
import './Navbar.css'; // Import the custom Navbar styles

const Navbar = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');

  const handleItemClick = (section) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  const scrollToSection = (section) => {
    const targetSection = sections[section];
    if (targetSection) {
      targetSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">ABhishek Dubey</div>
      <ul className="nav-links">
        {Object.keys(sections).map((sectionKey) => (
          <li
            key={sectionKey}
            className={activeSection === sectionKey ? 'active' : ''}
            onClick={() => handleItemClick(sectionKey)}
          >
            {sectionKey}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;