import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectCard.css';

const ProjectPortfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://abhishekbackend.onrender.com/projects');
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleProjectClick = (projectLink) => {
    window.open(projectLink, '_blank');
  };

  return (
    <div className="project-portfolio">
      <Carousel showArrows={true} showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true} >
        {projects.map((project) => (
          <div className="project-slide" key={project.id} onClick={() => handleProjectClick(project.projectLink)}>
            <img className="project-image" src={project.thumbnailUrl} alt={project.title} />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectPortfolio;
