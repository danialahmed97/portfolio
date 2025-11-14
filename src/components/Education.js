import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMedal } from 'react-icons/fa';
import './Education.css';
import { getImagePath } from '../utils';

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "High School",
      institution: "Saint Mary's School",
      logo: getImagePath('sms.jpg'),
      location: 'Hailakandi, Assam',
      period: '2005-2015',
      achievements: [
        '93% in the 10th standard',
        'District rank 3 in the 10th standard',
        'District rank 2 in Science Merit Test in 9th and 10th standard'
      ]
    },
    {
      id: 2,
      degree: 'Higher Secondary',
      institution: 'Ramanuj Gupta JC',
      logo: getImagePath('rgjc.jpg'),
      location: 'Silchar, Assam',
      period: '2015 - 2017',
      achievements: [
        '7th rank in 11th standard',
        '92% in the 12th standard'
      ]
    },
    {
      id: 3,
      degree: 'B.Tech in CSE',
      institution: 'NIT Silchar',
      logo: getImagePath('nits.png'),
      location: 'Silchar, Assam',
      period: '2017 - 2021',
      achievements: [
        'Graduated with 8.5 CGPA in Computer Science and Engineering',
      ]
    },
    {
      id: 4,
      degree: 'M.Tech in AI & ML',
      institution: 'BITS Pilani',
      logo: getImagePath('bits.png'),
      location: 'Pilani, Rajasthan',
      period: '2025 - 2027',
      achievements: [
        'Currently pursuing Masters in Artificial Intelligence and Machine Learning',
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-cards">
          {educations.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-content">
                <div className="education-header">
                  {edu.logo && (
                    <div className="institution-logo">
                      <img src={edu.logo} alt={`${edu.institution} logo`} />
                    </div>
                  )}
                  <div>
                    <h3>{edu.degree}</h3>
                    <div className="institution">{edu.institution}</div>
                  </div>
                </div>
                <div className="edu-meta">
                  <span><FaCalendarAlt /> {edu.period}</span>
                  <span>{edu.location}</span>
                </div>
                <p>{edu.description}</p>
                <div className="edu-achievements">
                  <h4><FaMedal /> Achievements</h4>
                  <ul>
                    {edu.achievements.map((achievement, index) => (
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

export default Education;