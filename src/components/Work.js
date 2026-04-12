import React from 'react';
import useReveal from '../hooks/useReveal';
import './Work.css';

const EXPERIENCES = [
  {
    period: '2021 – 2022',
    role: 'Software Engineer',
    company: 'UnitedHealth Group',
    location: 'Hyderabad, India',
    stack: ['Java', 'React', 'Node.js', 'Kafka', 'MySQL', 'AWS'],
    highlights: [
      'Replaced AEM with Strapi CMS — 100% cost savings, better SEO',
      'Optimised medical insurance claims pipeline with Kafka for faster validation',
      'Resolved critical API bottlenecks and UI regressions across the platform',
    ],
  },
  {
    period: '2022 – 2024',
    role: 'Senior Software Engineer',
    company: 'Oracle',
    location: 'Hyderabad, India',
    stack: ['Java', 'C++', 'Spring Boot', 'Kafka', 'OCI', 'Terraform', 'Gen AI'],
    highlights: [
      'Migrated to Spring WebFlux — 50% more concurrent requests with non-blocking I/O',
      'Integrated Cohere Gen AI for automated comment generation — 10× faster workflows',
      'Built multi-threaded C++ backend for large-scale file uploads on OCI',
    ],
    featured: true,
  },
  {
    period: '2024 – Present',
    role: 'Software Engineer',
    company: 'ServiceNow',
    location: 'Remote, India',
    stack: ['JavaScript', 'Kubernetes', 'Prometheus', 'Grafana', 'Thanos', 'SQL'],
    highlights: [
      'Built centralised observability system spanning all dependent clusters',
      'Automated QA pipeline for on-demand test environments — zero manual setup',
      'Integrated plugins that streamlined deployment and testing workflows',
    ],
  },
];

const Work = () => {
  const [ref1, vis1] = useReveal();
  const [ref2, vis2] = useReveal();

  return (
    <section id="work" className="work">
      <div className="container">

        {/* Experience header */}
        <div className={`work-block reveal ${vis1 ? 'visible' : ''}`} ref={ref1}>
          <span className="section-label">Where I've been</span>
          <h2 className="work-title">Experience</h2>
        </div>

        {/* Experience list */}
        <div className={`exp-list reveal ${vis2 ? 'visible' : ''}`} ref={ref2}>
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className={`exp-card ${exp.featured ? 'featured' : ''}`}>
              <div className="exp-period">{exp.period}</div>
              <div className="exp-body">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-company">{exp.company} · {exp.location}</span>
                  </div>
                  {exp.featured && <span className="exp-badge">Senior</span>}
                </div>
                <ul className="exp-highlights">
                  {exp.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
                <div className="exp-stack">
                  {exp.stack.map((s, j) => <span key={j} className="stack-tag">{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>


</div>
    </section>
  );
};

export default Work;
