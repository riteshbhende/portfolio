import { portfolioData } from '../data/portfolioData';
import heroImg from '../assets/hero.png';

const Hero = () => {
  const { name, title, tagline, socials } = portfolioData;

  return (
    <section id="home" className="section" style={{
      paddingTop: '160px',
      paddingBottom: '100px',
      display: 'flex',
      alignItems: 'center',
      minHeight: '85vh'
    }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Hero Left Content */}
          <div style={{ textAlign: 'left' }}>
            <h5 style={{
              fontSize: '1.1rem',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '16px',
              fontFamily: 'var(--font-heading)'
            }}>
              Welcome to my space
            </h5>
            <h1 style={{
              fontSize: '3.8rem',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              Hi, I'm <span className="gradient-text">{name}</span>
            </h1>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 500,
              color: 'var(--text-primary)',
              marginBottom: '24px'
            }}>
              {title}
            </h2>
            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              marginBottom: '40px',
              maxWidth: '540px'
            }}>
              {tagline}
            </p>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary">
                Get In Touch
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#projects" className="btn btn-secondary">
                View Projects
              </a>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '40px' }}>
              {Object.entries(socials).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-muted)',
                    transition: 'color var(--transition-fast), transform var(--transition-fast)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  aria-label={key}
                >
                  {key === 'github' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  )}
                  {key === 'linkedin' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  )}
                  {key === 'twitter' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  )}
                  {key === 'bluesky' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 0 0-4 4c0 3.33 3 7 10 9 7-2 10-5.67 10-9a4 4 0 0 0-4-4c-2 0-4 1.33-6 4z"></path>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* Ambient Background Circles */}
            <div className="glow-circle" style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'var(--accent-gradient)',
              opacity: '0.15',
              filter: 'blur(30px)',
              zIndex: 0,
              animation: 'pulse 6s infinite alternate'
            }}></div>
            
            {/* Spinning dotted/gradient border frame */}
            <div style={{
              position: 'relative',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              padding: '6px',
              background: 'var(--accent-gradient)',
              boxShadow: 'var(--card-shadow)',
              zIndex: 1,
              animation: 'spin-slow 25s linear infinite'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'var(--bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={heroImg} 
                  alt={name} 
                  style={{
                    width: '95%',
                    height: '95%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    transform: 'scale(1.02) rotate(0deg)', /* prevent photo from spinning with the border */
                    animation: 'counter-spin 25s linear infinite'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styled components animations */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.12; }
          100% { transform: scale(1.1); opacity: 0.22; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes counter-spin {
          0% { transform: scale(1.02) rotate(0deg); }
          100% { transform: scale(1.02) rotate(-360deg); }
        }
        @media (max-width: 968px) {
          #home h1 {
            font-size: 2.8rem !important;
          }
          #home {
            padding-top: 120px !important;
            text-align: center;
          }
          #home div[style*="textAlign: left"] {
            text-align: center !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          #home div[style*="display: flex"] {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
