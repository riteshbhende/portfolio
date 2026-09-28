import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(148, 163, 230, 0.1)',
      padding: '40px 0',
      background: 'rgba(5, 6, 16, 0.95)',
      position: 'relative',
      zIndex: 2
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.15rem',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.5px',
            display: 'block',
            marginBottom: '4px'
          }}>
            {portfolioData.name.toUpperCase()}
          </span>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
            © {new Date().getFullYear()} • Engineered for Innovation & Performance
          </p>
        </div>

        <button
          onClick={scrollToTop}
          style={{
            background: 'rgba(14, 18, 42, 0.8)',
            border: '1px solid rgba(148, 163, 230, 0.2)',
            color: '#cbd5e1',
            padding: '10px 18px',
            borderRadius: '9999px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            fontWeight: 600,
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#818cf8';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = 'rgba(148, 163, 230, 0.2)';
            e.currentTarget.style.color = '#cbd5e1';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span>Back to top</span>
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
