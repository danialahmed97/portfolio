import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Hero.css';
import { getImagePath } from '../utils';

const Hero = () => {
  // Force scroll to top when Hero component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Calculate years of experience dynamically
  const yearsOfExperience = Math.floor(
    (new Date() - new Date('2020-06-01')) / (1000 * 60 * 60 * 24 * 365.25)
  );
  
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="fade-in">Hi, I'm <span className="highlight">Danial</span></h1>
          <h2 className="fade-in" style={{ animationDelay: '0.2s' }}>
            Software Engineer at <a href='https://www.servicenow.com' target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
              <span style={{ color: '#81B5A1' }}>ServiceNow</span>
            </a>
          </h2>
          <p className="fade-in hero-description" style={{ animationDelay: '0.4s' }}>
            I am a Software developer with {yearsOfExperience} years of experience building scalable applications, AI and cloud solutions.
          </p>
          <div className="hero-btns fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          <div className="social-icons fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com/Danial1998" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/danialbarbhuiya/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/thatguy4tech?s=21" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
        <div className="hero-image fade-in" style={{ animationDelay: '1s' }}>
          <div className="profile-img">
            <img src={getImagePath('pfp.jpeg')} alt="Profile" className="profile-placeholder" />
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;