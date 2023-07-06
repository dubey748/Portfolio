import React, { useRef } from 'react';
import {
  Navbar,
  Footer,
  ProjectCard,
  SkillBar,
  ContactForm,
  Testimonial
} from '../components';
import './Home.css'; 

const Home = () => {
  const sections = {
    Projects: useRef(null),
    Skills: useRef(null),
    Resume: useRef(null),
    Testimonials: useRef(null),
    Contact: useRef(null),
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
      <section className="section projects" id="projects">
        <h2>Projects</h2>
        <div className="project-cards-container">
          {/* Render ProjectCard components with project data */}
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
            // Using the index as the key
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills" ref={sections.skills} id="skills">
        
        <SkillBar />
      </section>

      {/* Resume Section */}

      {/* Testimonials Section */}
      <section className="section testimonials" ref={sections.testimonials} id="testimonials">
        <Testimonial/>
        {/* Your Testimonial components and testimonial details go here */}
      </section>

      {/* Contact Section */}
      <section className="section contact" ref={sections.contact} id="contact">
       <ContactForm/>
        {/* Your ContactForm component and contact details go here */}
      </section>

      <Footer />
    </div>
  );
};

export default Home;
