// App.js - Main component
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user previously set dark mode
    const savedMode = localStorage.getItem('darkMode');
    // If no preference is saved, default to dark mode
    return savedMode !== null ? savedMode === 'true' : true;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    
    // Apply dark mode to the body element as well
    if (newMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };
  
  // Set initial dark mode on body when component mounts
  React.useEffect(() => {
    // Set initial dark mode in localStorage if not already set
    if (localStorage.getItem('darkMode') === null) {
      localStorage.setItem('darkMode', 'true');
    }

    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Prevent auto-scrolling on refresh
  React.useEffect(() => {
    if (window.location.hash) {
      // Slightly delay the scroll reset to ensure it happens after any browser auto-scroll
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;