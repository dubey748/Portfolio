import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Resume.css';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const [data, setData] = useState({});

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("https://abhishekbackend.onrender.com/resume");
      setData(response.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="resume">
      <header>
        <h1>{data.personalInfo?.name}</h1>
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
          <p>{data.summary}</p>
        </section>
      )}

      {activeSection === 'skills' && (
        <section className="resume-section">
          <ul>
            {data.skills && data.skills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </section>
      )}

      {activeSection === 'experience' && (
        <section className="resume-section experience-highlight">
          <h2>Experience</h2>
          {data.experience && data.experience.map((exp) => (
            <div key={exp._id}>
              <h3>{exp.title} - {exp.company}</h3>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {activeSection === 'education' && (
        <section className="resume-section">
          <h2>Education</h2>
          {data.education && data.education.map((edu) => (
            <div key={edu._id}>
              <h3>{edu.degree}</h3>
              <p>{edu.university}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Resume;
