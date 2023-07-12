import React, { useRef } from 'react';
import { FaCode, FaFileAlt, FaComments, FaEnvelope } from 'react-icons/fa';

import {
  Navbar,
  Footer,
  ProjectCard,
  ContactForm,
  Testimonial,
  Resume
} from '../components';
import './Home.css'; 


const Home = () => {
  const sections = {
    Projects: {
      label: 'Projects',
      icon: <FaCode />,
      ref: useRef()
    },
    Resume: {
      label: 'Resume',
      icon: <FaFileAlt />,
      ref: useRef()
    },
    Testimonials: {
      label: 'Testimonials',
      icon: <FaComments />,
      ref: useRef()
    },
    Contact: {
      label: 'Contact',
      icon: <FaEnvelope />,
      ref: useRef()
    },
  };
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      thumbnailUrl: 'https://via.placeholder.com/300',
      projectLink: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      thumbnailUrl: 'https://via.placeholder.com/300',
      projectLink: 'https://example.com/project2',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 3',
      thumbnailUrl: 'https://via.placeholder.com/300',
      projectLink: 'https://example.com/project3',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 3',
      thumbnailUrl: 'https://via.placeholder.com/300',
      projectLink: 'https://example.com/project3',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 3',
      thumbnailUrl: 'https://via.placeholder.com/300',
      projectLink: 'https://example.com/project3',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 3',
      thumbnailUrl: 'https://via.placeholder.com/300',
      projectLink: 'https://example.com/project3',
    },
    
  ];
  return (
    <div className="home-container">
      <Navbar sections={sections} />

      {/* Projects Section */}
      <section className="section projects" id="projects" ref={sections.Projects}>
        <h1 className='heading'>Projects</h1>
        <div className="project-cards-container">
          {/* Render ProjectCard components with project data */}
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>


      {/* Resume Section */}

      {/* Testimonials Section */}
      <section className="section testimonials" ref={sections.Testimonials} id="testimonials">
      <h1 className='heading'>Testimonials</h1>
        <Testimonial/>
        
      </section>

      <section className="section" ref={sections.Resume} id="resume">
      <h1 className='heading'>Resume</h1>
        <Resume/>
        
      </section>
      
      

      {/* Contact Section */}
      <section className="section contact" ref={sections.Contact} id="contact">
     
      <h1 className='heading'>Reach to me</h1>
       <ContactForm/>
      
      </section>

      <Footer />
    </div>
  );
};

export default Home;
