import { workExperience, certificationsData, achievementsData, competitiveData } from '../data/experience';
import { Briefcase, Code, Trophy, CheckCircle, ExternalLink, BadgeCheck, Users, Coffee, Database, Award, Sparkles } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Tag */}
        <div className="section-tag">
          <span>05 — EXPERIENCE, ACHIEVEMENTS & CERTIFICATIONS</span>
        </div>

        {/* Section Heading */}
        <h2 className="section-heading">
          Professional <span className="italic-accent">Journey</span>
        </h2>

        {/* Accent Line */}
        <div className="accent-line"></div>

        {/* Subtitle / Category Label: Work Experience */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '24px'
        }}>
          <Briefcase size={20} color="#818cf8" />
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.35rem',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.01em'
          }}>
            Work Experience
          </h3>
        </div>

        {/* Main Work Experience Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '55px' }}>
          {workExperience.map((exp) => (
            <div
              key={exp.id}
              className="cosmic-card"
              style={{
                padding: '36px 32px',
                textAlign: 'left'
              }}
            >
              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                    marginBottom: '4px'
                  }}>
                    {exp.role}
                  </h3>
                  <span style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#818cf8'
                  }}>
                    {exp.company} • {exp.location}
                  </span>
                  {exp.project && (
                    <span style={{
                      display: 'block',
                      fontSize: '0.92rem',
                      color: '#cbd5e1',
                      fontWeight: 500,
                      marginTop: '4px'
                    }}>
                      Project: <strong style={{ color: '#c084fc' }}>{exp.project}</strong>
                    </span>
                  )}
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(129, 140, 248, 0.12)',
                  color: '#cbd5e1',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: '1px solid rgba(129, 140, 248, 0.2)'
                }}>
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '0.98rem',
                color: '#94a3b8',
                marginBottom: '20px',
                lineHeight: '1.7'
              }}>
                {exp.description}
              </p>

              {/* Bullet Highlights */}
              <ul style={{
                paddingLeft: '20px',
                marginBottom: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                {exp.achievements.map((ach, idx) => (
                  <li key={idx} style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.6' }}>
                    {ach}
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#a5b4fc'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section: Certifications */}
        <div style={{ marginBottom: '55px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '24px'
          }}>
            <BadgeCheck size={20} color="#38bdf8" />
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.01em'
            }}>
              Certifications & Credentials
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '26px'
          }}>
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="cosmic-card"
                style={{
                  padding: '30px 28px',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: cert.id === 1
                        ? 'linear-gradient(135deg, rgba(248, 152, 32, 0.18), rgba(236, 72, 153, 0.15))'
                        : 'linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(99, 102, 241, 0.15))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                      {cert.id === 1 ? <Coffee size={22} color="#f89820" /> : <Database size={22} color="#38bdf8" />}
                    </div>
                    <div>
                      <h4 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.3
                      }}>
                        {cert.title}
                      </h4>
                      <span style={{ fontSize: '0.85rem', color: '#818cf8', fontWeight: 500 }}>
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#34d399',
                    background: 'rgba(52, 211, 153, 0.12)',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(52, 211, 153, 0.25)',
                    whiteSpace: 'nowrap'
                  }}>
                    {cert.badge}
                  </span>
                </div>

                <p style={{
                  fontSize: '0.92rem',
                  color: '#94a3b8',
                  lineHeight: '1.65',
                  marginBottom: '18px',
                  flexGrow: 1
                }}>
                  {cert.description}
                </p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        color: '#cbd5e1'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Achievements & Leadership */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '24px'
          }}>
            <Trophy size={20} color="#c084fc" />
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.01em'
            }}>
              Achievements & Leadership
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '26px'
          }}>
            {achievementsData.map((ach) => (
              <div key={ach.id} className="cosmic-card" style={{ padding: '30px 26px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: ach.icon === 'trophy'
                        ? 'rgba(251, 191, 36, 0.12)'
                        : ach.icon === 'users'
                        ? 'rgba(192, 132, 252, 0.12)'
                        : 'rgba(129, 140, 248, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                      {ach.icon === 'trophy' && <Trophy size={20} color="#fbbf24" />}
                      {ach.icon === 'users' && <Users size={20} color="#c084fc" />}
                      {ach.icon === 'code' && <Code size={20} color="#818cf8" />}
                    </div>
                    <div>
                      <h4 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.12rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.3
                      }}>
                        {ach.title}
                      </h4>
                      <span style={{ fontSize: '0.84rem', color: '#818cf8', fontWeight: 500 }}>
                        {ach.role}
                      </span>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#c084fc',
                    background: 'rgba(192, 132, 252, 0.12)',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(192, 132, 252, 0.25)',
                    whiteSpace: 'nowrap'
                  }}>
                    {ach.metric}
                  </span>
                </div>

                <span style={{ fontSize: '0.86rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '10px' }}>
                  {ach.platform}
                </span>

                <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.65', flexGrow: 1 }}>
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
