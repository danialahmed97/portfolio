import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-img-container">
              <img src="/danial.jpg" alt="Profile" className="about-placeholder" />
            </div>
          </div>
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
            I am a Computer Science graduate from NIT Silchar who is passionate about software developement, specializing in web applications and optimized backend systems. Skilled in RESTful APIs, interactive UIs, databases (SQL/NoSQL), and cloud platforms (AWS/OCI).
            </p>
            <p>
              I specialize in modern frameworks like React, SpringBoot and cloud technologies like K8S, Docker. I'm constantly learning new technologies to stay at the forefront of software development.
            </p>
            <div className="about-details">
              <div className="about-detail">
                <strong>Name:</strong> Danial Ahmed Barbhuiya
              </div>
              <div className="about-detail">
                <strong>Email:</strong> danial.nits.cse@gmail.com
              </div>
              <div className="about-detail">
                <strong>Location:</strong> Hailakandi, Assam, India
              </div>
            </div>
            <a href="/danial_resume.pdf" className="btn" download>Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;