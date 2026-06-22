import { competitiveData, certificationsData } from '../data/experience';

const Experience = () => {
  return (
    <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {/* Competitive Programming Card */}
      <div>
        <h3 style={{
          fontSize: '1.8rem',
          fontWeight: 700,
          marginBottom: '24px',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-heading)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          {/* Code Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--primary)' }}>
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          Competitive Programming
        </h3>

        <div className="glass-panel glass-card" style={{ padding: '24px', borderRadius: '16px' }}>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            Active problem solver across various algorithmic challenges. Dedicated to honing problem-solving speed, logic optimization, and data structures.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '16px'
          }}>
            {/* Stat Item 1: Solved Problems */}
            <div style={{
              padding: '16px',
              borderRadius: '12px',
              backgroundColor: 'var(--card-border)',
              textAlign: 'center',
              transition: 'transform var(--transition-fast), border-color var(--transition-fast)',
              border: '1px solid transparent'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'var(--primary-light)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            >
              <span className="gradient-text" style={{ fontSize: '1.8rem', fontWeight: 800, display: 'block', fontFamily: 'var(--font-heading)' }}>
                {competitiveData.totalSolved}
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Solved Problems
              </span>
            </div>

            {/* Stat Item 2: CodeChef Rating */}
            <div style={{
              padding: '16px',
              borderRadius: '12px',
              backgroundColor: 'var(--card-border)',
              textAlign: 'center',
              transition: 'transform var(--transition-fast), border-color var(--transition-fast)',
              border: '1px solid transparent'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'var(--primary-light)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            >
              <span className="gradient-text" style={{ fontSize: '1.8rem', fontWeight: 800, display: 'block', fontFamily: 'var(--font-heading)' }}>
                {competitiveData.codechefRating}
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                CodeChef Rating
              </span>
            </div>

            {/* Stat Item 3: LeetCode solved */}
            <div style={{
              padding: '16px',
              borderRadius: '12px',
              backgroundColor: 'var(--card-border)',
              textAlign: 'center',
              transition: 'transform var(--transition-fast), border-color var(--transition-fast)',
              border: '1px solid transparent'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'var(--primary-light)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            >
              <span className="gradient-text" style={{ fontSize: '1.8rem', fontWeight: 800, display: 'block', fontFamily: 'var(--font-heading)' }}>
                {competitiveData.leetcodeSolved}
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                LeetCode Solved
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Card */}
      <div>
        <h3 style={{
          fontSize: '1.8rem',
          fontWeight: 700,
          marginBottom: '24px',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-heading)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          {/* Award/Award-ribbon Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--primary)' }}>
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
          Certifications
        </h3>

        <div className="glass-panel glass-card" style={{ padding: '24px', borderRadius: '16px' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0, margin: 0 }}>
            {certificationsData.map((cert, idx) => (
              <li 
                key={idx} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--card-border)',
                  border: '1px solid transparent',
                  transition: 'border-color var(--transition-fast), transform var(--transition-fast)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-light)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {/* Shield Check Icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 11l2 2 4-4"></path>
                </svg>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
