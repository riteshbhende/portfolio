import { useState } from 'react';
import { skillsCategories, skillsList } from '../data/skills';
import { GithubIcon } from './Icons';
import {
  Bot,
  Link2,
  Layers,
  Flame,
  Cpu,
  Activity,
  Compass,
  Puzzle,
  Settings,
  RefreshCw,
  Code,
  Terminal,
  Coffee,
  FileCode,
  Database,
  Layout,
  Palette,
  Zap,
  Atom,
  FlaskConical,
  Crown,
  Globe,
  Gauge,
  Box,
  HardDrive,
  Server,
  GitBranch,
  Send,
  Binary,
  BoxSelect,
  Table
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Helper to render icon by name
  const renderIcon = (iconName, color) => {
    const props = { size: 18, color: color || '#818cf8', strokeWidth: 2.2 };
    switch (iconName) {
      case 'bot': return <Bot {...props} />;
      case 'link-2': return <Link2 {...props} />;
      case 'layers': return <Layers {...props} />;
      case 'flame': return <Flame {...props} />;
      case 'cpu': return <Cpu {...props} />;
      case 'activity': return <Activity {...props} />;
      case 'compass': return <Compass {...props} />;
      case 'puzzle': return <Puzzle {...props} />;
      case 'settings': return <Settings {...props} />;
      case 'refresh-cw': return <RefreshCw {...props} />;
      case 'code': return <Code {...props} />;
      case 'terminal': return <Terminal {...props} />;
      case 'coffee': return <Coffee {...props} />;
      case 'file-code': return <FileCode {...props} />;
      case 'database': return <Database {...props} />;
      case 'layout': return <Layout {...props} />;
      case 'palette': return <Palette {...props} />;
      case 'zap': return <Zap {...props} />;
      case 'atom': return <Atom {...props} />;
      case 'flask-conical': return <FlaskConical {...props} />;
      case 'crown': return <Crown {...props} />;
      case 'globe': return <Globe {...props} />;
      case 'gauge': return <Gauge {...props} />;
      case 'box': return <Box {...props} />;
      case 'hard-drive': return <HardDrive {...props} />;
      case 'server': return <Server {...props} />;
      case 'git-branch': return <GitBranch {...props} />;
      case 'github': return <GithubIcon {...props} />;
      case 'send': return <Send {...props} />;
      case 'binary': return <Binary {...props} />;
      case 'box-select': return <BoxSelect {...props} />;
      case 'table': return <Table {...props} />;
      default: return <Code {...props} />;
    }
  };

  const filteredSkills = activeCategory === 'All'
    ? skillsList
    : skillsList.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Tag */}
        <div className="section-tag section-tag-center">
          <span>03 — SKILLS</span>
        </div>

        {/* Section Heading */}
        <h2 className="section-heading" style={{ textAlign: 'center' }}>
          Tech I <span className="italic-accent">Work With</span>
        </h2>

        {/* Accent Line */}
        <div className="accent-line accent-line-center"></div>

        {/* Filter Category Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '45px'
        }}>
          {skillsCategories.map((cat) => {
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
                  boxShadow: isSelected ? '0 0 16px rgba(129, 140, 248, 0.3)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tech Badges Cloud (Matching Image 4) */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '14px',
          maxWidth: '1050px',
          margin: '0 auto'
        }}>
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="tech-pill"
              style={{ animation: 'badge-pop 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {renderIcon(skill.icon, skill.color)}
              </span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes badge-pop {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
