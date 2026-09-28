import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { bioHeading, bioHeadingAccent, bioParagraphs, stats, name } = portfolioData;

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Tag */}
        <div className="section-tag">
          <span>01 — ABOUT</span>
        </div>

        {/* Section Heading with Editorial Serif & Italic Accent */}
        <h2 className="section-heading">
          {bioHeading} <span className="italic-accent">{bioHeadingAccent}</span>
        </h2>

        {/* Accent Underline */}
        <div className="accent-line"></div>

        {/* 2-Column Grid */}
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '50px',
          alignItems: 'start'
        }}>
          {/* Bio Story Left Column */}
          <div style={{ textAlign: 'left' }}>
            {bioParagraphs.map((para, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '1.08rem',
                  color: '#cbd5e1',
                  lineHeight: '1.8',
                  marginBottom: idx === bioParagraphs.length - 1 ? '32px' : '22px'
                }}
              >
                {para}
              </p>
            ))}

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-cosmic-primary" style={{ padding: '12px 28px' }}>
                Explore My Work
              </a>
              <a href="#contact" className="btn-cosmic-secondary" style={{ padding: '12px 28px' }}>
                Get In Touch
              </a>
            </div>
          </div>

          {/* Bento Stat Cards Right Column (2x2 Grid) */}
          <div className="stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px'
          }}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="cosmic-card stat-card"
                style={{
                  padding: '36px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: '160px'
                }}
              >
                {/* Big Stat Number */}
                <span className="stat-number" style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '3.2rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  color: '#818cf8',
                  marginBottom: '10px',
                  display: 'block'
                }}>
                  {stat.number}
                </span>

                {/* Stat Label */}
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  color: '#94a3b8',
                  lineHeight: 1.4
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .stat-card {
          border-radius: 20px;
          background: rgba(13, 17, 38, 0.75);
          border: 1px solid rgba(148, 163, 230, 0.12);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6), 0 0 25px rgba(129, 140, 248, 0.18);
        }

        .stat-card:hover .stat-number {
          color: #c084fc;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 520px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
