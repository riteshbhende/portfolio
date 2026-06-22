import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { name, socials } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-panel" style={{
      borderBottom: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderRadius: '16px 16px 0 0',
      padding: '40px 24px',
      marginTop: 'auto',
      backgroundColor: 'var(--navbar-bg)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        {/* Footer branding */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)'
          }}>
            {name}
          </h3>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            maxWidth: '400px'
          }}>
            Crafting premium interactive interfaces and high-performance applications.
          </p>
        </div>

        {/* Footer Navigation quick links */}
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: 0,
          padding: 0
        }}>
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)'
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Footer socials */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {Object.entries(socials).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-muted)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              aria-label={key}
            >
              {key === 'github' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>}
              {key === 'linkedin' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>}
              {key === 'twitter' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>}
              {key === 'bluesky' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 0 0-4 4c0 3.33 3 7 10 9 7-2 10-5.67 10-9a4 4 0 0 0-4-4c-2 0-4 1.33-6 4z"></path></svg>}
            </a>
          ))}
        </div>

        {/* Copyright notice */}
        <div style={{
          borderTop: '1px solid var(--card-border)',
          width: '100%',
          paddingTop: '24px',
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}>
          &copy; {currentYear} {name}. All rights reserved. Created with Vite, React, and CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
