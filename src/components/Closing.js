import React from 'react';
import useReveal from '../hooks/useReveal';
import './Closing.css';

const AUDIENCES = [
  {
    tag: 'To the ambitious',
    headline: 'You need me.',
    body: "Modern problems don't wait. AI, automation, cloud — I speak that language fluently. If you're building something that matters, let's make it work.",
    cta: 'Work With Me',
    href: '#contact',
  },
  {
    tag: 'To the struggling',
    headline: 'Do good.',
    body: "The goodness will follow you home. I've seen it. I live it. Whatever you're going through — keep your hands clean and your intentions honest.",
    cta: null,
  },
  {
    tag: 'To every student',
    headline: 'Do the hard thing.',
    body: 'At least once. It changes you in ways that comfort never will. The difficult path is the one that builds something real inside you.',
    cta: null,
  },
];

const AudienceCard = ({ audience, index }) => {
  const [ref, visible] = useReveal(0.1);

  return (
    <div
      className={`audience-card reveal ${visible ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${index * 0.14}s` }}
    >
      <span className="audience-tag">{audience.tag}</span>
      <h3 className="audience-headline">{audience.headline}</h3>
      <p className="audience-body">{audience.body}</p>
      {audience.cta && (
        <a href={audience.href} className="btn-primary audience-cta">
          {audience.cta} →
        </a>
      )}
    </div>
  );
};

const Closing = () => {
  const [ref, visible] = useReveal(0.1);

  return (
    <section id="closing" className="closing">
      <div className="closing-bg" aria-hidden="true">
        <div className="closing-glow" />
      </div>

      <div className="container">
        <div className={`closing-intro reveal ${visible ? 'visible' : ''}`} ref={ref}>
          <span className="section-label">A word for everyone</span>
          <h2 className="closing-title">
            Three things I need<br />
            <span className="gold">different people to hear.</span>
          </h2>
        </div>

        <div className="audience-grid">
          {AUDIENCES.map((a, i) => (
            <AudienceCard key={i} audience={a} index={i} />
          ))}
        </div>

        <div className="closing-sign">
          <p className="closing-arabic" aria-label="Alhamdulillah">الحمد لله</p>
          <p className="closing-translation">Alhamdulillah — All praise is due to God.</p>
          <p className="closing-byline">For every step. For every door. For every person who helped.</p>
        </div>
      </div>
    </section>
  );
};

export default Closing;
