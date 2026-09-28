import { publicationsData } from '../data/publications';
import { BookOpen, ExternalLink, Award } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publications" className="section">
      <div className="container">
        {/* Section Tag */}
        <div className="section-tag">
          <span>05 — PUBLICATIONS</span>
        </div>

        {/* Section Heading */}
        <h2 className="section-heading">
          Research & <span className="italic-accent">Publications</span>
        </h2>

        {/* Accent Line */}
        <div className="accent-line"></div>

        {/* Publications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '30px'
        }}>
          {publicationsData.map((pub) => (
            <div
              key={pub.id}
              className="cosmic-card"
              style={{
                padding: '36px 30px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Header Badges */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  color: '#a855f7',
                  textTransform: 'uppercase'
                }}>
                  {pub.pubNumber}
                </span>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  color: '#38bdf8',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  border: '1px solid rgba(56, 189, 248, 0.25)'
                }}>
                  <Award size={14} />
                  <span>{pub.status} ({pub.year})</span>
                </div>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: '#ffffff',
                lineHeight: 1.35,
                marginBottom: '10px'
              }}>
                {pub.title}
              </h3>

              {/* Conference / Journal */}
              <span style={{
                fontSize: '0.9rem',
                color: '#818cf8',
                fontWeight: 500,
                marginBottom: '16px',
                display: 'block'
              }}>
                {pub.conference}
              </span>

              {/* Abstract */}
              <p style={{
                fontSize: '0.92rem',
                color: '#94a3b8',
                lineHeight: '1.7',
                marginBottom: '22px',
                flexGrow: 1
              }}>
                {pub.abstract}
              </p>

              {/* Keywords */}
              <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '24px'
              }}>
                {pub.keywords.map((kw) => (
                  <span
                    key={kw}
                    style={{
                      fontSize: '0.78rem',
                      color: '#cbd5e1',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    #{kw}
                  </span>
                ))}
              </div>

              {/* DOI / Read Paper Link */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '16px',
                borderTop: '1px solid rgba(148, 163, 230, 0.1)'
              }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>DOI: {pub.doi}</span>

                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#38bdf8',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#c084fc')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#38bdf8')}
                >
                  <span>IEEE Xplore</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
