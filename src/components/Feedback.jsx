import React, { useState, useCallback, useMemo } from "react";
import Slider from "react-slick";
import './Feedback.css'
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const FeedbackCard = React.memo(({ client, expandedCard, handleCardHover, handleCardLeave, truncateDescription }) => {
  return (
    <div
      className={`feedback-card ${expandedCard === client.id ? 'expanded' : ''}`}
      onMouseEnter={() => handleCardHover(client.id)}
      onMouseLeave={handleCardLeave}
    >
      <div className="card-content"> {/* Wrap the elements in a div */}
        <img src={client.image} alt={client.title} />
        <h3 className="client-title">{client.title}</h3>
        <h4 className="client-designation">
          {client.designation}, at <strong> {client.company}</strong>
        </h4>
      </div>
      <div className="social-icons">
        <a href={client.social.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={client.social.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p className="description">
        {expandedCard === client.id ? client.description : truncateDescription(client.description)}
      </p>
    </div>
  );
});

const Feedback = React.memo(({ ClientsInfo }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardHover = useCallback((index) => {
    setExpandedCard(index);
  }, []);

  const handleCardLeave = useCallback(() => {
    setExpandedCard(null);
  }, []);

  const settings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the autoplaySpeed value to control the scrolling speed
  }), []);

  const maxWordCount = 7; // Maximum number of words to display in card description

  const truncateDescription = useMemo(() => (description) => {
    const words = description.split(' ');
    if (words.length > maxWordCount) {
      return words.slice(0, maxWordCount).join(' ') + '...';
    }
    return description;
  }, []);

  return (
    <Slider {...settings} className="feedback-slider">
      {ClientsInfo.map((client) => (
        <FeedbackCard
          key={client.id}
          client={client}
          expandedCard={expandedCard}
          handleCardHover={handleCardHover}
          handleCardLeave={handleCardLeave}
          truncateDescription={truncateDescription}
        />
      ))}
    </Slider>
  );
});

export default Feedback;
