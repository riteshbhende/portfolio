import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="glass-panel" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '16px 24px',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderRadius: '0 0 16px 16px',
      backgroundColor: 'var(--navbar-bg)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0
      }}>
        {/* Brand Logo */}
        <a href="#home" style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: '1.4rem',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{
            background: 'var(--accent-gradient)',
            color: 'white',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}>RB</span>
          <span>Ritesh Bhende</span>
        </a>

        {/* Desktop Navigation Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px'
        }} className="desktop-menu">
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            gap: '24px',
            margin: 0,
            padding: 0
          }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  transition: 'color var(--transition-fast), background-color var(--transition-fast)'
                }}
                onMouseOver={(e) => {
                  e.target.style.color = 'var(--primary)';
                  e.target.style.backgroundColor = 'rgba(var(--primary-hsl), 0.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.backgroundColor = 'transparent';
                }}
                >
                  {link.name === 'Experience' ? 'Journey' : link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? (
              /* Moon Icon */
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              /* Sun Icon */
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          {/* Divider */}
          <div style={{
            width: '1px',
            height: '20px',
            backgroundColor: 'var(--card-border)',
            margin: '0 4px'
          }}></div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <a 
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-toggle"
              style={{ width: '40px', height: '40px' }}
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a 
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-toggle"
              style={{ width: '40px', height: '40px' }}
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile menu toggle button */}
        <div className="mobile-toggle-wrapper" style={{ display: 'none', gap: '8px', alignItems: 'center' }}>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="theme-toggle"
            style={{ width: '40px', height: '40px' }}
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="glass-panel mobile-menu" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          borderLeft: 'none',
          borderRight: 'none',
          borderBottom: '1px solid var(--card-border)',
          borderRadius: '0 0 16px 16px',
          padding: '16px 24px',
          backgroundColor: 'var(--navbar-bg)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: 'var(--card-shadow)'
        }}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            margin: 0,
            padding: 0
          }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    fontSize: '1rem',
                    display: 'block',
                    padding: '8px 0'
                  }}
                >
                  {link.name === 'Experience' ? 'Journey' : link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CSS styling in JSX to handle responsiveness of navbar */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle-wrapper {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
