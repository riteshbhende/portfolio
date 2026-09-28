import { useState } from 'react';
import { projectsCategories, projectsData } from '../data/projects';
import { Music, FileText, Trophy, ShoppingBag, Users, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const renderProjectIcon = (iconType) => {
    switch (iconType) {
      case 'music':
        return <Music size={46} color="#c084fc" strokeWidth={1.8} />;
      case 'file-text':
        return <FileText size={46} color="#f472b6" strokeWidth={1.8} />;
      case 'trophy':
        return <Trophy size={46} color="#38bdf8" strokeWidth={1.8} />;
      case 'shopping-bag':
        return <ShoppingBag size={46} color="#34d399" strokeWidth={1.8} />;
      case 'users':
        return <Users size={46} color="#fbbf24" strokeWidth={1.8} />;
      default:
        return <FileText size={46} color="#c084fc" strokeWidth={1.8} />;
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Tag */}
        <div className="section-tag">
          <span>04 — PROJECTS</span>
        </div>

        {/* Section Heading */}
        <h2 className="section-heading">
          Things I've <span className="italic-accent">Built</span>
        </h2>

        {/* Accent Line */}
        <div className="accent-line"></div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {projectsCategories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isSelected ? '1px solid #818cf8' : '1px solid rgba(148, 163, 230, 0.15)',
                  background: isSelected ? 'linear-gradient(135deg, rgba(129, 140, 248, 0.25), rgba(168, 85, 247, 0.2))' : 'rgba(14, 18, 42, 0.6)',
                  color: isSelected ? '#ffffff' : '#94a3b8',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid matching Image 5 */}
        <div className="projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '30px'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="cosmic-card project-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: 0
              }}
            >
              {/* Top Media Header with Center Vector Icon (matching Image 5) */}
              <div style={{
                height: '180px',
                background: 'linear-gradient(180deg, #111430 0%, #0c0f24 100%)',
                borderBottom: '1px solid rgba(148, 163, 230, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Background Ambient Radial Glow */}
                <div style={{
                  position: 'absolute',
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: project.iconGradient,
                  filter: 'blur(35px)',
                  opacity: 0.25
                }}></div>

                {/* Centered Glowing Icon */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '84px',
                  height: '84px',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                }}>
                  {renderProjectIcon(project.iconType)}
                </div>
              </div>

              {/* Project Card Content Body */}
              <div style={{
                padding: '28px 26px',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                textAlign: 'left'
              }}>
                {/* Project Number Label */}
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  color: '#a855f7',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                  display: 'block'
                }}>
                  {project.projectNumber}
                </span>

                {/* Clean Modern Project Title */}
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: '#ffffff',
                  lineHeight: '1.3',
                  marginBottom: '6px'
                }}>
                  {project.title}
                </h3>

                {/* Subtitle */}
                <span style={{
                  fontSize: '0.88rem',
                  color: '#818cf8',
                  fontWeight: 500,
                  marginBottom: '14px',
                  display: 'block'
                }}>
                  {project.subtitle}
                </span>

                {/* Description Paragraph */}
                <p style={{
                  fontSize: '0.92rem',
                  color: '#94a3b8',
                  lineHeight: '1.65',
                  marginBottom: '20px',
                  flexGrow: 1
                }}>
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '24px'
                }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(148, 163, 230, 0.1)',
                  marginTop: 'auto'
                }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#cbd5e1',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#818cf8')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                  >
                    <GithubIcon size={16} />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: '#38bdf8',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#a855f7')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#38bdf8')}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card {
          border-radius: 20px;
          background: rgba(13, 17, 38, 0.85);
          border: 1px solid rgba(148, 163, 230, 0.12);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6), 0 0 30px rgba(129, 140, 248, 0.18);
        }

        @media (max-width: 500px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
