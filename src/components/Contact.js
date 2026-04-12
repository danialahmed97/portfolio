import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import useReveal from '../hooks/useReveal';
import './Contact.css';

const Contact = () => {
  const [ref, visible] = useReveal();
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.send(
      'service_p5zppco',
      'template_uskmtge',
      {
        to_email:  'danial.nits.cse@gmail.com',
        from_name: form.name,
        from_email: form.email,
        message:   form.message,
      },
      'lftkSeqOYBIz08uTz'
    )
    .then(() => {
      setStatus('done');
      setForm({ name: '', email: '', message: '' });
    })
    .catch(() => setStatus('error'));
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className={`contact-inner reveal ${visible ? 'visible' : ''}`} ref={ref}>

          <div className="contact-left">
            <span className="section-label">Get in touch</span>
            <h2 className="contact-title">
              Let's build<br />
              <span className="gold">something real.</span>
            </h2>
            <div className="gold-line" />
            <p className="contact-desc">
              Whether you have a project in mind, a problem to solve,
              or just want to say salaam — I'm here.
            </p>

            <div className="contact-links">
              <a href="mailto:danial.nits.cse@gmail.com" className="contact-link">
                <span className="cl-label">Email</span>
                <span className="cl-value">danial.nits.cse@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/danialbarbhuiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="cl-label">LinkedIn</span>
                <span className="cl-value">danialbarbhuiya</span>
              </a>
              <a
                href="https://github.com/Danial1998"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="cl-label">GitHub</span>
                <span className="cl-value">Danial1998</span>
              </a>
            </div>
          </div>

          <div className="contact-form-wrap">
            {status === 'done' ? (
              <div className="contact-success">
                <span className="success-icon">✓</span>
                <h3>Message sent.</h3>
                <p>I'll get back to you soon, inshallah.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me what's on your mind..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>
                {status === 'error' && (
                  <p className="form-error">Something went wrong. Try emailing directly.</p>
                )}
                <button
                  type="submit"
                  className="btn-primary contact-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
