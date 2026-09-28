import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Dynamic active section detection
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="nav-pill-wrapper">
      <nav className={`nav-pill-container ${scrolled ? 'nav-scrolled' : ''}`}>
        {/* Brand Name Logo */}
        <a href="#home" className="nav-logo">
          <span style={{ color: '#ffffff' }}>RITESH</span>
          <span style={{ color: '#a5b4fc', marginLeft: '6px' }}>BHENDE</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links-list">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link-item ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Action Button: Let's Talk */}
        <a href="#contact" className="nav-cta-btn">
          <span>Let's Talk</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-hamburger-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={22} color="#ffffff" /> : <Menu size={22} color="#ffffff" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <span className="nav-logo">{portfolioData.name.toUpperCase()}</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px', padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      color: '#cbd5e1',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'block',
                      padding: '8px 0'
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: '12px' }}>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="nav-cta-btn"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <style>{`
        .mobile-hamburger-btn {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
        }
        .mobile-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(4, 6, 18, 0.85);
          backdrop-filter: blur(12px);
          z-index: 1001;
          display: flex;
          justify-content: flex-end;
        }
        .mobile-drawer-content {
          width: 280px;
          height: 100%;
          background: #0d1126;
          border-left: 1px solid rgba(148, 163, 230, 0.2);
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 968px) {
          .mobile-hamburger-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
