import React, { useState } from "react";
import "../Styles/Contact.css"; // Keep the CSS import
import { faLinkedinIn,faInstagram, faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare, faEnvelope} from "@fortawesome/free-solid-svg-icons";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // In a real application, you would send this data to your backend
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="title gradient-text">Get In Touch</h2>
        
        <div className="contact-wrapper">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="info-title">Contact Information</h3>
            
            <div className="info-item">
              <div className="icon-wrapper email-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="info-content">
                <p className="info-label">Email</p>
                <a href="mailto:muthuramki30598@gmail.com" className="info-value">muthuramki30598@gmail.com</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-wrapper phone-icon">
                <FontAwesomeIcon icon={faPhoneSquare} />
              </div>
              <div className="info-content">
                <p className="info-label">Phone</p>
                <a href="tel:+919345319189" className="info-value">+91 934 531 9189</a>
              </div>
            </div>
            
            <h3 className="social-title">Connect With Me</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ramki-m-0aa85b167/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="social-icon instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-icon twitter">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-container">
            <h3 className="form-title">Send Me a Message</h3>
            
            {isSubmitted && (
              <div className="success-message">
                <p className="success-title">Thank you for your message!</p>
                <p>I'll get back to you as soon as possible.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Hello, I'd like to chat about..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;