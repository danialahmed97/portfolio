import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare template parameters
    const templateParams = {
      to_email: 'danial.nits.cse@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    
    // Send email using EmailJS
    emailjs.send(
      'service_p5zppco',     // Create a service on EmailJS dashboard
      'template_uskmtge',    // Create an email template on EmailJS
      templateParams,
      'lftkSeqOYBIz08uTz'      // Your EmailJS public key
    )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSubmitted(true);
        
        // Reset form after submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        // If you want error handling, add this state variable to your component
        // const [error, setError] = useState(null);
        // Or just use an alert instead
        alert('Failed to send email. Please try again later.');
      })
      .finally(() => {
        // If using loading state (optional)
        // setLoading(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's talk about everything!</h3>
            <p>
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>danial.nits.cse@gmail.com</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9435089958</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Hailakandi, Assam, India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            {submitted ? (
              <div className="form-success">
                <h3>Thank you!</h3>
                <p>Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;