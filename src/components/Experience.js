import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';
import { getImagePath } from '../utils';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'UnitedHealth Group',
      logo: getImagePath('uhg-logo.jpg'), // Add your company logo file here
      location: 'Hyderabad, India',
      period: 'Jun 2021 - Jun 2022',
      description: 'Worked on backend and full-stack development using Java, JavaScript, React.js, Node.js, Kafka, MySQL, and AWS to build scalable applications, optimize performance, and enhance user experience.',
      achievements: [
        'CMS Migration: Replaced AEM with Strapi, achieving 100% cost savings and improving search optimization.',
        'Claims Processing: Optimized medical insurance claims system with Kafka, enabling faster validation and rollback mechanisms.',
        'Performance & Bug Fixes: Enhanced API efficiency, removed bottlenecks, and resolved critical UI issues to improve system performance.'
      ]
    },
    {
      id: 2,
      title: 'Senior Software Engineer',
      company: 'Oracle',
      logo: getImagePath('oracle.jpg'), // Add your company logo file here
      location: 'Hyderabad, India',
      period: 'Jun 2022 - Dec 2024',
      description: 'Worked on Oracle HCM SaaS, focusing on system scalability, microservices optimization, and AI integration using Java, C++, Spring Boot, Kafka, JavaScript, OCI, and Generative AI. Improved system efficiency, user experience, and cloud infrastructure.',
      achievements: [
        'Enhanced Scalability: Migrated to Spring WebFlux, enabling non-blocking I/O and handling 50% more concurrent requests.',
        'AI & Automation: Integrated Cohere Gen AI to automate comment generation, reducing transaction initiation time by 10x.',
        'Cloud & Performance Optimization: Built a multi-threaded C++ backend for file uploads, integrated Kafka for decoupling services, and managed OCI deployments with Terraform.'
      ]
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: 'ServiceNow',
      logo: getImagePath('snow.png'), // Add your company logo file here
      location: 'Remote, India',
      period: 'Dec 2018 - Present',
      description: 'Worked on cloud observability and automation, leveraging JavaScript, Kubernetes, Prometheus, Grafana, Thanos, and SQL to enhance monitoring and streamline testing workflows.',
      achievements: [
        'Centralized Observability: Set up a unified monitoring system for all dependent clusters, ensuring seamless cloud operations.',
        'Automated QA Pipelines: Developed pipelines to provide on-demand test environments, reducing manual setup effort.',
        'Infrastructure Optimization: Integrated peripheral services and plugins, improving testing efficiency and deployment workflows.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="company-info">
                    {exp.logo && (
                      <div className="company-logo">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                        />
                      </div>
                    )}
                    <div>
                      <h3>{exp.title}</h3>
                      <span className="company">{exp.company}</span>
                    </div>
                  </div>
                  <div className="timeline-meta">
                    <span className="location"><FaCalendarAlt /> {exp.period}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <p>{exp.description}</p>
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;