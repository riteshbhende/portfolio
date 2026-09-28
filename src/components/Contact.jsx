import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, Send, Check, Copy, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import confetti from 'canvas-confetti';

const Contact = () => {
  const { email, phone, location, socials } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Send form data to FormSubmit API which forwards directly to riteshbhende57@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Message from ${formData.name}: ${formData.subject || 'New Contact Inquiry'}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success');
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8b5cf6', '#38bdf8', '#c084fc', '#ffffff']
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Failed to deliver message.');
      }
    } catch (err) {
      console.error('Email dispatch error:', err);
      setStatus('error');
      setErrorMessage(
        'Unable to send automatically right now. Please email directly at ' + email
      );
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Tag */}
        <div className="section-tag">
          <span>06 — CONTACT</span>
        </div>

        {/* Section Heading */}
        <h2 className="section-heading">
          Get In <span className="italic-accent">Touch</span>
        </h2>

        {/* Accent Line */}
        <div className="accent-line"></div>

        {/* 2-Column Contact Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1.3fr',
          gap: '50px',
          alignItems: 'start'
        }} className="contact-grid">
          {/* Left Info Column */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: '#ffffff',
                marginBottom: '14px'
              }}>
                Let's discuss something great
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: '#94a3b8',
                lineHeight: '1.75'
              }}>
                I'm actively seeking opportunities as a Java Full Stack Developer, Backend Software Engineer, and Spring Boot Developer. I'm open to discussing full-time engineering roles, backend projects, and technical collaborations. Feel free to reach out anytime!
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Email Card */}
              <div
                className="cosmic-card"
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderRadius: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.2), rgba(168, 85, 247, 0.2))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Mail size={20} color="#c084fc" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: 600 }}>Email Address</span>
                    <a href={`mailto:${email}`} style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f8fafc', textDecoration: 'none' }}>
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: copiedEmail ? '#34d399' : '#94a3b8',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  title="Copy email"
                >
                  {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>

              {/* Location Card */}
              <div
                className="cosmic-card"
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '16px',
                  gap: '14px'
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(129, 140, 248, 0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={20} color="#38bdf8" />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', fontWeight: 600 }}>Location</span>
                  <span style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f8fafc' }}>{location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '14px' }}>
                Connect With Me
              </span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Twitter / X"
                >
                  <TwitterIcon size={18} />
                </a>
                <a
                  href={socials.email}
                  className="social-btn"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="cosmic-card" style={{ padding: '38px 32px', borderRadius: '24px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  required
                  className="cosmic-input"
                />
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  required
                  className="cosmic-input"
                />
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Java Developer Role / Backend Project Inquiry"
                  className="cosmic-input"
                />
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to talk about..."
                  rows="4"
                  required
                  className="cosmic-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              {status === 'success' && (
                <div style={{
                  padding: '16px',
                  background: 'rgba(52, 211, 153, 0.12)',
                  border: '1px solid rgba(52, 211, 153, 0.35)',
                  borderRadius: '12px',
                  color: '#34d399',
                  fontSize: '0.92rem',
                  lineHeight: '1.5',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <CheckCircle2 size={20} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '2px', color: '#ffffff' }}>Message Sent Successfully!</strong>
                    <span>Your message has been delivered directly to <strong>{email}</strong>. I'll get back to you shortly.</span>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div style={{
                  padding: '14px 16px',
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  borderRadius: '12px',
                  color: '#f87171',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}>
                  <AlertCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span>{errorMessage || 'Something went wrong. Please check your inputs and try again.'}</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-cosmic-primary"
                style={{ width: '100%', padding: '14px', borderRadius: '12px', marginTop: '6px', cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
              >
                {status === 'loading' ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Loader2 size={18} className="spin-loader" />
                    <span>Delivering to Gmail...</span>
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .cosmic-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(10, 13, 30, 0.85);
          border: 1px solid rgba(148, 163, 230, 0.15);
          color: #ffffff;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .cosmic-input:focus {
          outline: none;
          border-color: #818cf8;
          box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.2);
        }

        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(14, 18, 42, 0.8);
          border: 1px solid rgba(148, 163, 230, 0.15);
          color: #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          background: rgba(129, 140, 248, 0.2);
          border-color: #818cf8;
          color: #ffffff;
          transform: translateY(-3px);
        }

        .spin-loader {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
