import { educationTimeline } from '../data/education';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Tag */}
        <div className="section-tag section-tag-center">
          <span>02 — EDUCATION</span>
        </div>

        {/* Section Heading */}
        <h2 className="section-heading" style={{ textAlign: 'center' }}>
          Academic <span className="italic-accent">Journey</span>
        </h2>

        {/* Accent Line */}
        <div className="accent-line accent-line-center"></div>

        {/* Timeline Component */}
        <div className="timeline-container">
          {/* Central Vertical Glowing Line */}
          <div className="timeline-center-line"></div>

          {educationTimeline.map((item, index) => {
            const isLeft = item.side === 'left';

            return (
              <div key={item.id} className="timeline-row">
                {/* Left Column Content (or empty spacer) */}
                <div className="timeline-content-side">
                  {isLeft && (
                    <div className="cosmic-card timeline-card-left" style={{ padding: '28px 32px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                        <h3 style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.35rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          letterSpacing: '-0.01em',
                          lineHeight: 1.25
                        }}>
                          {item.level}
                        </h3>
                        <span style={{
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: '#818cf8',
                          background: 'rgba(129, 140, 248, 0.12)',
                          padding: '4px 12px',
                          borderRadius: '9999px',
                          border: '1px solid rgba(129, 140, 248, 0.25)'
                        }}>
                          {item.stream}
                        </span>
                      </div>

                      <h4 style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: '#cbd5e1',
                        marginBottom: '14px'
                      }}>
                        {item.institution}
                      </h4>

                      <p style={{
                        fontSize: '0.92rem',
                        color: '#94a3b8',
                        lineHeight: '1.6',
                        marginBottom: '18px'
                      }}>
                        {item.description}
                      </p>

                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        padding: '6px 14px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}>
                        <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{item.scoreLabel}:</span>
                        <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>{item.score}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Central Glowing Node with Year */}
                <div className="timeline-center-node-col">
                  <div className="timeline-node-circle">
                    <GraduationCap size={22} color="#a5b4fc" />
                  </div>
                  <span
                    className="timeline-year-tag"
                    style={{
                      left: isLeft ? 'calc(100% + 16px)' : 'auto',
                      right: !isLeft ? 'calc(100% + 16px)' : 'auto'
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Right Column Content (or empty spacer) */}
                <div className="timeline-content-side">
                  {!isLeft && (
                    <div className="cosmic-card timeline-card-right" style={{ padding: '28px 32px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                        <h3 style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.35rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          letterSpacing: '-0.01em',
                          lineHeight: 1.25
                        }}>
                          {item.level}
                        </h3>
                        <span style={{
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: '#818cf8',
                          background: 'rgba(129, 140, 248, 0.12)',
                          padding: '4px 12px',
                          borderRadius: '9999px',
                          border: '1px solid rgba(129, 140, 248, 0.25)'
                        }}>
                          {item.stream}
                        </span>
                      </div>

                      <h4 style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: '#cbd5e1',
                        marginBottom: '14px'
                      }}>
                        {item.institution}
                      </h4>

                      <p style={{
                        fontSize: '0.92rem',
                        color: '#94a3b8',
                        lineHeight: '1.6',
                        marginBottom: '18px'
                      }}>
                        {item.description}
                      </p>

                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        padding: '6px 14px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}>
                        <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{item.scoreLabel}:</span>
                        <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>{item.score}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
