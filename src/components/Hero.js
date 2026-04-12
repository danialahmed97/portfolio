import React from 'react';
import './Hero.css';

const TICKER = [
  'Software Engineer',
  '5 Years Experience',
  'ServiceNow',
  'M.Tech AI & ML',
  'BITS Pilani',
  '140kg Deadlift',
  'Real Madrid',
  'Alhamdulillah',
];

const Hero = () => {
  const yearsExp = Math.floor(
    (new Date() - new Date('2020-06-01')) / (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-glow" />
        <div className="hero-grid" />
      </div>

      <div className="hero-arabic" aria-hidden="true">الحمد لله</div>

      <div className="container hero-content">
        <span className="section-label hero-label">Based in India · Available for work</span>

        <h1 className="hero-name">
          <span className="hero-first">Danial</span>
          <span className="hero-last">Ahmed.</span>
        </h1>

        <div className="hero-roles">
          <span>Software Engineer</span>
          <span className="hero-dot">·</span>
          <span>Builder</span>
          <span className="hero-dot">·</span>
          <span>Believer</span>
        </div>

        <p className="hero-tagline">
          I build things that work.<br />
          <em>For the people who need them most.</em>
        </p>

        <div className="hero-ctas">
          <a href="#work"    className="btn-primary">See My Work</a>
          <a href="#contact" className="btn-outline">Let's Talk</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-val">{yearsExp}+</span>
            <span className="stat-lbl">Years Exp.</span>
          </div>
          <span className="stat-div" />
          <div className="stat">
            <span className="stat-val">3</span>
            <span className="stat-lbl">Companies</span>
          </div>
          <span className="stat-div" />
          <div className="stat">
            <span className="stat-val">140kg</span>
            <span className="stat-lbl">Deadlift PR</span>
          </div>
          <span className="stat-div" />
          <div className="stat">
            <span className="stat-val">Hala</span>
            <span className="stat-lbl">Madrid</span>
          </div>
        </div>
      </div>

      <div className="hero-ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i} className="ticker-item">
              {item} <span className="ticker-sep">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
