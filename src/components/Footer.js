import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Danial Ahmed Barbhuiya</h3>
            <p>Full-Stack Developer</p>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="https://github.com/Danial1998" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/danialbarbhuiya/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/thatguy4tech?s=21" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Danial Ahmed Barbhuiya. All rights reserved.</p>
          <p>Made with <FaHeart className="heart-icon" /> by Danial</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;