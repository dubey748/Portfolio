import React, { useEffect, useState } from "react";
import abhishek from "../assets/images/abhishek.jpg";
import "./Banner.css"; // Import the CSS file for styling

const Banner = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  const text =
    "Hello, I'm ABhishek Dubey, a skilled frontend engineer with 2+ years of experience specializing in React JS development. I have a passion for crafting elegant, user-friendly web applications that deliver exceptional user experiences. With a strong foundation in React, Redux, and related technologies, I excel in building modern, responsive, and scalable interfaces. My expertise extends to integrating APIs and third-party services to seamlessly fetch and display data from the backend. I'm committed to staying abreast of the latest industry trends and technologies, constantly seeking opportunities to expand my knowledge and enhance my skills. I thrive in collaborative environments, working closely with cross-functional teams to understand project requirements and translate them into high-quality code. My attention to detail, problem-solving abilities, and dedication to writing clean, maintainable code make me an asset to any development team. Let's connect and discuss how I can contribute to your next frontend project!";
  const words = text.split(" ");

  return (
    <div className="portfolio-container">
      <div className="details-container">
        <div className="designation">
          <h2>Frontend Engineer</h2>
        </div>
        <div className={`description ${showText ? "animated" : ""}`}>
          {words.map((word, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              {word}{" "}
            </span>
          ))}
        </div>
      </div>

      <div className="banner-container">
        <img src={abhishek} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
