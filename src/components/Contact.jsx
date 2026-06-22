import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email, socials, location } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate sending message API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'rgba(var(--primary-hsl), 0.01)' }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind or want to chat? Send me a message!</p>

        <div className="grid-2" style={{ gap: '40px', marginTop: '40px' }}>
          {/* Info Details Panel */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '16px',
                fontFamily: 'var(--font-heading)'
              }}>
                Let's discuss something great
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.7'
              }}>
                I'm always open to discussing web development partnerships, open-source projects, or new engineering opportunities. Drop me a line directly or use the contact form.
              </p>
            </div>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'var(--accent-gradient)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>Email me at</span>
                  <a href={`mailto:${email}`} style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    {email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'var(--accent-gradient)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>Location</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{location}</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>Follow my work</h4>
              <div style={{ display: 'flex', gap: '12px' }}>
                {Object.entries(socials).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{
                      width: '44px',
                      height: '44px',
                      padding: 0,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {key === 'github' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>}
                    {key === 'linkedin' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>}
                    {key === 'twitter' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>}
                    {key === 'bluesky' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 0 0-4 4c0 3.33 3 7 10 9 7-2 10-5.67 10-9a4 4 0 0 0-4-4c-2 0-4 1.33-6 4z"></path></svg>}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="glass-panel glass-card" style={{ padding: '36px', borderRadius: '20px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project details..."
                  className="form-control"
                  rows="5"
                  required
                  style={{ resize: 'vertical' }}
                />
              </div>

              {/* Status alerts */}
              {status === 'success' && (
                <div style={{
                  padding: '12px 16px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  color: '#10b981',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  marginBottom: '16px',
                  textAlign: 'left'
                }}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {status === 'error' && (
                <div style={{
                  padding: '12px 16px',
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  color: '#ef4444',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  marginBottom: '16px',
                  textAlign: 'left'
                }}>
                  Please fill in all the required fields.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'loading'}
                style={{ width: '100%', marginTop: '10px' }}
              >
                {status === 'loading' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
