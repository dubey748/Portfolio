import React from 'react';
import './ProjectCard.css'; // Import the custom ProjectCard styles

const ProjectCard = ({ project }) => {
  const { title, description, thumbnailUrl, projectLink } = project;

  return (
    <div className="project-card">
      <img src={thumbnailUrl} alt="Project Thumbnail" className="project-thumbnail" />
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={projectLink} className="project-link">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
