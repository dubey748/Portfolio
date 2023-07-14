import React, { useRef } from "react";
import { FaCode, FaFileAlt, FaComments, FaEnvelope } from "react-icons/fa";

import {
  Navbar,
  Footer,
  ProjectCard,
  ContactForm,
  Feedback,
  Resume,
  Banner,
  ClientsInfo,
} from "../components";
import "./Home.css";

const Home = () => {
  const sections = {
    Projects: {
      label: "Projects",
      icon: <FaCode />,
      ref: useRef(),
    },

    Testimonials: {
      label: "Testimonials",
      icon: <FaComments />,
      ref: useRef(),
    },
    Resume: {
      label: "Resume",
      icon: <FaFileAlt />,
      ref: useRef(),
    },
    Contact: {
      label: "Contact",
      icon: <FaEnvelope />,
      ref: useRef(),
    },
  };
  const projects = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      thumbnailUrl: "https://via.placeholder.com/300",
      projectLink: "https://example.com/project1",
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      thumbnailUrl: "https://via.placeholder.com/300",
      projectLink: "https://example.com/project2",
    },
    {
      title: "Project 2",
      description: "Description for Project 3",
      thumbnailUrl: "https://via.placeholder.com/300",
      projectLink: "https://example.com/project3",
    },
    {
      title: "Project 2",
      description: "Description for Project 3",
      thumbnailUrl: "https://via.placeholder.com/300",
      projectLink: "https://example.com/project3",
    },
    {
      title: "Project 2",
      description: "Description for Project 3",
      thumbnailUrl: "https://via.placeholder.com/300",
      projectLink: "https://example.com/project3",
    },
    {
      title: "Project 2",
      description: "Description for Project 3",
      thumbnailUrl: "https://via.placeholder.com/300",
      projectLink: "https://example.com/project3",
    },
  ];
  return (
    <div className="home-container">
      <Banner />
      <Navbar sections={sections} />

      {/* Projects Section */}
      <div className="project-main">
        <section
          className="section projects"
          id="projects"
          ref={sections.Projects}
        >
          <div className="project-cards-container">
            {/* Render ProjectCard components with project data */}
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </div>

      <div className="feedback-main">
        <section
          className="section feedback"
          id="testimonials"
          ref={sections.Testimonials}
        >
          <div className="feedback-cards-container">
            <Feedback ClientsInfo={ClientsInfo} />
          </div>
        </section>
      </div>
      <div className="resume-main">
        <section className="section" ref={sections.Resume} id="resume">
          <Resume />
        </section>
      </div>

      {/* Contact Section */}
      <div className="contact-main">
  <section className="section contact" ref={sections.Contact} id="contact">
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.146834120089!2d83.36835007507995!3d27.120184751144425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996b35bc5f701d9%3A0xc04411bfe3c672aa!2sABhishek%20Dubey!5e0!3m2!1sen!2sin!4v1689367723091!5m2!1sen!2sin"
     
        
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div className="contact-details">
      <ContactForm />
    </div>
  </section>
</div>


      <Footer />
    </div>
  );
};

export default Home;
