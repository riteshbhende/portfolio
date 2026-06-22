import { educationData } from '../data/experience';

const Education = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <h3 style={{
        fontSize: '1.8rem',
        fontWeight: 700,
        marginBottom: '30px',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-heading)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        {/* Graduation Cap Icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--primary)' }}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
        </svg>
        Education
      </h3>

      <div className="timeline">
        {educationData.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel glass-card" style={{ padding: '20px 24px' }}>
              <div className="timeline-header">
                <div>
                  <h4 className="timeline-title">{item.degree}</h4>
                  <span className="timeline-subtitle">{item.school}</span>
                </div>
                <span className="timeline-date">{item.date}</span>
              </div>
              <p className="timeline-content" style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
