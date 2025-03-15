import React from 'react';
import { FaJava, FaDocker, FaJs, FaReact, FaNodeJs, FaGit, FaFigma, FaSass } from 'react-icons/fa';
import { SiSpringboot, SiKubernetes, SiMysql} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Java', icon: <FaJava />, level: 95 },
    { name: 'SpringBoot', icon: <SiSpringboot />, level: 85 },
    { name: 'JavaScript', icon: <FaJs />, level: 85 },
    { name: 'React', icon: <FaReact />, level: 85 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 70 },
    { name: 'Git', icon: <FaGit />, level: 75 },
    { name: 'Kubernetes', icon: <SiKubernetes />, level: 65 },
    { name: 'MySQL', icon: <SiMysql />, level: 80 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          <div className="skills-text">
            <h3>What I'm capable of</h3>
            <p>
              I've spent several years honing my skills in various technologies. My main focus is on full-stack development with React and SpringBoot but I also have experience with cloud technologies and design tools.
            </p>
            <p>
              I believe in writing clean, maintainable code and creating intuitive user interfaces that provide great user experiences.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;