import React, { useEffect, useState, useMemo } from "react";
import abhishek from "../../assets/images/abhishek.jpg";
import "./Banner.css"; 
import { FaLinkedin,  FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';

const text =
  "Hello, I'm ABhishek Dubey, a skilled frontend engineer with 2+ years of experience specializing in React JS development. I have a passion for crafting elegant, user-friendly web applications that deliver exceptional user experiences. With a strong foundation in React, Redux, and related technologies, I excel in building modern, responsive, and scalable interfaces. My expertise extends to integrating APIs and third-party services to seamlessly fetch and display data from the backend. I'm committed to staying abreast of the latest industry trends and technologies, constantly seeking opportunities to expand my knowledge and enhance my skills. I thrive in collaborative environments, working closely with cross-functional teams to understand project requirements and translate them into high-quality code. My attention to detail, problem-solving abilities, and dedication to writing clean, maintainable code make me an asset to any development team. Let's connect and discuss how I can contribute to your next frontend project!";

const words = text.split(" ");

const Banner = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  const animatedWords = useMemo(() => words, [text]);

  return (
    <div className="portfolio-container">
      <div className="details-container">
        <div className="designation">
          <h2>Frontend Engineer</h2>
        </div>
        <div className={`description ${showText ? "animated" : ""}`}>
          {animatedWords.map((word, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              {word}{" "}
            </span>
          ))}
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/dubey748/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ color: "red", marginRight: "10px", fontSize: "24px" }} />
          </a>
          <a href="https://www.instagram.com/dubey_748/"target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ color: "red", marginRight: "10px", fontSize: "24px" }} />
          </a>
          <a href="https://twitter.com/dubey_748"target="_blank" rel="noopener noreferrer">
            <FaTwitter style={{ color: "red", marginRight: "10px", fontSize: "24px" }} />
          </a>
          <a href="https://www.facebook.com/dubey748"target="_blank" rel="noopener noreferrer">
            <FaFacebook style={{ color: "red", marginRight: "10px", fontSize: "24px" }} />
          </a>
          <a href="https://github.com/dubey748"target="_blank" rel="noopener noreferrer">
            <AiFillGithub style={{ color: "red", marginRight: "10px", fontSize: "24px" }} />
          </a>
          <a href="https://leetcode.com/dubey_748/"target="_blank" rel="noopener noreferrer">
            <SiLeetcode style={{ color: "red", marginRight: "10px", fontSize: "24px" }} />
          </a>
        </div>
      </div>

      <div className="banner-container">
        <img src={abhishek} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
