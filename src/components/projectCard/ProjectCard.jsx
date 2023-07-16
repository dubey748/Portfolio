import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProjectCard.css";

const ProjectCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await axios.get(
      "https://abhishekbackend.onrender.com/projects"
    );
    setData(res.data);
    setLoading(false);
    console.log(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (link) => {
    window.location.href = link;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project">
      {data.map((project) => (
        <div
          className="project-card"
          key={project._id}
          style={{ backgroundImage: `url(${project.thumbnailUrl})` }}
          onClick={() => handleClick(project.projectLink)}
        >
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
