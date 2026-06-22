import { useState } from 'react';
import { skillsData } from '../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'rgba(var(--primary-hsl), 0.01)' }}>
      <div className="container">
        <h2 className="section-title">My Technical Skills</h2>
        <p className="section-subtitle">A breakdown of my technical proficiencies and primary toolkit</p>

        {/* Tab Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          {skillsData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className="btn"
              style={{
                background: activeCategory === cat.category ? 'var(--accent-gradient)' : 'transparent',
                color: activeCategory === cat.category ? 'white' : 'var(--text-primary)',
                border: '1px solid var(--card-border)',
                boxShadow: activeCategory === cat.category ? '0 4px 12px rgba(139, 92, 246, 0.3)' : 'none',
                padding: '10px 24px'
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Tab Panel Content */}
        <div className="glass-panel glass-card" style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '40px 30px',
          borderRadius: '20px'
        }}>
          {skillsData.map((cat) => {
            if (cat.category !== activeCategory) return null;

            return (
              <div key={cat.category} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                animation: 'fadeIn 0.4s ease'
              }}>
                {cat.skills.map((skill) => (
                  <div key={skill.name} style={{ textAlign: 'left' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div style={{
                      height: '8px',
                      background: 'var(--card-border)',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      {/* Active Progress Bar with animation */}
                      <div style={{
                        height: '100%',
                        width: `${skill.level}%`,
                        background: 'var(--accent-gradient)',
                        borderRadius: '4px',
                        transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
