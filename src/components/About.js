import React from 'react';
import useReveal from '../hooks/useReveal';
import './About.css';

const LIFE_CARDS = [
  {
    icon: '🏋️',
    title: 'Gym is Non-Negotiable',
    body: 'Deadlift PR: 140kg. I go most days. The discipline built in the gym transfers everywhere else in life.'
  },
  {
    icon: '⚽',
    title: 'Real Madrid Until the End',
    body: "Been playing FIFA since school. Football isn't a hobby — it's a language I've spoken my whole life."
  },
  {
    icon: '🔧',
    title: 'Home Tinkerer',
    body: 'Recently built a full home CCTV monitoring system with EZVIZ cameras. Technology should serve real life.'
  },
  {
    icon: '🤲',
    title: 'Faith First',
    body: 'Muslim. Everything I do is rooted in gratitude, honesty, and the intention to leave things better than I found them.'
  },
];

const About = () => {
  const [ref1, vis1] = useReveal();
  const [ref2, vis2] = useReveal();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className={`about-main reveal ${vis1 ? 'visible' : ''}`} ref={ref1}>
          <div className="about-left">
            <span className="section-label">The person behind the code</span>
            <h2 className="about-title">
              Built by faith.<br />
              Driven by family.<br />
              <span className="gold">Expressed in code.</span>
            </h2>
            <div className="gold-line" />
          </div>

          <div className="about-right">
            <p className="about-lead">
              My father gave without limits. My mother's kindness became my compass.
              My younger sister — somehow — became my role model. I didn't become a
              software engineer for the title. I became one because I saw technology
              as a way to do something <em>real</em>.
            </p>
            <p>
              I graduated from NIT Silchar with a B.Tech in Computer Science, then
              spent years at UnitedHealth Group, Oracle, and now ServiceNow — building
              systems that serve thousands. I'm currently completing my M.Tech in
              AI&nbsp;&amp;&nbsp;ML at BITS Pilani, because there's always more to learn.
            </p>
            <p>
              I'm Muslim. Alhamdulillah is not something I say — it's something I
              live. Gratitude shapes how I work, how I treat people, and what I choose
              to build.
            </p>
            <div className="about-meta">
              <div className="meta-item">
                <span className="meta-label">Email</span>
                <a href="mailto:danial.nits.cse@gmail.com" className="meta-value">
                  danial.nits.cse@gmail.com
                </a>
              </div>
              <div className="meta-item">
                <span className="meta-label">Location</span>
                <span className="meta-value">Hailakandi, Assam, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`about-life reveal ${vis2 ? 'visible' : ''}`} ref={ref2}>
          {LIFE_CARDS.map((card, i) => (
            <div key={i} className="life-card">
              <div className="life-icon">{card.icon}</div>
              <h4 className="life-title">{card.title}</h4>
              <p className="life-body">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
