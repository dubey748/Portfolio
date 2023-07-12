// src/components/ContactForm.jsx

import React, { useState } from 'react';
import './ContactForm.css'; // Import the custom ContactForm styles

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate form submission delay (you can replace this with your actual form submission logic)
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  

  return (
    <div className="contact-form-container">
      <h2>Contact me</h2>
      {formSubmitted ? (
        <p>Thank you! Abhishek will get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
