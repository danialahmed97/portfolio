import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import { getImagePath } from '../utils';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Linked List Cycle Detection Visualizer',
      description: 'An interactive fun portal to visualize cycle detection in a linked list',
      image: getImagePath('ll.png'),
      category: 'web',
      technologies: ['Javascript', 'HTML', 'CSS'],
      github: 'https://github.com/danialahmed97/ll-cycle-detection',
      live: 'https://danialahmed97.github.io/ll-cycle-detection/'
    },
    {
      id: 2,
      title: 'Currency Converter',
      description: 'Any currency to INR converter.',
      image: getImagePath('exchange.jpeg'),
      category: 'web',
      technologies: ['JavaScript', 'API Integration', 'React','HTML'],
      github: 'https://github.com/danialahmed97/anyCurrencyToINRconverter',
      live: 'https://danialahmed97.github.io/anyCurrencyToINRconverter/'
    },
    {
      id: 3,
      title: 'Piano Visualizer',
      description: 'A fun piano visualizer using keyboard.',
      image: getImagePath('piano.jpeg'),
      category: 'web',
      technologies: ['React', 'CSS', 'Javascript','HTML'],
      github: 'https://github.com/danialahmed97/keypad_music_app',
      live: 'https://danialahmed97.github.io/keypad_music_app/'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Some Fun Projects</h2>
        <div className="project-filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'web' ? 'active' : ''} 
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button 
            className={filter === 'app' ? 'active' : ''} 
            onClick={() => setFilter('app')}
          >
            App
          </button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-img">
              <img src={project.image} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;