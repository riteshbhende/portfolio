import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { bio } = portfolioData;

  const stats = [
    { number: "150+", label: "Problems Solved" },
    { number: "3", label: "Full-Stack Projects" },
    { number: "2", label: "Certifications" },
    { number: "7.72", label: "B.Tech CGPA" }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A brief introduction to my background, focus, and core principles</p>

        <div className="grid-2" style={{ alignItems: 'center', marginTop: '40px' }}>
          {/* Bio text */}
          <div style={{ textAlign: 'left' }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '20px'
            }}>
              Aspiring Software Developer building efficient and scalable full-stack applications.
            </h3>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              marginBottom: '24px',
              lineHeight: '1.7'
            }}>
              {bio}
            </p>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              marginBottom: '32px',
              lineHeight: '1.7'
            }}>
              I specialize in Java and C++ with a strong foundation in Data Structures, Algorithms, and Object-Oriented programming. I leverage Spring Boot, MySQL, and Docker for scalable backend services, and use React.js and Tailwind CSS to design dynamic, responsive frontends.
            </p>
            <a href="#contact" className="btn btn-primary">
              Work With Me
            </a>
          </div>

          {/* Quick stats grid */}
          <div className="grid-2" style={{ gap: '20px' }}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel glass-card"
                style={{
                  textAlign: 'center',
                  padding: '30px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderRadius: '16px'
                }}
              >
                <span className="gradient-text" style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  display: 'block',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {stat.number}
                </span>
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
