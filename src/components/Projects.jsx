import { useState } from 'react';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'frontend', 'backend', 'fullstack', 'design'];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  // Helper to generate a themed dynamic background pattern based on project id
  const getProjectBg = (id) => {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
      'linear-gradient(135deg, #2af598 0%, #009efd 100%)',
      'linear-gradient(135deg, #f27121 0%, #e94057 50%, #8a2387 100%)'
    ];
    return gradients[(id - 1) % gradients.length];
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">A curated selection of applications I've designed and developed</p>

        {/* Filter buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="btn"
              style={{
                padding: '8px 20px',
                fontSize: '0.9rem',
                textTransform: 'capitalize',
                background: filter === cat ? 'var(--accent-gradient)' : 'transparent',
                color: filter === cat ? 'white' : 'var(--text-primary)',
                border: '1px solid var(--card-border)',
                boxShadow: filter === cat ? '0 4px 12px rgba(139, 92, 246, 0.25)' : 'none'
              }}
            >
              {cat === 'fullstack' ? 'Full Stack' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-3" style={{ gap: '30px' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-card"
              style={{
                padding: 0,
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                textAlign: 'left'
              }}
            >
              {/* Project Visual Header */}
              <div style={{
                height: '160px',
                background: getProjectBg(project.id),
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                {/* Visual grid pattern */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.1,
                  backgroundImage: 'radial-gradient(circle, white 10%, transparent 11%)',
                  backgroundSize: '12px 12px'
                }}></div>

                {/* Vector Wireframe Illustration */}
                <svg width="120" height="80" viewBox="0 0 120 80" fill="none" style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.25))', zIndex: 1 }}>
                  {/* Browser frame */}
                  <rect x="5" y="5" width="110" height="70" rx="6" fill="#1e1b4b" stroke="#ffffff" strokeWidth="2" />
                  <rect x="5" y="5" width="110" height="15" rx="3" fill="#ffffff" fillOpacity="0.1" />
                  <circle cx="12" cy="12" r="2.5" fill="#ef4444" />
                  <circle cx="20" cy="12" r="2.5" fill="#f59e0b" />
                  <circle cx="28" cy="12" r="2.5" fill="#10b981" />
                  {/* Inner Wireframe Lines */}
                  {project.id === 1 && (
                    <>
                      {/* Dashboard charts */}
                      <path d="M15 60 L40 40 L65 50 L95 30" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="15" y1="65" x2="105" y2="65" stroke="#475569" strokeWidth="2" strokeDasharray="3 3" />
                      <rect x="75" y="25" width="30" height="15" rx="3" fill="#312e81" stroke="#818cf8" strokeWidth="1" />
                    </>
                  )}
                  {project.id === 2 && (
                    <>
                      {/* E-Commerce Cards */}
                      <rect x="15" y="25" width="24" height="24" rx="3" fill="#ffffff" fillOpacity="0.1" />
                      <rect x="48" y="25" width="24" height="24" rx="3" fill="#ffffff" fillOpacity="0.1" />
                      <rect x="81" y="25" width="24" height="24" rx="3" fill="#ffffff" fillOpacity="0.1" />
                      <rect x="15" y="55" width="90" height="8" rx="2" fill="#10b981" />
                    </>
                  )}
                  {project.id === 3 && (
                    <>
                      {/* UI components */}
                      <rect x="15" y="25" width="36" height="12" rx="4" fill="#a78bfa" />
                      <circle cx="80" cy="31" r="8" fill="#ec4899" />
                      <rect x="15" y="48" width="90" height="14" rx="7" fill="none" stroke="#818cf8" strokeWidth="2" />
                    </>
                  )}
                  {project.id === 4 && (
                    <>
                      {/* API node connection */}
                      <circle cx="60" cy="42" r="10" fill="#10b981" />
                      <line x1="30" y1="42" x2="50" y2="42" stroke="#ffffff" strokeWidth="2" />
                      <line x1="70" y1="42" x2="90" y2="42" stroke="#ffffff" strokeWidth="2" />
                      <circle cx="25" cy="42" r="5" fill="#60a5fa" />
                      <circle cx="95" cy="42" r="5" fill="#f472b6" />
                    </>
                  )}
                </svg>
              </div>

              {/* Project Body */}
              <div style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '4px',
                  color: 'var(--text-primary)'
                }}>
                  {project.title}
                </h3>
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: 'var(--primary)',
                  marginBottom: '12px',
                  display: 'block'
                }}>
                  {project.subtitle}
                </span>
                <ul style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                  lineHeight: '1.6',
                  paddingLeft: '18px',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {(project.points || []).map((point, idx) => (
                    <li key={idx} style={{
                      listStyleType: 'disc',
                      paddingLeft: '2px'
                    }}>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '24px'
                }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        backgroundColor: 'var(--card-border)',
                        color: 'var(--text-primary)',
                        padding: '4px 10px',
                        borderRadius: '20px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid var(--card-border)',
                  paddingTop: '16px',
                  marginTop: 'auto'
                }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Source Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--primary)'
                    }}
                  >
                    Live Demo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
