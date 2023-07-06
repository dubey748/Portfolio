import React, { useState } from 'react';
import './Resume.css'

const Resume = () => {
  const [activeSection, setActiveSection] = useState('summary');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="resume">
      <header>
        <h1>John Doe</h1>
        <p>Frontend Engineer</p>
      </header>
      <button className={activeSection === 'summary' ? 'active' : ''} onClick={() => handleButtonClick('summary')}>
        Summary
      </button>
      <button className={activeSection === 'skills' ? 'active' : ''} onClick={() => handleButtonClick('skills')}>
        Skills
      </button>
      <button className={activeSection === 'experience' ? 'active' : ''} onClick={() => handleButtonClick('experience')}>
        Experience
      </button>
      <button className={activeSection === 'education' ? 'active' : ''} onClick={() => handleButtonClick('education')}>
        Education
      </button>

      {activeSection === 'summary' && (
        <section className="resume-section">
          <h2>Summary</h2>
          <p>
            Results-oriented frontend engineer with 5+ years of experience
            building responsive and user-friendly web applications. Skilled in
            HTML, CSS, JavaScript, and modern frontend frameworks like React.
            Strong problem-solving abilities and a passion for creating
            high-quality code.
          </p>
        </section>
      )}

      {activeSection === 'skills' && (
        <section className="resume-section">
          <h2>Skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Responsive Design</li>
            <li>Version Control (Git)</li>
            <li>Testing (Jest, Enzyme)</li>
            <li>Debugging</li>
          </ul>
        </section>
      )}

      {activeSection === 'experience' && (
        <section className="resume-section experience-highlight">
          <h2>Experience</h2>
          <h3>Frontend Engineer - ABC Company</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fringilla congue consectetur. Morbi malesuada lectus at lobortis
            interdum. Nulla facilisi.
          </p>
          <h3>Web Developer - XYZ Agency</h3>
          <p>
            Duis et neque nec diam vestibulum placerat. Morbi sit amet nulla at
            tortor sodales vestibulum. Sed scelerisque.
          </p>
        </section>
      )}

      {activeSection === 'education' && (
        <section className="resume-section">
          <h2>Education</h2>
          <h3>Bachelor of Science in Computer Science</h3>
          <p>University of ABC</p>
          <h3>Frontend Web Development Certification</h3>
          <p>Online Course</p>
        </section>
      )}
    </div>
  );
};

export default Resume;
