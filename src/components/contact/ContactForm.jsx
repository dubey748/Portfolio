import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css"; // Import the custom ContactForm styles

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xqkvkveq");

  if (state.succeeded) {
    return <p className="success-message">Thank you! I will get back to you soon.</p>;
  }

  return (
    <div className="contact-form-container">
      <div className="contact-details">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
