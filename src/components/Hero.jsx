import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, FileText } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  const { name, titles, tagline, resumeUrl } = portfolioData;

  // Typewriter effect state
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseDuration = isDeleting ? 500 : 2200;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullTitle.length) {
          setCurrentText(fullTitle.substring(0, currentText.length + 1));
        } else {
          // Finished typing current title, pause then delete
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullTitle.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, titles]);

  return (
    <section id="hero" className="section" style={{
      paddingTop: '180px',
      paddingBottom: '110px',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Hero Left Content */}
          <div className="hero-left" style={{ textAlign: 'left' }}>
            {/* Big Headline matching the reference structure */}
            <h1 className="hero-name">
              RITESH <span className="hero-name-line2">BHENDE</span>
            </h1>

            {/* Typewriter Subtitle */}
            <div className="hero-role-wrap" style={{
              display: 'flex',
              alignItems: 'center',
              minHeight: '40px',
              marginBottom: '24px'
            }}>
              <span className="hero-role" style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.7rem)',
                fontWeight: 600,
                color: '#e2e8f0',
                letterSpacing: '-0.3px'
              }}>
                {currentText}
              </span>
              <span className="typewriter-cursor">|</span>
            </div>

            {/* Bio Description Paragraph */}
            <p className="hero-bio" style={{
              fontSize: '1.08rem',
              color: '#94a3b8',
              lineHeight: '1.75',
              maxWidth: '560px',
              marginBottom: '40px'
            }}>
              {tagline}
            </p>

            {/* Action Buttons */}
            <div className="hero-actions" style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#projects" className="btn-cosmic-primary">
                <span>View My Work</span>
                <ArrowDown size={18} strokeWidth={2.5} />
              </a>

              <a
                href={resumeUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cosmic-secondary"
              >
                <FileText size={18} />
                <span>View Resume</span>
              </a>
            </div>
          </div>

          {/* Hero Right Avatar in Glowing Cosmic Ring */}
          <div className="hero-right" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Ambient Outer Glow */}
            <div className="avatar-ambient-glow"></div>

            {/* Glowing Gradient Border Frame */}
            <div className="avatar-neon-frame">
              <div className="avatar-inner-circle">
                <img
                  src={heroImg}
                  alt={name}
                  className="avatar-image"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-name {
          font-family: 'Cabinet Grotesk', 'Outfit', 'Clash Display', 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(3.8rem, 7.5vw, 6.2rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 22px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: baseline;
        }

        .hero-name-line2 {
          background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .typewriter-cursor {
          display: inline-block;
          color: #a855f7;
          font-weight: 300;
          font-size: 1.8rem;
          margin-left: 2px;
          animation: blink 0.9s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .avatar-ambient-glow {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(56, 189, 248, 0.25) 50%, transparent 70%);
          filter: blur(40px);
          z-index: 1;
          animation: avatar-pulse 6s ease-in-out infinite alternate;
        }

        @keyframes avatar-pulse {
          0% { transform: scale(0.9); opacity: 0.6; }
          100% { transform: scale(1.1); opacity: 0.9; }
        }

        .avatar-neon-frame {
          position: relative;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          padding: 6px;
          background: linear-gradient(135deg, #22d3ee 0%, #a855f7 50%, #ec4899 100%);
          box-shadow: 0 0 45px rgba(139, 92, 246, 0.4), 0 0 90px rgba(34, 211, 238, 0.25);
          z-index: 2;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .avatar-neon-frame:hover {
          transform: scale(1.03);
          box-shadow: 0 0 60px rgba(139, 92, 246, 0.6), 0 0 110px rgba(34, 211, 238, 0.4);
        }

        .avatar-inner-circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: radial-gradient(circle at center, #1e1b4b 0%, #090a1a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid #070814;
        }

        .avatar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transform: scale(1.02);
          transition: transform 0.5s ease;
        }

        .avatar-neon-frame:hover .avatar-image {
          transform: scale(1.08);
        }

        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 40px !important;
          }
          .hero-grid > div:first-child {
            text-align: center !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .avatar-neon-frame {
            width: 260px;
            height: 260px;
          }
          .avatar-ambient-glow {
            width: 280px;
            height: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
