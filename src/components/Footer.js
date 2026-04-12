import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="footer-left">
        <span className="footer-logo">Danial.</span>
        <span className="footer-copy">
          © {new Date().getFullYear()} Danial Ahmed Barbhuiya
        </span>
      </div>
      <div className="footer-right">
        <a href="https://github.com/Danial1998"                      target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/danialbarbhuiya/"       target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://x.com/thatguy4tech?s=21"                   target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
