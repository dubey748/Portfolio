import React from 'react';
import './Testimonial.css'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Web Developer',
    company: 'ABC Company',
    linkedin: 'john.doe.linkdin',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget ultricies felis, ac ullamcorper risus.',
    image: 'https://avatars.githubusercontent.com/u/65311526?v=4', // Add the image URL here
  },
  {
    id: 2,
    name: 'John Doe',
    designation: 'Web Developer',
    company: 'ABC Company',
    linkedin: 'john.doe.linkdin',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget ultricies felis, ac ullamcorper risus.',
    image: 'https://avatars.githubusercontent.com/u/65311526?v=4', // Add the image URL here
  },
  {
    id: 3,
    name: 'John Doe',
    designation: 'Web Developer',
    company: 'ABC Company',
    linkedin: 'john.doe.linkdin',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget ultricies felis, ac ullamcorper risus.',
    image: 'https://avatars.githubusercontent.com/u/65311526?v=4', // Add the image URL here
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
    {testimonials.map((testimonial) => (
      <div key={testimonial.id} className="testimonial-card">
        <img src={testimonial.image} alt={`Image of ${testimonial.name}`} />
        <p className="testimonial-description">{testimonial.testimonial}</p>
        <span className="testimonial-author">{testimonial.name}</span>
        <span className="testimonial-designation">{testimonial.designation}</span>
        <span className="testimonial-company">{testimonial.company}</span>
        <a
          className="testimonial-linkedin"
          href={`https://www.linkedin.com/in/${testimonial.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    ))}
  </div>
  );
};

export default Testimonial;
